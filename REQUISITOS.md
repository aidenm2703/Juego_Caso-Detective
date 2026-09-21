# Matriz de requisitos académicos

| Requisito | Implementación | Archivo | Componente | Evidencia |
|---|---|---|---|---|
| React y componentes reutilizables | Pantallas compuestas por componentes especializados | `src/components/` | `CaseCard`, `EvidenceBoard`, `InterrogationRoom`, `FinalVerdict` | Props tipadas por uso y listas con IDs estables |
| Rutas y ruta dinámica | Navegación de archivo, caso y resultado | `src/App.jsx` | `App` | `/case/:id`, `/results/:id` |
| Estados y hooks | Estado de investigación, carga y temporizador | `src/pages/Investigation.jsx`, `src/hooks/` | `Investigation` | `useState`, `useMemo`, `useRef`, `useEffect` |
| Consumo de API | GET/POST/PUT con alternativa local | `src/services/api.js` | servicio API | json-server y `localStorage` |
| Formularios e interacción | Pregunta libre y selección de evidencia/veredicto | `src/components/InterrogationRoom.jsx` | `InterrogationRoom` | input con Enter, botones accesibles |
| Lógica y puntuación | Cálculo de aciertos, tiempo y rango | `src/utils/scoring.js` | `FinalVerdict` | resultado persistido |
| Temporizador | Cuenta atrás protegida ante StrictMode | `src/hooks/useCountdown.js` | `Timer` | `onExpire` ejecutado una vez |
| Interrogatorio contextual | Intención, memoria, presión y contradicción | `src/services/interrogationEngine.js` | `InterrogationRoom` | historial + evidencia examinada |
| Responsive y accesibilidad | Breakpoints, foco visible, labels y controles de teclado | `src/redesign.css`, componentes | interfaz global | versión móvil de archivo/oficina |
| Automatización n8n | Webhook de resultado final | `src/services/n8n.js`, `n8n/` | cierre de caso | workflow exportado |

La matriz se apoya en el detalle completo preexistente de `REQUIREMENTS.md`; no introduce requisitos nuevos.
