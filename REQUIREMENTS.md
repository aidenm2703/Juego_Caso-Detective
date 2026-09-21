# CASE 404 — REQUIREMENTS CHECKLIST

Matriz de cumplimiento de la rúbrica. Cada requisito indica **dónde** y **cómo** se implementó,
con nombres de archivos, componentes y funciones específicas.

---

## 1. COMPONENTES REUTILIZABLES (>= 4)

**Requisito:** el juego debe estar dividido en componentes reutilizables.

**Implementación:** se crearon 24 componentes además del layout.

| Componente | Archivo | Uso |
|---|---|---|
| Navbar | `src/components/Navbar.jsx` | Barra superior global + toggles de sonido/música + badge de conexión |
| Sidebar | `src/components/Sidebar.jsx` | Navegación principal |
| CaseCard | `src/components/CaseCard.jsx` | Tarjeta de caso en HOME, CASES (descripción + víctima + escena + tira de retratos) |
| CaseBriefing | `src/components/CaseBriefing.jsx` | Briefing de misión pre-cronómetro |
| CaseDashboard | `src/components/CaseDashboard.jsx` | Expediente: dashboard de lectura con muchos documentos (pestaña de la fase de intel) |
| InterrogationRoom | `src/components/InterrogationRoom.jsx` | Sala de interrogatorios: preguntas, reacciones, presión y señales archivadas |
| EvidenceCard | `src/components/EvidenceCard.jsx` | Tarjeta individual de evidencia |
| EvidenceBoard | `src/components/EvidenceBoard.jsx` | Tablero que encapsula el grid |
| StoryPanel | `src/components/StoryPanel.jsx` | Resumen del caso |
| CaseHeader | `src/components/CaseHeader.jsx` | Header sticky de la investigación |
| Timer | `src/components/Timer.jsx` | Temporizador con estados |
| ScorePanel | `src/components/ScorePanel.jsx` | Desglose de puntuación en vivo |
| InvestigationProgress | `src/components/InvestigationProgress.jsx` | Barra "7/10 ANALYZED" |
| HintPanel | `src/components/HintPanel.jsx` | Sistema de pistas |
| FinalVerdict | `src/components/FinalVerdict.jsx` | Panel de acusación |
| Modal | `src/components/Modal.jsx` | Modal de confirmación |
| Notification | `src/components/Notification.jsx` | Toasts |
| RankBadge / StatTile / Tag / ProgressBar | `src/components/` | Utilidades de UI |
| LoadingState / ErrorState / EmptyState | `src/components/` | Estados de la API |
| AppLayout | `src/components/layout/AppLayout.jsx` | Shell + Outlet + Notification |

### Props

Todos los componentes se comunican por props. Ejemplo real en `src/components/EvidenceBoard.jsx`:

```jsx
<EvidenceCard
  key={item.id}
  evidence={item}
  isSelected={selectedIds.includes(item.id)}
  isRevealed={revealedIds.includes(item.id)}
  isLocked={isEvidenceLocked(item, currentActIndex)}
  lockedAct={item.act ?? 1}
  onSelect={onToggle}
  disabled={disabled}
/>
```

### Keys

Todas las listas usan IDs únicos estables (`item.id`, `suspect.id`, `caseData.id`, `row.id`).
**No se usa `key={index}` en ninguna lista.** Ejemplos: `Cases.jsx`, `EvidenceBoard.jsx`,
`Investigation.jsx`, `Leaderboard.jsx`, `Profile.jsx`.

---

## 2. ESTADOS Y HOOKS

### 2.1 useState

**Requisito:** manejar estado del juego con useState.

**Implementación:** `src/pages/Investigation.jsx` mantiene:

```jsx
const [selectedEvidenceIds, setSelectedEvidenceIds] = useState([])
const [selectedSuspectId, setSelectedSuspectId] = useState(null)
const [hintsUsed, setHintsUsed] = useState([])
const [gameStatus, setGameStatus] = useState(GAME_STATUS.LOADING)
const [timeRemaining, setTimeRemaining] = useCountdown(...)
const [showVerdictModal, setShowVerdictModal] = useState(false)
```

Además `Home.jsx`, `Cases.jsx`, `Results.jsx`, `Leaderboard.jsx`, `Profile.jsx` mantienen datos de la API
con `useState` (cases/results/loading/error).

### 2.2 No-mutación

El estado nunca se muta directamente. Ejemplo en `toggleEvidence`:

```jsx
setSelectedEvidenceIds((prev) =>
  prev.includes(item.id) ? prev.filter((one) => one !== item.id) : [...prev, item.id],
)
```

