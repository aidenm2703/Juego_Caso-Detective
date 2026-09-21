/* ------------------------------------------------------------------
   CASE 404 — Sound engine (Web Audio API, no audio files needed)
   ------------------------------------------------------------------
   - Sound effects synthesized with oscillators.
   - Generative suspense music: a slow minor-key drone loop.
   - Preferences persisted in localStorage.
   Everything runs guarded inside try/catch so audio can NEVER crash
   the game (e.g. old browsers / headless environments).
   ------------------------------------------------------------------ */

const SETTINGS_KEY = 'case404_audio_settings'

let audioCtx = null
let masterGain = null
let musicGain = null

let soundEnabled = true
let musicEnabled = false
let musicTimerId = null
let musicBeat = 0

/* ---------------- settings ---------------- */

function loadSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    const saved = raw ? JSON.parse(raw) : {}
    soundEnabled = saved.sound !== false
    musicEnabled = saved.music === true
  } catch {
    soundEnabled = true
    musicEnabled = false
  }
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ sound: soundEnabled, music: musicEnabled }))
  } catch {
    /* storage unavailable */
  }
}

loadSettings()

export function isSoundEnabled() {
  return soundEnabled
}

export function isMusicEnabled() {
  return musicEnabled
}

export function setSoundEnabled(on) {
  soundEnabled = Boolean(on)
  saveSettings()
}

export function setMusicEnabled(on) {
  musicEnabled = Boolean(on)
  saveSettings()
  if (on) startMusic()
  else stopMusic()
}

export function toggleSound() {
  setSoundEnabled(!soundEnabled)
  return soundEnabled
}

export function toggleMusic() {
  setMusicEnabled(!musicEnabled)
  return musicEnabled
}

/* ---------------- audio core ---------------- */

function ensureCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    audioCtx = new AC()
    masterGain = audioCtx.createGain()
    masterGain.gain.value = 0.9
    masterGain.connect(audioCtx.destination)

    musicGain = audioCtx.createGain()
    musicGain.gain.value = 0
    musicGain.connect(masterGain)
  }
  if (audioCtx.state === 'suspended') audioCtx.resume()
  return audioCtx
}

function tone({ freq, type = 'sine', dur = 0.2, gain = 0.2, when = 0, slideTo = null, destination }) {
  const ctx = ensureCtx()
  if (!ctx) return

  const t0 = ctx.currentTime + when
  const osc = ctx.createOscillator()
  const g = ctx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur)

  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)

  osc.connect(g)
  g.connect(destination || masterGain)
  osc.start(t0)
  osc.stop(t0 + dur + 0.03)
}

function noiseBurst({ dur = 0.25, gain = 0.12, when = 0 }) {
  const ctx = ensureCtx()
  if (!ctx) return
  const t0 = ctx.currentTime + when
  const bufferSize = Math.floor(ctx.sampleRate * dur)
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
  const source = ctx.createBufferSource()
  source.buffer = buffer
  const g = ctx.createGain()
  g.gain.setValueAtTime(gain, t0)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  source.connect(g)
  g.connect(masterGain)
  source.start(t0)
}

/* ---------------- sound effects ---------------- */

