# CASE 404 — Rediseño narrativo

CASE 404 dejó de presentarse como un panel de métricas. La nueva dirección usa el expediente como objeto del mundo: una oficina nocturna abre el juego, el caso principal es una carpeta física y el archivo de casos se presenta como documentos apilados.

## Sistema visual

- Paleta de carbón, papel envejecido, madera, verde oliva y azul petróleo; el vino sólo señala riesgo o contradicción.
- Títulos con serif editorial, información técnica en monoespaciada y una interfaz sans legible.
- Textura de grano muy sutil, luz cálida de lámpara, lluvia y sombras de escritorio creadas con CSS; no se añadieron ornamentos que no apoyen la investigación.
- La navegación se redujo a una tira de secciones del expediente, conservando rutas y controles de accesibilidad.

## Componentes modificados

- `Home.jsx`: composición de oficina, carpeta CASE 404 y acceso directo a un expediente activo.
- `CaseCard.jsx`: sustituye tarjetas por un documento con fotografía, clip, víctima, escena y acción de examen.
- `InterrogationRoom.jsx`: conserva input libre, streaming y transcripción; ahora entrega historial y evidencia descubierta al motor local.
- `Investigation.jsx`: transmite la evidencia examinada al interrogatorio sin perder el estado al cambiar de fase.
- `redesign.css`: capa aislada que sustituye el lenguaje dashboard por materiales físicos y adapta móvil/tablet.

## Interrogatorio contextual

`services/interrogationEngine.js` separa UI y conversación. Detecta intención (`ALIBI`, `TIMELINE`, `MOTIVE`, `RELATIONSHIP`, `EVIDENCE`, `ACCUSATION`), usa el historial por sospechoso, calcula presión y sólo reacciona a evidencia ya examinada. El culpable cambia de reacción al ser confrontado; un inocente no inventa hechos. Las alternativas se rotan evitando repetir la misma formulación reciente.

La integración remota existente no se reemplazó: cuando hay proveedor configurado, `ai.js` sigue enviando historial y ficha del sospechoso. El motor local garantiza una partida coherente sin API.

## Funcionalidad conservada

Se preservan las rutas, json-server con fallback local, temporizador, actos, evidencia bloqueada, pistas, puntuación, veredicto, resultados, sonidos, persistencia local y webhook n8n.