### 2.3 useEffect

**Requisito:** efectos secundarios con useEffect (carga, timer, fin de juego).

| Caso | Archivo | Descripción |
|---|---|---|
| Carga inicial | `Investigation.jsx` | `Promise.all` de caso+sospechosos+evidencias con flag `cancelled` |
| Timer | `hooks/useCountdown.js` | `setInterval` decrementa cada segundo; `clearInterval` en cleanup |
| Fin de juego | `useCountdown.js` | cuando `timeRemaining <= 0` se ejecuta `onExpire` → `completeCase()` |
| Carga de datos | `Home.jsx`, `Cases.jsx`, `Results.jsx`, `Leaderboard.jsx`, `Profile.jsx` | fetch + cancel flags |
| Modal Esc | `Modal.jsx` | listener `keydown` con cleanup |
| Toast | `Notification.jsx` | auto-dismiss con `setTimeout` + cleanup |

El timer del juego:

```jsx
useEffect(() => {
  if (!running) return undefined
  if (timeRemaining <= 0) { timerFinishedRef.current = true; onExpire?.(); return undefined }
  const interval = setInterval(() => setTimeRemaining((prev) => Math.max(0, prev - 1)), 1000)
  return () => clearInterval(interval)
}, [running, timeRemaining, onExpire])
```

### 2.4 Hook adicional (useMemo + useRef)

**Requisito:** usar al menos un hook adicional (useMemo/useRef/useCallback/useContext).

**Implementación:** se utilizan **ambos**.

- **useMemo:**
  - `Investigation.jsx`: `correctEvidenceIds` (derivado).
  - `CaseDashboard.jsx`: `docs` (documentos del expediente construidos desde datos, ordenados, sin recalcular).
  - `Results.jsx`: `selectedEvidenceMap`, `suspectsById`, `evidenceById`, `correctEvidence`, `incorrectEvidence`.
  - `Leaderboard.jsx`: `caseKeys` y `filtered` (filtrado+orden sin recalcular en cada render).
- **useRef:**
  - `useCountdown.js`: `timerFinishedRef` evita doble finalización (StrictMode / estado carrera).
  - `Investigation.jsx`: `finishedRef` garantiza que `completeCase()` corra una sola vez.

*Justificación documentada:* los mapas de búsqueda evitan recomputar `.find()`/`.filter()`
en cada render y las refs protegen acciones irreversibles (envío del veredicto).

---

## 3. REACT ROUTER

**Requisito:** mínimo 3 rutas + ruta dinámica + navegación real.

**Implementación:** `src/App.jsx`.

```jsx
<Route path="/" element={<Home />} />
<Route path="/cases" element={<Cases />} />
<Route path="/case/:id" element={<Investigation />} />   {/* ruta dinámica */}
<Route path="/results/:id" element={<Results />} />       {/* ruta dinámica */}
<Route path="/leaderboard" element={<Leaderboard />} />
<Route path="/profile" element={<Profile />} />
<Route path="*" element={<NotFound />} />
```

- `Link` / `NavLink`: `Sidebar.jsx`, `Navbar.jsx`, `CaseCard.jsx`, página de resultados.
- `useNavigate`: `Investigation.jsx` (→ `/results/:id`), `Results.jsx`, error states.
- La ruta `/case/:id` carga el caso desde la API (GET `/cases/:id`).

---

## 4. CONSUMO DE DATOS (json-server)

### 4.1 GET obligatorios + Loading + Error

**Requisito:** GET reales con estados loading/error visibles.

**Implementación:** `src/services/api.js` expone `getCases`, `getCase`, `getSuspects`,
`getEvidence`, `getPlayer`, `getResults`, `getResult`.

**Resiliencia offline:** cada petición es *remote-first* con timeout (AbortController ~3 s) y,
si la API no responde, las GET sirven desde la copia embebida `src/data/database.js`
y las escrituras se persisten en `localStorage`. El estado se expone con
`getConnectionStatus()` / `onConnectionChange()` y se muestra en el badge del Navbar
(`CID NETWORK ● ONLINE / LOCAL DATABASE ○ OFFLINE`). Los resultados locales se
deduplican al fusionarse con los remotos.

Ejemplos de pantallas:
- `Cases.jsx`: `GET /cases` → `LoadingState` → grid o `ErrorState` con botón RETRY.
- `Investigation.jsx`: `GET /case/:id` + `GET /suspects?caseId` + `GET /evidence?caseId`.
- `Leaderboard.jsx` / `Home.jsx`: `GET /results`.