const SFX = {
  click: [{ freq: 320, type: 'square', dur: 0.05, gain: 0.05 }],
  select: [
    { freq: 620, type: 'sine', dur: 0.09, gain: 0.12 },
    { freq: 930, type: 'sine', dur: 0.14, gain: 0.09, when: 0.06 },
  ],
  deselect: [
    { freq: 500, type: 'sine', dur: 0.09, gain: 0.11 },
    { freq: 350, type: 'sine', dur: 0.13, gain: 0.09, when: 0.05 },
  ],
  suspect: [
    { freq: 523, type: 'triangle', dur: 0.12, gain: 0.14 },
    { freq: 392, type: 'triangle', dur: 0.18, gain: 0.12, when: 0.1 },
  ],
  hint: [
    { freq: 660, type: 'triangle', dur: 0.14, gain: 0.12 },
    { freq: 880, type: 'triangle', dur: 0.22, gain: 0.11, when: 0.12 },
    { freq: 1320, type: 'sine', dur: 0.3, gain: 0.07, when: 0.26 },
  ],
  hintBlocked: [{ freq: 180, type: 'sawtooth', dur: 0.12, gain: 0.07, slideTo: 140 }],
  tick: [{ freq: 1150, type: 'square', dur: 0.04, gain: 0.04 }],
  reveal: [
    { freq: 240, type: 'sine', dur: 0.4, gain: 0.14, slideTo: 920 },
    { freq: 120, type: 'triangle', dur: 0.4, gain: 0.1 },
  ],
  submit: [
    { freq: 330, type: 'triangle', dur: 0.1, gain: 0.12 },
    { freq: 415, type: 'triangle', dur: 0.1, gain: 0.12, when: 0.09 },
    { freq: 494, type: 'triangle', dur: 0.14, gain: 0.12, when: 0.18 },
  ],
  solved: [
    { freq: 523.25, type: 'triangle', dur: 0.16, gain: 0.16 },
    { freq: 659.25, type: 'triangle', dur: 0.16, gain: 0.16, when: 0.14 },
    { freq: 783.99, type: 'triangle', dur: 0.16, gain: 0.16, when: 0.28 },
    { freq: 1046.5, type: 'sine', dur: 0.5, gain: 0.14, when: 0.42 },
    { freq: 523.25, type: 'sine', dur: 0.9, gain: 0.08, when: 0.42 },
  ],
  failed: [
    { freq: 392, type: 'triangle', dur: 0.25, gain: 0.14 },
    { freq: 330, type: 'triangle', dur: 0.25, gain: 0.14, when: 0.22 },
    { freq: 233, type: 'sine', dur: 0.8, gain: 0.14, when: 0.44 },
    { freq: 116.5, type: 'sine', dur: 1.2, gain: 0.12, when: 0.44 },
  ],
  start: [
    { freq: 196, type: 'triangle', dur: 0.3, gain: 0.14 },
    { freq: 294, type: 'triangle', dur: 0.3, gain: 0.12, when: 0.16 },
    { freq: 392, type: 'triangle', dur: 0.5, gain: 0.12, when: 0.32 },
  ],
  page: [{ freq: 440, type: 'sine', dur: 0.07, gain: 0.06 }],
  question: [
    { freq: 220, type: 'triangle', dur: 0.07, gain: 0.07 },
    { freq: 330, type: 'triangle', dur: 0.1, gain: 0.06, when: 0.06 },
  ],
  answer: [{ freq: 370, type: 'sine', dur: 0.13, gain: 0.07, slideTo: 430 }],
  contradiction: [
    { freq: 170, type: 'sawtooth', dur: 0.12, gain: 0.08, slideTo: 120 },
    { freq: 620, type: 'sine', dur: 0.18, gain: 0.08, when: 0.1 },
  ],
  paper: [
    { freq: 680, type: 'triangle', dur: 0.04, gain: 0.035 },
    { freq: 540, type: 'triangle', dur: 0.06, gain: 0.03, when: 0.04 },
  ],
}

export function play(key) {
  if (!soundEnabled) return
  const fx = SFX[key]
  if (!fx) return
  try {
    ensureCtx()
    fx.forEach((params) => tone(params))
  } catch {
    /* never break gameplay because of audio */
  }
}

export function playNoise(key = 'reveal') {
  if (!soundEnabled) return
  try {
    ensureCtx()
    noiseBurst({ dur: 0.3, gain: 0.08 })
  } catch {
    /* ignore */
  }
}

/* ---------------- suspense music (generative loop) ---------------- */

const MUSIC_DRONE = [58.27, 58.27, 61.74, 51.91, 65.41, 55.0, 61.74, 49.0]
const MUSIC_HIGH = [392, 466.16, 349.23, 440, 415.3, 329.63, 466.16, 369.99]
const MUSIC_PULSE = [36.71, 0, 38.89, 0]

function musicTick() {
  const ctx = ensureCtx()
  if (!ctx || !musicGain) return

  const beat = MUSIC_DRONE[musicBeat % MUSIC_DRONE.length]

  // dark, long bass drone
  tone({ freq: beat, type: 'triangle', dur: 2.6, gain: 0.11, destination: musicGain })
  // faint fifth/harmony
  tone({ freq: beat * 1.5, type: 'sine', dur: 1.8, gain: 0.04, destination: musicGain })
  // sub pulse on even beats
  const pulse = MUSIC_PULSE[musicBeat % MUSIC_PULSE.length]
  if (pulse) tone({ freq: pulse, type: 'sine', dur: 0.9, gain: 0.1, destination: musicGain })
  // unsettling high note every 4 beats
  if (musicBeat % 4 === 0) {
    const high = MUSIC_HIGH[(musicBeat / 4) % MUSIC_HIGH.length]
    tone({ freq: high, type: 'sine', dur: 1.4, gain: 0.05, when: 0.2, destination: musicGain })
  }
  // occasional dissonant shimmer
  if (musicBeat % 8 === 3) {
    tone({ freq: beat * 2.01, type: 'sine', dur: 1.1, gain: 0.035, destination: musicGain })
  }

  musicBeat += 1
}

function fadeMusicGain(to, seconds = 0.5) {
  const ctx = ensureCtx()
  if (!ctx || !musicGain) return
  const t = ctx.currentTime
  musicGain.gain.cancelScheduledValues(t)
  musicGain.gain.setValueAtTime(musicGain.gain.value, t)
  musicGain.gain.exponentialRampToValueAtTime(Math.max(0.0001, to), t + seconds)
}

export function startMusic() {
  const ctx = ensureCtx()
  if (!ctx || musicTimerId) return
  fadeMusicGain(0.18)
  musicTick()
  musicTimerId = setInterval(musicTick, 1100)
}

export function stopMusic() {
  if (musicTimerId) {
    clearInterval(musicTimerId)
    musicTimerId = null
  }
  fadeMusicGain(0.0001)
}

export function ensureMusicState() {
  if (musicEnabled && !musicTimerId) startMusic()
  if (!musicEnabled && musicTimerId) stopMusic()
}
