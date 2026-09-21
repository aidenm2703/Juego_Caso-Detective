#!/usr/bin/env node
/**
 * Genera los retratos SVG de los sospechosos que aún no tienen archivo
 * en public/suspects/. Reproduce la plantilla de los retratos originales
 * (mismo trazado) con paleta determinista por sospechoso.
 * Uso: node scripts/generate-portraits.mjs
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

const ROOT = resolve(process.cwd())
const db = JSON.parse(readFileSync(resolve(ROOT, 'db.json'), 'utf8'))
const dir = resolve(ROOT, 'public/suspects')
mkdirSync(dir, { recursive: true })

function seeded(seedString) {
  let h = 0
  for (let i = 0; i < seedString.length; i += 1) h = (h * 31 + seedString.charCodeAt(i)) | 0
  return () => {
    h = (h * 1103515245 + 12345) & 0x7fffffff
    return h / 0x7fffffff
  }
}

const HAIR = ['#3b2a1a', '#2a241f', '#6b4423', '#8a8578', '#8d3b2a', '#4a2f17']
const SKIN = ['#8d5a3b', '#c1926e', '#e0ad86', '#9b6a45', '#d7a074', '#b8825a']
const SHIRT = ['#222a3a', '#33423a', '#3a2233', '#2a3a22', '#3a3322', '#222f3a', '#402a2a', '#2b3140']
const GRAD = [
  ['68,62,75', '#2a2431'],
  ['52,60,72', '#222630'],
  ['72,52,60', '#30242a'],
  ['54,70,62', '#24302a'],
  ['70,66,50', '#302c24'],
  ['58,54,72', '#282431'],
]

function portrait(s) {
  const rnd = seeded(`suspect-${s.id}-${s.name}`)
  const hair = HAIR[Math.floor(rnd() * HAIR.length)]
  const skin = SKIN[Math.floor(rnd() * SKIN.length)]
  const shirt = SHIRT[Math.floor(rnd() * SHIRT.length)]
  const [gA, gB] = GRAD[Math.floor(rnd() * GRAD.length)]
  const collar = SHIRT[Math.floor(rnd() * SHIRT.length)]
  const dark = s.suspicionLevel === 'HIGH'

  const hairTop = dark ? '#383430' : '#6b5b46'
  const hairUnder = dark ? '#151310' : '#3f3a30'
  const brow = dark ? '#1a120b' : '#3a2a18'

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Retrato">
  <defs>
    <radialGradient id="bg" cx="50%" cy="35%" r="90%">
      <stop offset="0%" stop-color="rgb(${gA})"/>
      <stop offset="100%" stop-color="${gB}"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bg)"/>
  <circle cx="100" cy="100" r="94" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
  <path d="M58,200 C58,152 74,138 100,138 C126,138 142,152 142,200 Z" fill="${shirt}"/>
  <path d="M86,140 L100,158 L114,140 C112,152 88,152 86,140 Z" fill="${collar}"/>
  <rect x="90" y="116" width="20" height="24" fill="${skin}"/>
  <ellipse cx="100" cy="88" rx="34" ry="40" fill="${skin}"/>

      <path d="M68,84 C68,66 70,60 100,58 C130,60 132,66 132,84 C130,94 126,100 118,104 L82,104 C74,100 70,94 68,84 Z" fill="${hairUnder}"/>
      <path d="M70,72 C76,60 124,60 130,72 C124,68 76,68 70,72 Z" fill="${hairTop}"/>

  <ellipse cx="88" cy="84" rx="3.4" ry="4" fill="#1c1e24"/>
  <ellipse cx="112" cy="84" rx="3.4" ry="4" fill="#1c1e24"/>
  <circle cx="89" cy="82.5" r="1" fill="#fff" opacity="0.85"/>
  <circle cx="113" cy="82.5" r="1" fill="#fff" opacity="0.85"/>
  <path d="M83,76 C87,72 91,72 95,74" stroke="${brow}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M105,74 C109,72 113,72 117,76" stroke="${brow}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <path d="M98,86 C97,92 96,96 92,99" stroke="#7a3f12" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M90,108 C96,112 106,112 112,107" stroke="#7a3f12" stroke-width="2.6" fill="none" stroke-linecap="round"/>
` + (dark
  ? `
  <path d="M84,101 C92,105 108,105 116,101" stroke="rgba(70,20,10,0.6)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <path d="M92,78 C96,76 104,76 108,78" stroke="rgba(30,20,10,0.5)" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <circle cx="100" cy="150" r="8" fill="none" stroke="rgba(229,72,77,0.55)" stroke-width="2"/>
`
  : `
  <circle cx="100" cy="150" r="8" fill="none" stroke="rgba(82,224,164,0.45)" stroke-width="2"/>
`) + '</svg>\n'
}

let created = 0
for (const s of db.suspects) {
  const file = resolve(dir, `${s.id}.svg`)
  if (existsSync(file)) continue
  writeFileSync(file, portrait(s), 'utf8')
  created += 1
}

console.log(`[generate-portraits] ${created} retratos generados.`)
for (const id of [7, 8, 9, 10]) {
  const missing = db.suspects.filter((s) => s.caseId === id).filter((s) => !existsSync(resolve(dir, `${s.id}.svg`))).length
  if (missing) console.warn(`  ⚠ caso ${id}: faltan ${missing} retratos`)
}