Cada petición maneja `loading / success / error` y, si falla, el usuario ve
`ErrorState` con botón **RETRY** — nunca una pantalla en blanco ni solo `console.error`.

### 4.2 POST / PUT obligatorios

**Requisito:** operación de escritura real al terminar.

**Implementación:** `completeCase()` en `Investigation.jsx`:

```js
const result = await api.createResult({ ... })                 // POST /results
await updatePlayerStats(result)                                // PUT /players/:id
await submitToN8n(result)                                      // POST n8n webhook
```

`updatePlayerStats` recalcula `casesSolved / casesFailed / totalScore / averageAccuracy / bestRank`.

---

## 5. n8n

### 5.1 Workflow exportado

**Implementación:** `n8n/case404-workflow.json` + `n8n/workflow-screenshot.png`.

Estructura (7 nodos, 5 conexiones, 3+ nodos encadenados):

```
Webhook (POST /webhook/case-404)
  → Validate & Calculate Performance (Code)
  → IF: score >= 5000
       ├─ (true)  → Save Elite Result (Code)    → Respond to Webhook (Elite)
       └─ (false) → Save Standard Result (Code) → Respond to Webhook (Standard)
```

- **Validación:** el nodo Code rechaza payloads con campos faltantes (`throw new Error`).
- **Condición real:** nodo IF compara `$json.score >= 5000`.
- **Acción final:** guarda el registro (store en memoria, documentado para reemplazo por DB)
  y responde al webhook con `success/performance/score/rank`.

### 5.2 Comunicación React → n8n (REAL)

`src/services/n8n.js`:

```js
export async function submitInvestigationToN8n(payload) {
  const res = await fetch(N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  ...
}
```

La URL sale de `VITE_N8N_WEBHOOK_URL` (`import.meta.env`). Payload enviado:

```json
{
  "playerId": 1, "playerName": "Detective", "caseId": 1,
  "caseName": "El Asesinato de la Galería", "score": 8420,
  "accuracy": 92, "timeUsed": 261, "rank": "A", "solved": true
}
```

La respuesta del workflow se **usa**: `Results.jsx` muestra
✓ REPORT SUBMITTED / ✓ PERFORMANCE ANALYZED (`n8nPerformance`) / ✓ LEADERBOARD UPDATED.
Si el webhook falla, el resultado queda guardado localmente y se ofrece
**RETRY SUBMISSION** (requisito 38).

---

## 6. FUNCIONALIDAD GAMEPLAY

**Requisito:** el juego debe poder completarse de inicio a fin.

**Flujo real verificado en código:**

```
HOME → CASOS → /case/:id
  → BRIEFING (CaseBriefing): Aceptar tarea arranca el cronómetro
  → ESCENA: leer historia (StoryPanel) + avance por ACTOS (unlockAt según tiempo transcurrido)
  → INTERROGATORIO (fase de intel, pestaña por defecto):
     · citar a los 6 sospechosos según el acto (isSuspectInterrogable)
     · preguntas de 5 tipos (alibi/relación/motivo/general/prueba), algunas bloqueadas por acto (isQuestionLocked)
     · cada respuesta dispara una REACCIÓN (CALM/TENSE/NERVOUS/EVASIVE/CONTRADICTS)
     · animación del retrato (shake/sway/lean), chip de reacción y barra de presión
     · 5 preguntas por sospechoso → la sesión se levanta
     · las "señales" (notas de micro-expresiones) se archivan por sospechoso y se muestran en el veredicto
  → EXPEDIENTE (pestaña alternativa): leer resumen/escena/laboratorio/fichas (CaseDashboard)
  → EVIDENCIA: marcar evidencias (EvidenceBoard, veladas al inicio, candado por acto + sonido select/deselect)
  → pistas (HintPanel, −500 c/u; la pista de evidencia solo analiza lo desbloqueado)
  → VEREDICTO: decidir — elegir al culpable ENTRE OPCIONES (grid de 6 con retrato y ficha de señales) + >=1 evidencia
  → PRESENTAR VEREDICTO (habilitado solo con sospechoso + >=1 evidencia)
  → modal confirmación (no se puede cancelar después)
  → calcula score con utils/scoring.js
  → POST /results + PUT /players + POST n8n
  → /results/:id muestra solución, rango, reporte
  → clasificación actualizada
```

**Idioma:** toda la interfaz, datos de los 6 casos, pistas y soluciones están en español
(`index.html lang="es"`, `format.js` con etiquetas de dificultad/tipo/estado en ES y fechas `es-ES`).

**Progresión por actos:** cada caso define `acts: [{name, unlockAt, text}]`. El acto activo se
deriva del tiempo transcurrido (`getCurrentActIndex` en `utils/gameLogic.js`); las evidencias con
`act > actoActual` se muestran **bloqueadas** (`isEvidenceLocked`) y las notas de expediente de
algunos sospechosos se desbloquean según su campo `act` (`areNotesVisible`). La pista de pulso
de evidencia descarta el material bloqueado y, si no hay ninguno aún, avisa sin consumirse.

**Retratos:** 36 retratos SVG deterministas en `public/suspects/{id}.svg` (uno por sospechoso).
Se renderizan con `<img loading="lazy">` en los retratos de `CaseCard` (tira "afuera" en la sala de
casos), en el rail/portada de `InterrogationRoom` y en las opciones de `FinalVerdict`. Al ser locales,
funcionan en modo offline.

**Interrogatorio (mecánica central):** `scripts/generate-interrogation.mjs` genera el campo
`interrogation` (5 preguntas por sospechoso: `type/act/question/answer/reaction/note`) en `db.json`
y regenera la copia embebida. `React` las consume en `InterrogationRoom.jsx`: cada pregunta usada
queda registrada como *señal* en el estado `insights` de `Investigation.jsx` (actualización funcional
sin mutación), la reacción se pinta en el retrato (`data-reaction` + keyframes shake/sway/lean),
el monitor de presión crece con cada pregunta, y al superar las 5 la sesión se levanta. Las señales
se exponen también en `FinalVerdict` para fundamentar la decisión.

**Audio (Web Audio API, sin archivos):** `src/services/sound.js` sintetiza efectos
(select/deselect/suspect/hint/reveal/tick/solved/failed/start/page) y una música de suspenso
generative (drone menor, loop). Preferencias persistidas en `localStorage`
(`case404_audio_settings`) con toggles en el Navbar. Todo el audio está protegido con
try/catch y no puede romper el juego. `AppLayout.jsx` reproduce `play('page')` en cada
cambio de ruta y restaura la música al arrancar (`ensureMusicState`).

**Interactividad/ambiente:** overlay CRT con scanlines (`crt-overlay`, `crt-flicker`),
typewriter del tagline en Home, animaciones stagger de tarjetas, hover lift en sospechosos,
ticks de último minuto (≤10 s) y briefing cinematico con stats del caso.

`src/utils/scoring.js`:

```js
score = base(5000)
      + (sospechoso correcto ? +3000 : −4500)
      + evidencia correcta * 500
      − evidencia incorrecta * 300
      + bonus tiempo (0–2000 según tiempo restante)
      − pistas * 500
```

Rangos: S ≥ 9000 · A ≥ 7500 · B ≥ 6000 · C ≥ 4500 · D ≥ 3000 · F < 3000.

---

## 7. DOCUMENTACIÓN Y REPOSITORIO

| Archivo | Contenido |
|---|---|
| `README.md` | Features, tecnologías, instalación, env vars, n8n, gameplay, estructura, endpoints |
| `REQUIREMENTS.md` | Esta matriz de cumplimiento |
| `n8n/case404-workflow.json` | Workflow importable |
| `n8n/workflow-screenshot.png` | Diagrama del workflow |
| `.env.example` | Variables de entorno documentadas |
| `.gitignore` | `node_modules`, `dist`, `.env` excluidos |

**Commits sugeridos (progresivos):**

```
chore: initialize React project
feat: create application layout
feat: add case data and json-server
feat: implement case selection
feat: implement investigation gameplay
feat: add evidence system
feat: add suspect selection
feat: implement scoring system
feat: add results page
feat: add leaderboard
feat: integrate n8n webhook
feat: add loading and error states
style: improve responsive design
docs: add README and requirements matrix
fix: resolve gameplay issues
```

---

## 8. TABLA RESUMEN

| Requisito | Implementado | Archivo |
|---|---|---|
| 4+ componentes | ✅ | `src/components/` (24 componentes) |
| Props | ✅ | `EvidenceCard.jsx`, `SuspectCard.jsx` |
| key única | ✅ | listas con `.id` (nunca `index`) |
| useState | ✅ | `Investigation.jsx`, páginas |
| useEffect | ✅ | `useCountdown.js`, páginas |
| Hook adicional | ✅ | `useMemo` (Results/Leaderboard) + `useRef` (`useCountdown.js`) |
| 3+ rutas | ✅ | `App.jsx` (7 rutas) |
| Ruta dinámica | ✅ | `/case/:id` → `Investigation.jsx` |
| GET | ✅ | `services/api.js` |
| POST / PUT | ✅ | `services/api.js` (`createResult`, `updatePlayer`) |
| Loading | ✅ | `LoadingState.jsx` |
| Error | ✅ | `ErrorState.jsx` + RETRY |
| Empty | ✅ | `EmptyState.jsx` |
| Timer con useEffect | ✅ | `hooks/useCountdown.js` |
| Score + Rank | ✅ | `utils/scoring.js` |
| Pistas | ✅ | `HintPanel.jsx` + `useHint` |
| Modal | ✅ | `Modal.jsx` |
| Toast | ✅ | `Notification.jsx` |
| Offline / datos precargados | ✅ | `data/database.js` + fallback en `api.js` + badge Navbar |
| Sonidos + música | ✅ | `services/sound.js` (Web Audio) + toggles Navbar |
| Briefing de misión | ✅ | `CaseBriefing.jsx` gate el cronómetro |
| 6 casos / 6 sospechosos | ✅ | `db.json` (36 sospechosos, 54 evidencias, único culpable por caso) |
| Progresión por ACTOS | ✅ | `acts` en datos + `getCurrentActIndex`/`isEvidenceLocked`/`areNotesVisible` + candados en UI |
| Retratos de sospechosos | ✅ | `public/suspects/{id}.svg` + `<img>` en `CaseCard`/`InterrogationRoom`/`FinalVerdict` |
| Interrogatorio con micro-expresiones | ✅ | `InterrogationRoom.jsx` + campo `interrogation` en datos + señales en `FinalVerdict` |
| Motor de IA conectado (interrogatorio en vivo) | ✅ | `services/ai.js` streaming SSE (Groq/OpenAI/OpenRouter), input libre de preguntas + fallback offline |
| Estética tipo videojuego | ✅ | `GAME THEME v2` en `index.css` (aurora, viñeta, títulos glow, botones arcade, hero) |
| Juego en español | ✅ | Todas las páginas, componentes, datos y `index.html lang="es"` |
| Efectos ambientales | ✅ | CRT scanlines (`App.jsx`) + typewriter Home |
| n8n Webhook | ✅ | `services/n8n.js` + `.env.example` |
| Workflow exportado | ✅ | `n8n/case404-workflow.json` |
| IF real | ✅ | nodo `score >= 5000` |
| Acción final | ✅ | nodos Save Elite/Standard + Respond |
| Respuesta usada | ✅ | `Results.jsx` pipeline status |
| Retry n8n | ✅ | `Results.jsx` → `retryN8nSubmission` |
| Responsive | ✅ | `index.css` (breakpoints 1080/760/480) |
| Accesibilidad | ✅ | `aria-*`, `role`, focus-visible, teclado (Esc) |
| Seguridad básica | ✅ | `.env`, `.gitignore`, sin secretos en el frontend |

---

## 9. VALIDACIÓN FINAL

- [x] `npm install && npm run build` compilan sin errores.
- [x] API probada: `GET /cases`, `GET /cases/1`, `GET /suspects?caseId=1`, `POST /results`, `PUT /players/1`.
- [x] db.json con 6 casos en español, 36 sospechosos (con `motive`/`notes`/`act`), 54 evidencias (con `act`/`relevant`), `acts` por caso y jugador inicial.
- [x] Consistencia verificada: cada caso tiene exactamente 3 evidencias `relevant` == `correctEvidenceIds` y un único `correctSuspectId` entre sus 6 sospechosos.
- [x] `src/data/database.js` regenerado desde `db.json` (copia embebida actualizada).
- [x] 36 retratos SVG generados y presentes en `public/suspects/`.
- [x] `scripts/generate-interrogation.mjs`: los 36 sospechosos tienen `interrogation` con 5 preguntas (`type/act/question/answer/reaction/note`); `db.json` y `src/data/database.js` regenerados (verificado 36/36).
- [x] Fallback offline: juego completo jugable sin json-server (`npm run dev`).
- [x] Motor de IA: `services/ai.js` habla con `/chat/completions` (streaming SSE), clasifica la respuesta en `CALM/TENSE/NERVOUS/EVASIVE/CONTRADICTS` y, sin `VITE_AI_KEY`, la sala vuelve al banco offline con idéntica presupuesto de 5 preguntas.
- [x] Audio verificado en build; construir con Web Audio no requiere archivos.
- [x] Sin pantallas falsas ni botones decorativos.