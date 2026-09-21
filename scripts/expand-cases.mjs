#!/usr/bin/env node
/**
 * Amplía la base de casos de CASE 404.
 * Añade 4 casos completos (ids 7-10) con sus sospechosos y evidencias,
 * cada uno con una resolución distinta. Los ids siguen el esquema:
 *   - sospechoso  : caseId*100 + 1..6
 *   - evidencia   : (caseId+1)*100 + 1..9
 *   - pista       : 1,2,3 (reutilizado por caso, igual que los existentes)
 *
 * Uso: node scripts/expand-cases.mjs
 * Después: node scripts/generate-interrogation.mjs (regenera interrogation + database.js)
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const ROOT = resolve(process.cwd())
const dbPath = resolve(ROOT, 'db.json')
const db = JSON.parse(readFileSync(dbPath, 'utf8'))

const HINTS = [
  { id: 1, title: 'Fuga de perfil', description: 'Desvela las notas de investigación de un sospechoso, incluido su motivo oculto.' },
  { id: 2, title: 'Pulso de evidencia', description: 'Marca una evidencia relevante accesible en el tablero en el acto actual.' },
  { id: 3, title: 'Eliminación de sospechoso', description: 'Descarta permanentemente a un sospechoso inocente.' },
]

/* ---------------------------------------------------------------- */
/* CASO 7 — RAPTO EN LA SUBASTA (Secuestro, MEDIUM)                  */
/* ---------------------------------------------------------------- */
const case7 = {
  id: 7,
  caseNumber: '404-007',
  title: 'Rapto en la Subasta',
  category: 'Secuestro',
  difficulty: 'MEDIUM',
  status: 'AVAILABLE',
  timeLimit: 900,
  maxScore: 11000,
  posterHue: 270,
  location: 'Casa de Subastas El Dorado, salón imperial',
  date: '2026-10-02',
  victim: 'Sergio Ordóñez, 49 años, coleccionista de relojes',
  brief: 'Durante la puja por el reloj "Tycho", el coleccionista desaparece de su palco. Cuarenta minutos después llega la llamada del rescate. Pero no hay violencia real: ninguna puerta forzada, testigos que miran al suelo y una llamada que sale… del propio edificio.',
  summary: 'En la subasta benéfica de la Casa El Dorado, el coleccionista Sergio Ordóñez se esfuma del palco 12 en plena puja final por el reloj Tycho, valorado en dos millones. Cuarenta minutos después la familia recibe una llamada pidiendo rescate. El escenario no cuadra: sin puertas forzadas, el bastón olvidado en la bandeja de pujas, y una nota de rescate fotocopiada que huele a impostura.',
  acts: [
    { name: 'La desaparición', unlockAt: 0, text: 'El palco 12 aparece vacío tras la puja final. Los asistentes recuerdan haberse cruzado con Ordóñez justo antes del telón. Se toma declaración a la plana de la subasta.' },
    { name: 'La llamada del rescate', unlockAt: 300, text: 'La familia confirma lo peor: Ordóñez llamó pidiendo dos millones para liberarlo. El patch panel de la centralita sitúa la llamada en el interior de la casa de subastas.' },
    { name: 'El regreso del coleccionista', unlockAt: 600, text: 'Ordóñez aparece "liberado" en la puerta de servicio, ileso. El rastro de la taquilla, la cámara del sótano y una póliza renovada cuentan otra historia.' },
  ],
  correctSuspectId: 703,
  correctEvidenceIds: [803, 805, 806],
  hints: HINTS,
  solution: 'El secuestro era falso de principio a fin: Ordóñez lo organizó con su tasador de confianza, Ramiro Sol, para cobrar el seguro del reloj y tapar una deuda de juego. Salió por la escalera de servicio sin forzar nada, la nota de rescate se imprimió con la impresora del despacho de tasación, y la "llamada del secuestrador" salió de la extensión 14, el propio despacho de Sol. La cámara del sótano los pilla juntos repartiéndose un sobre de efectivo minutos antes del "rescate".',
}

const suspects7 = [
  {
    id: 701, caseId: 7, act: 1, name: 'Celia Ordóñez', age: 44, profession: 'Galerista y benefactora',
    relation: 'Esposa separada de bienes de la víctima', alibi: 'Estaba en la sala de pujas; la cámara del ala norte la sitúa sentada en la fila C durante toda la desaparición.',
    description: 'Componada y calculadora. Se enteró del secuestro "por la prensa" antes que por la familia.',
    suspicionLevel: 'MEDIUM', notes: 'Es la única beneficiaria del seguro contratado sobre el Tycho. Firmó los papeles de renovación el mismo mes del suceso.',
    motive: 'Cobrar el seguro del reloj para saldar sus propias deudas galería.',
  },
  {
    id: 702, caseId: 7, act: 1, name: 'Bruno Vidal', age: 38, profession: 'Jefe de seguridad de la sala',
    relation: 'Encargado de custodiar el palco y la caja de seguridad', alibi: 'Hacía su ronda por el ala oeste entre las 21:30 y las 22:10; el registro de rondas lo confirma.',
    description: 'Exmilitar, puntual y seco. Volvió a revisar el palco dos veces en la misma hora.',
    suspicionLevel: 'MEDIUM', notes: 'Su informa menciona "un bastón que no estaba" antes de que nadie lo denunciara. Sabía más de lo que declaró.',
    motive: 'Debía favores económicos a Ordóñez y pudo haber tapado el acceso a la escalera de servicio.',
  },
  {
    id: 703, caseId: 7, act: 2, name: 'Ramiro Sol', age: 51, profession: 'Tasador jefe de la casa de subastas',
    relation: 'Tasador y amigo de confianza de la víctima', alibi: 'Permanecía en su despacho preparando el certificado del lote 9; nadie lo vio salir.',
    description: 'Elegante, calculador. Fue de los primeros en proponer el rezo por Ordóñez "por si aparecía herido".',
    suspicionLevel: 'HIGH', notes: 'Contrató un préstamo personal usando el Tycho como garantía. La impresora de su despacho es la única del edificio que usa el mismo papel de la nota.',
    motive: 'El reloj "desaparecido" le permitía liquidar su préstamo con el dinero del seguro.',
  },
  {
    id: 704, caseId: 7, act: 3, name: 'Vera Luna', age: 47, profession: 'Socia rival de la casa de subastas',
    relation: 'Competía con Ordóñez por el lote final', alibi: 'Jugaba al bridge en el vestíbulo con tres testigos durante la puja final.',
    description: 'Mordaz y directa. No ocultó que quería el Tycho para su propia sala.',
    suspicionLevel: 'LOW', notes: 'Sin relación firme con la llamada ni con la puerta de servicio. El bridge es irrefutable.',
    motive: 'Interés económico por quedarse con la pieza, no por secuestrar al dueño.',
  },
  {
    id: 705, caseId: 7, act: 1, name: 'Tomás Ordóñez', age: 55, profession: 'Administrador del patrimonio familiar',
    relation: 'Hermano mayor de la víctima', alibi: 'Fumaba en el patio interior con el camarero de la segunda planta, que lo corrobora.',
    description: 'Reservado y receloso de la gestión de su hermano.',
    suspicionLevel: 'MEDIUM', notes: 'Tenían pendiente el reparto de la herencia paterna y discuten por la venta del reloj desde hace un año.',
    motive: 'Rencillas familiares por el patrimonio; sin acceso registrado a la centralita.',
  },
  {
    id: 706, caseId: 7, act: 3, name: 'Iria Puente', age: 33, profession: 'Periodista de la sección de sociedad',
    relation: 'Cubría la gala del Tycho para la prensa', alibi: 'Estaba en la planta uno publicando la crónica; su portátil muestra la hora de subida del artículo.',
    description: 'Curiosa hasta la imprudencia. Fue la primera en "filtrar" la foto del palco vacío.',
    suspicionLevel: 'LOW', notes: 'Acceso a la sala de prensa, no al despacho de tasación ni a la centralita.',
    motive: 'La exclusiva del secuestro, no el secuestro.',
  },
]

const evidence7 = [
  { id: 801, caseId: 7, type: 'document', act: 1, title: 'Programa de la subasta benéfica', location: 'Taquilla de entrada', summary: 'Relación de lotes, palcos y horarios de la gala.', analysisNote: 'El palco 12 aparece con un acompañante menos del reservado.', relevant: false, secure: true },
  { id: 802, caseId: 7, type: 'testimony', act: 1, title: 'Parte de la seguridad del palco', location: 'Recepción de vigilancia', summary: 'Registro de rondas y aperturas de la noche.', analysisNote: 'La escalera de servicio del palco 12 se abrió dos veces por el mismo código: el del tasador.', relevant: false, secure: true },
  { id: 803, caseId: 7, type: 'document', act: 2, title: 'Nota de rescate fotocopiada', location: 'Bandeja de pujas del palco 12', summary: 'Reclamo de dos millones con tipografía de impresora de oficina.', analysisNote: 'El papel coincide con el lote de la impresora del despacho de tasación; las huellas parciales apuntan a Ramiro Sol.', relevant: true, secure: true },
  { id: 804, caseId: 7, type: 'trace', act: 1, title: 'Bastón olvidado en el palco', location: 'Palco 12', summary: 'Un bastón de ébano que la jefa de seguridad asegura "no estar allí" en su primera ronda.', analysisNote: 'Prueba que la zona fue revisada antes de que se declarara la desaparición. No determina al autor.', relevant: false, secure: true },
  { id: 805, caseId: 7, type: 'digital', act: 2, title: 'Registro de la llamada del rescate', location: 'Centralita del edificio', summary: 'La llamada exigiendo el rescate duró 11 segundos.', analysisNote: 'El patch panel sitúa la llamada en la extensión 14: el despacho del tasador Ramiro Sol.', relevant: true, secure: true },
  { id: 806, caseId: 7, type: 'digital', act: 3, title: 'Cámara del sótano', location: 'Servidor de videovigilancia', summary: 'Grabación de la puerta de servicio minutos antes del "rescate".', analysisNote: 'Se ve a Ordóñez y a Ramiro Sol bajando juntos y repartiéndose un sobre de efectivo.', relevant: true, secure: true },
  { id: 807, caseId: 7, type: 'trace', act: 1, title: 'Cadena rota de la escalera de servicio', location: 'Escalera interior, planta baja', summary: 'Un eslabón roto en el pasamanos junto a la salida de emergencia.', analysisNote: 'El óxido de la fractura indica que llevaba semanas así; no es una entrada forzada esa noche.', relevant: false, secure: true },
  { id: 808, caseId: 7, type: 'document', act: 2, title: 'Póliza del reloj Tycho', location: 'Archivo de seguros', summary: 'Contrato de seguro de la obra de arte.', analysisNote: 'La cobertura del Tycho se cuadruplicó un mes antes del suceso. Beneficiaria: Celia y la colección en garantía.', relevant: false, secure: true },
  { id: 809, caseId: 7, type: 'testimony', act: 3, title: 'Declaración del camarero del patio', location: 'Planta de restauración', summary: 'El camarero vió a Ordóñez bajar solo por la escalera interior.', analysisNote: 'Coincide con la hora de la llamada del rescate y con la cámara del sótano.', relevant: false, secure: true },
]

/* ---------------------------------------------------------------- */
/* CASO 8 — EL MAGO QUE SE ESFUMÓ (Desaparición, MEDIUM)             */
/* ---------------------------------------------------------------- */
const case8 = {
  id: 8,
  caseNumber: '404-008',
  title: 'El Mago que se Esfumó',
  category: 'Desaparición',
  difficulty: 'MEDIUM',
  status: 'AVAILABLE',
  timeLimit: 900,
  maxScore: 11000,
  posterHue: 20,
  location: 'Gran Teatro Alcázar, escenario principal',
  date: '2026-10-09',
  victim: 'Aldo Castel, 52 años, ilusionista (desaparecido)',
  brief: 'En el número final, Castel desaparece de la caja de escape… y jamás aparece en el público. La taquilla amanece vacía y falta la bolsa de viaje de su camerino. Un mago que se esfuma de verdad solo se va por dos razones: impagos o un cómplice.',
  summary: 'Durante la réplica final de su célebre caja de escape, el ilusionista Aldo Castel se esfuma del escenario del Gran Teatro Alcázar. Los técnicos juran que la trampilla nunca llegó a accionarse y la caja cayó sin peso. A la mañana siguiente la recaudación amanece vacía, su ayudante Dora Kelis se ha ido sin avisar y el teléfono de Castel suena a un ferry con rumbo internacional.',
  acts: [
    { name: 'El número final', unlockAt: 0, text: 'La caja de escape de Castel cae al suelo con un golpe seco. Cuando se abre, no hay nadie dentro. Se entrevista al personal del escenario y al público de la primera fila.' },
    { name: 'La taquilla vacía', unlockAt: 300, text: 'La recaudación de la gira ha desaparecido y el registro del "Ojo Biónico", la cámara que graba el lateral del escenario, apunta a una segunda persona junto a Castel.' },
    { name: 'El canal de utilería', unlockAt: 600, text: 'Los billetes de ferry, la devolución de los efectos personales y un cheque sin cobrar reconstruyen la fuga de Castel y su cómplice.' },
  ],
  correctSuspectId: 802,
  correctEvidenceIds: [904, 906, 908],
  hints: HINTS,
  solution: 'Nadie raptó a Castel: se fue porque debía dos giras a sus acreedores y reservó su fuga de antemano. Su ayudante, Dora Kelis, lo sacó por el canal de utilería tras la réplica y guardó la recaudación en una bolsa preparada. La trampilla no se accionó (el cerrojo estaba frío), pero el Ojo Biónico registra dos siluetas saliendo por el pasillo de maquinaria, y los billetes de ferry comprados a nombre de ambos esa misma madrugada cierran la desaparición. Ni secuestro ni truco: una fuga calculada.',
}

const suspects8 = [
  {
    id: 801, caseId: 8, act: 1, name: 'Ludovico Peers', age: 48, profession: 'Ilusionista rival',
    relation: 'Competidor directo en la cartelera del Alcázar', alibi: 'Actuaba a la misma hora en el salón Imperial; su camarino está al otro lado del patio de butacas.',
    description: 'Vanidoso hasta la grosería. Amenazó públicamente con "acariciar el truco" de Castel.',
    suspicionLevel: 'MEDIUM', notes: 'Sin acceso al escenario ni a la taquilla; el jefe de maquinaria confirma que no cruzó el pasillo de utilería.',
    motive: 'Envidia y competencia; el público le cantaba "farsante" en la gala anterior.',
  },
  {
    id: 802, caseId: 8, act: 2, name: 'Dora Kelis', age: 29, profession: 'Ayudante de escenario',
    relation: 'Cómplice y asistenta personal del ilusionista desde hace cuatro años', alibi: 'Se retiró a su camerino a "recoger el vestuario" justo antes del número final.',
    description: 'Rápida, silenciosa, resolutiva. Nadie la vio en la sala de la trampilla.',
    suspicionLevel: 'HIGH', notes: 'La cámara del lateral la sitúa junto al canal de utilería durante la réplica. No regresó al teatro a la mañana siguiente.',
    motive: 'Le habían ofrecido cobrar el último porcentaje de la gira si "hacía desaparecer los problemas" del mago.',
  },
  {
    id: 803, caseId: 8, act: 1, name: 'Tino Salgado', age: 52, profession: 'Jefe de maquinaria',
    relation: 'Controlaba la trampilla y el telón acústico', alibi: 'Hizo la revisión del telón a las 21:20; el registro de mantenimiento lo acredita.',
    description: 'Años de teatro a cuestas, amable y detallista.',
    suspicionLevel: 'MEDIUM', notes: 'Pudo bloquear la trampilla por orden de seguridad. Nada lo vincula con la taquilla.',
    motive: 'Proteger la integridad del número; no monetario.',
  },
  {
    id: 804, caseId: 8, act: 3, name: 'Mae Casal', age: 58, profession: 'Productora de la gira',
    relation: 'Gerente comercial del alcázar y del contrato de Castel', alibi: 'Cenaba con un mecenas en el vestíbulo durante el número final.',
    description: 'Negociadora de trato difícil, harta de las deudas del ilusionista.',
    suspicionLevel: 'LOW', notes: 'Sin acceso al pasillo de maquinaria. El mecenas confirma su cena.',
    motive: 'Cerrar la gira y cobrar su porcentaje, no desaparecer al artista.',
  },
  {
    id: 805, caseId: 8, act: 3, name: 'Fabián Urco', age: 31, profession: 'Tramoyista de utilería',
    relation: 'Operario del pasillo de maquinaria', alibi: 'Estaba en el almacén de escenografía entre las 22:40 y las 23:10.',
    description: 'El "erudito" de los números; conoce cada polea del teatro.',
    suspicionLevel: 'LOW', notes: 'Declaró haber oído el golpe seco de la caja sin abrirla. Su versión no se contradice con los registros.',
    motive: 'Curiósito por los trucos, sin interés en la recaudación.',
  },
  {
    id: 806, caseId: 8, act: 1, name: 'Rosamunda Vilar', age: 66, profession: 'Taquillera del teatro',
    relation: 'Cuenta la recaudación diaria al final del turno', alibi: 'Cerro el arca a las 23:05 y se marchó con el último tranvía, confirmado por el conductor.',
    description: 'Eficiente y de confianza; lleva veinte años con las llaves de la caja.',
    suspicionLevel: 'MEDIUM', notes: 'La caja se vació con la llave que solo custodia la taquillería, pero su salida está acreditada.',
    motive: 'Ninguno aparente; el horario la exculpa.',
  },
]

const evidence8 = [
  { id: 901, caseId: 8, type: 'document', act: 1, title: 'Programa de la gala', location: 'Vestíbulo del teatro', summary: 'Cartel de la réplica final de la caja de escape.', analysisNote: 'La taquilla de la gala alcanzó casi su aforo; la recaudación estaba prevista para esa noche.', relevant: false, secure: true },
  { id: 902, caseId: 8, type: 'trace', act: 1, title: 'Trampilla revisada (cerrojo frío)', location: 'Foso del escenario', summary: 'La trampilla del número no fue accionada.', analysisNote: 'El cerrojo estaba frío al tacto y sin marcas de uso; la caja cayó vacía. El truco no usó el plano de foso.', relevant: false, secure: true },
  { id: 903, caseId: 8, type: 'testimony', act: 1, title: 'Parte del jefe de maquinaria', location: 'Control técnico', summary: 'Registro de la revisión del telón y del pasillo de utilería.', analysisNote: 'Confirma que Dora Kelis cruzó el pasillo 14 minutos antes del desenlace.', relevant: false, secure: true },
  { id: 904, caseId: 8, type: 'digital', act: 2, title: 'Registro del Ojo Biónico', location: 'Lateral de escenario', summary: 'La cámara que graba el pasillo de maquinaria durante el número.', analysisNote: 'Dos siluetas salen por el canal de utilería en plena réplica: una con el frac de la gala y otra con el mono de maquinista.', relevant: true, secure: true },
  { id: 905, caseId: 8, type: 'document', act: 2, title: 'Cheque sin cobrar de la última gira', location: 'Área de administración', summary: 'Una orden de pago del patrocinador que nadie ha cobrado.', analysisNote: 'Castel acumulaba dos giras sin cobrar; el cheque estaba en la mesa de la productora.', relevant: false, secure: true },
  { id: 906, caseId: 8, type: 'document', act: 3, title: 'Billetes de ferry a nombre de Kelis', location: 'Compañía de ferris del sur, embarque', summary: 'Reserva de dos plazas en el primer ferry de la madrugada siguiente.', analysisNote: 'Los billetes están a nombre de Dora Kelis y "A. Castel". Horario coincidente con el cierre de taquilla.', relevant: true, secure: true },
  { id: 907, caseId: 8, type: 'trace', act: 3, title: 'Bolsa de viaje del camerino', location: 'Camerino de Castel', summary: 'La bolsa utilitaria con la que se escapó el vestuario de repuesto.', analysisNote: 'Faltan el traje de gala y la bolsa; el inventario del guardarropa confirma la sustracción.', relevant: false, secure: true },
  { id: 908, caseId: 8, type: 'document', act: 3, title: 'Inventario del guardarropa', location: 'Departamento de vestuario', summary: 'Lista de efectos personales retirados del teatro esa noche.', analysisNote: 'Dos trajes y el vestuario de la ayudante fueron retirados con "permiso verbal de la dirección" minutos antes del número final.', relevant: true, secure: true },
  { id: 909, caseId: 8, type: 'testimony', act: 1, title: 'Declaración de la taquillera', location: 'Oficina de administración', summary: 'Rosamunda Vilar cargó el arca a las 23:05.', analysisNote: 'La caja estaba vacía, pero la cerradura no presentaba señales de forzado: se usó su llave o una copia.', relevant: false, secure: true },
]

/* ---------------------------------------------------------------- */
/* CASO 9 — LA AUDITORÍA FANTASMA (Fraude, HARD)                     */
/* ---------------------------------------------------------------- */
const case9 = {
  id: 9,
  caseNumber: '404-009',
  title: 'La Auditoría Fantasma',
  category: 'Fraude',
  difficulty: 'HARD',
  status: 'AVAILABLE',
  timeLimit: 1080,
  maxScore: 12000,
  posterHue: 300,
  location: 'Sede Prometeo Capital, planta 12',
  date: '2026-10-16',
  victim: 'Olga Ferrán, 45 años, contadora del fondo (desaparecida)',
  brief: 'La única persona que había encontrado el "proveedor fantasma" lleva dos días sin aparecer. El servidor de contabilidad amanece con 40 minutos borrados, y el correo sellado de Olga está a un clic de la fiscalía.',
  summary: 'Prometeo Capital cierra su ejercicio anual con un informe limpio… y 1,2 millones de euros que no existen. Olga Ferrán, la contadora que detectó un proveedor que cobraba sin entregar nada, dejó de aparecer por la oficina el jueves. La auditoría oficial asegura que no hay agujero; el expediente sí lo encuentra, señala al director financiero y reconcilia cada factura con el proveedor fantasma.',
  acts: [
    { name: 'El informe limpio', unlockAt: 0, text: 'El consejo recibe el resultado anual sin salvedades. Solo Olga había anotado a mano una "cuenta 777 Órbita" que pulverizaba el balance de la contabilidad.' },
    { name: 'El servidor borrado', unlockAt: 360, text: 'El registro del servidor de contabilidad confirma un borrado nocturno a las 2:03 con la llave del director financiero. El proveedor Órbita cobraba, pero no factura nada al exterior.' },
    { name: 'El correo sellado', unlockAt: 720, text: 'El abogado de Olga entrega el informe que dejó sellado la noche que desapareció: copias de las facturas, las transferencias y el nombre de quien firmaba cada una.' },
  ],
  correctSuspectId: 904,
  correctEvidenceIds: [1002, 1004, 1007],
  hints: HINTS,
  solution: 'No hubo secuestro: Olga Ferrán se fue por su cuenta a entregar las copias a la fiscalía. El desfalco lo cometía el director financiero, Ezequiel Prats, que creó el proveedor fantasma "Órbita Servicios" y blanqueó 1,2 millones con facturas firmadas por él mismo. Cuando Olga detectó la cuenta 777, Prats borró la noche clave del servidor con su llave joya y le hizo llegar una "invitación" a retirar el asunto. El registro del servidor, el contrato de Órbita con su firma digital y el correo sellado de Olga cierran el círculo.',
}

const suspects9 = [
  {
    id: 901, caseId: 9, act: 1, name: 'Renata Pons', age: 53, profession: 'Directora general del fondo',
    relation: 'Cabeza visible de Prometeo Capital', alibi: 'Presentaba el ejercicio ante el consejo al mediodía; el acta de la reunión la confirma.',
    description: 'Firme defensora del "informe limpio". Fue la primera en declarar que un error contable era solo un error.',
    suspicionLevel: 'MEDIUM', notes: 'Sin acceso directo al servidor, pero con una ventaja: nadie en la compañía podía auditar sin su permiso.',
    motive: 'Preservar la imagen y el bonus del fondo; no desviar dinero personalmente.',
  },
  {
    id: 902, caseId: 9, act: 2, name: 'Hugo Menk', age: 41, profession: 'Jefe de auditoría interna',
    relation: 'Encargado de revisar la contabilidad anual', alibi: 'Estaba fuera de la ciudad en una certificación a proveedores externos durante el borrado.',
    description: 'Preciso y quisquilloso. Su departamento no señaló el agujero en tres revisiones.',
    suspicionLevel: 'MEDIUM', notes: 'Sus informes internos mencionan la "cuenta 777" dos veces y la descartan ambas con una firma ajena.',
    motive: 'Proteger su propio equipo de un escándalo; pudo encubrir por incapacidad, no por beneficio.',
  },
  {
    id: 903, caseId: 9, act: 3, name: 'Sira Noval', age: 30, profession: 'Administrativa de facturas',
    relation: 'Manejaba el registro de proveedores', alibi: 'Firmó la entrada de las facturas del día 14; el registro horario la sitúa en la oficina hasta las 18:00.',
    description: 'Eficiente y apocada; confiesa que "las facturas de Órbita llegaban ya firmadas".',
    suspicionLevel: 'LOW', notes: 'Su usuario validó dos pagos a Órbita. Declara que se los pasaron con "prioridad" verbal del despacho del director.',
    motive: 'Obediencia al puesto, sin beneficio documentado.',
  },
  {
    id: 904, caseId: 9, act: 2, name: 'Ezequiel Prats', age: 49, profession: 'Director financiero',
    relation: 'Custodio del servidor de contabilidad y de la firma bancaria', alibi: '"Trabajaba en casa" la noche del borrado; el registro de la cámara de la planta lo desmiente solo en apariencia: la llave entró a las 2:01.',
    description: 'Frío, metódico, con un despacho impecable. Nada en su discurso cede a la primera.',
    suspicionLevel: 'HIGH', notes: 'La llave joya del servidor solo existe en dos unidades: la suya y la de sistemas. La central térmica registró su tarjeta a la 1:58.',
    motive: 'Desviar los fondos del fondo a través del proveedor fantasma y evitar que Olga lo publicara.',
  },
  {
    id: 905, caseId: 9, act: 1, name: 'Marcelo Ibar', age: 59, profession: 'Vigilante de la planta 12',
    relation: 'Controlaba los accesos al despacho financiero', alibi: 'Hizo la ronda de las 2:00 y no vio a nadie "de fuera" en la planta.',
    description: 'Servicial y leal a la dirección. Su cuaderno anota todas las entregas, incluida la del jueves.',
    suspicionLevel: 'LOW', notes: 'No puede exculpar a los titulares de tarjeta; la planta entera es interna.',
    motive: 'Ninguno; su ronda es rutinaria.',
  },
  {
    id: 906, caseId: 9, act: 3, name: 'Yuri Daza', age: 36, profession: 'Jefe de sistemas',
    relation: 'Administraba la red y las llaves de acceso del servidor', alibi: 'Estaba en mantenimiento de la sede del país vecino durante todo el jueves y el viernes.',
    description: 'Técnico y reservado. Entiende cada capa de la red.',
    suspicionLevel: 'MEDIUM', notes: 'El registro del borrado muestra su cuenta técnica… pero la sesión fue iniciada con la llave joya del CFO, no la personal.',
    motive: 'Ninguno directo; su cuenta técnica pudo ser comprometida.',
  },
]

const evidence9 = [
  { id: 1001, caseId: 9, type: 'document', act: 1, title: 'Informe anual del fondo', location: 'Comisaría? No. Sede Prometeo, archivo', summary: 'Resultado del ejercicio con "salvedades: ninguna".', analysisNote: 'La nota manuscrita de Olga con la "cuenta 777 Órbita" no aparece en la versión oficial.', relevant: false, secure: true },
  { id: 1002, caseId: 9, type: 'digital', act: 2, title: 'Registro del servidor de contabilidad', location: 'Centro de datos', summary: 'Bitácora de accesos y borrados del sistema contable.', analysisNote: 'Un borrado de 40 minutos a las 2:03 fue ejecutado con la llave joya del director financiero. Solo él y sistemas poseen una.', relevant: true, secure: true },
  { id: 1003, caseId: 9, type: 'trace', act: 1, title: 'Tarjeta de acceso apagada de Olga', location: 'Control de accesos', summary: 'La tarjeta de Olga se desactivó el jueves a las 19:40.', analysisNote: 'La baja partió del departamento financiero una hora después de su último registro horario.', relevant: false, secure: true },
  { id: 1004, caseId: 9, type: 'document', act: 2, title: 'Contrato del proveedor Órbita Servicios', location: 'Archivo de proveedores', summary: 'Contrato de mantenimiento anual firmado electrónicamente.', analysisNote: 'La firma digital corresponde a Ezequiel Prats. La compañía "Órbita" no tiene nómina ni local registrados; es un buzón.', relevant: true, secure: true },
  { id: 1005, caseId: 9, type: 'testimony', act: 1, title: 'Parte del vigilante', location: 'Recepción planta 12', summary: 'Ruta nocturna y registro de visitas del jueves.', analysisNote: 'Confirma que Olga salió por su cuenta con una carpeta a las 19:35; nadie la retuvo.', relevant: false, secure: true },
  { id: 1006, caseId: 9, type: 'digital', act: 2, title: 'Correo interno amenazante', location: 'Buzón corporativo', summary: 'Mensaje de la "dirección" sugiriendo no remover la cuenta 777.', analysisNote: 'El remitente técnico es una cuenta de sistemas redirigida pocos minutos antes del borrado.', relevant: false, secure: true },
  { id: 1007, caseId: 9, type: 'digital', act: 3, title: 'Correo sellado de Olga a la fiscalía', location: 'Bufete del abogado de Olga', summary: 'Copia impresa y sellada que la contadora dejó antes de desaparecer.', analysisNote: 'Adjunta el contrato de Órbita, las transferencias y el registro del borrado. Fechado la noche del jueves.', relevant: true, secure: true },
  { id: 1008, caseId: 9, type: 'document', act: 3, title: 'Transferencias al proveedor fantasma', location: 'Banco corporativo', summary: 'Órdenes de pago mensuales a la cuenta de Órbita.', analysisNote: 'Suma total: 1,2 millones. La autorización bancaria es la tercera firma de Prats, idéntica en cada mes.', relevant: false, secure: true },
  { id: 1009, caseId: 9, type: 'trace', act: 1, title: 'Cálculo del desfalco manuscrito', location: 'Cajón del despacho de Olga', summary: 'La hoja de trabajo con la reconciliación de la cuenta 777.', analysisNote: 'Coincide con las cifras del correo sellado. Quien borró el servidor no se llevó la hoja.', relevant: false, secure: true },
]

/* ---------------------------------------------------------------- */
/* CASO 10 — ACCIDENTE EN LA FERIA (Homicidio, EASY)                 */
/* ---------------------------------------------------------------- */
const case10 = {
  id: 10,
  caseNumber: '404-010',
  title: 'Accidente en la Feria',
  category: 'Homicidio',
  difficulty: 'EASY',
  status: 'AVAILABLE',
  timeLimit: 720,
  maxScore: 9500,
  posterHue: 140,
  location: 'Feria de Atracciones La Noria, torre central',
  date: '2026-10-23',
  victim: 'Iván Curiel, 37 años, dueño de la noria',
  brief: 'La cabina 12 se suelta "por azar" mientras Iván la revisaba antes de abrir. El perito encuentra el pasador flojo de propósito: tuerca con limaduras frescas, grasa nueva en la llave de apriete y una socia que llegó "después" del accidente… demasiado arreglada.',
  summary: 'En la mañana de apertura, la cabina 12 de la noria se desprende del eje y cae al vacío. Iván Curiel, su dueño, muere en la caída justo cuando inspeccionaba la estructura. La investigación descubre que el pasador del eje estaba suelto con la tuerca destensada a conciencia y grasa nueva en la llave del taller. La socia gerente, la heredera y el mecánico defienden cada uno su versión del horario.',
  acts: [
    { name: 'La caída', unlockAt: 0, text: 'La cabina 12 se desprende de la noria a las 8:15. Los primeros testigos son los feriantes de las casetas vecinas que abrían sus puestos.' },
    { name: 'El perito', unlockAt: 240, text: 'El informe técnico confirma el sabotaje: el pasador tenía la tuerca floja con limaduras frescas y no había señales de fatiga del metal.' },
    { name: 'La coartada de la socia', unlockAt: 480, text: 'La cámara de la puerta Este y el registro de horarios desmontan la versión de la gerente y apuntan al taller de mantenimiento.' },
  ],
  correctSuspectId: 1005,
  correctEvidenceIds: [1103, 1106, 1108],
  hints: HINTS,
  solution: 'No fue un accidente: la socia gerente, Valeria Sete, aflojó el pasador del eje la madrugada anterior con la llave del taller de mantenimiento y llegó a las 6:40, antes de la revisión, para asegurarse de que nadie lo apretara. La tuerca conservaba limaduras frescas, la llave de apriete guardada en el taller de Valeria tenía grasa nueva, y la cámara de la puerta Este desmontó su coartada. Cobraba el doble del seguro de la noria que ella misma había contratado ese mes y heredaba la parte de Iván.',
}

const suspects10 = [
  {
    id: 1001, caseId: 10, act: 1, name: 'Ciro Balmes', age: 46, profession: 'Mecánico jefe de la feria',
    relation: 'Encargado del mantenimiento de la noria', alibi: 'Revisaba el eje central a las 7:50 con el permiso de apertura; el parte técnico lo registra.',
    description: 'Ordenado y con veinte años de oficio; nadie lo vio cerca de la cabina 12.',
    suspicionLevel: 'MEDIUM', notes: 'Conoce el pasador al milímetro, pero su parte confirma que la tuerca ya estaba floja cuando llegó.',
    motive: 'Proteger su reputación técnica; no hay beneficio económico registrado.',
  },
  {
    id: 1002, caseId: 10, act: 2, name: 'Lara Ruiz', age: 26, profession: 'Sobrina y heredera de Iván',
    relation: 'Única heredera del negocio de la noria', alibi: 'Tomaba café en la cafetería del recinto desde las 7:10; lo corrobora la cajera.',
    description: 'Distante con la familia, muy al tanto de los seguros.',
    suspicionLevel: 'MEDIUM', notes: 'Heredaba la noria y la mitad de la maquinaria. Sin acceso registrado al taller la madrugada del accidente.',
    motive: 'Herenciar sin dilación; la póliza duplicada acababa de entrar en vigor.',
  },
  {
    id: 1003, caseId: 10, act: 3, name: 'Dina Cardona', age: 39, profession: 'Feriante de la tómbola',
    relation: 'Vecina de caseta de la noria', alibi: 'Montaba su puesto en la calle Mercado desde las 7:30; la factura del suministro lo prueba.',
    description: 'Locuaz y observadora. Vio "a la gerente llegar temprano" y lo repite sin quitarse la sonrisa.',
    suspicionLevel: 'LOW', notes: 'Su testimonio es coherente con la cámara de la puerta Este.',
    motive: 'Envidia del negocio del fallecido; sin acceso al taller.',
  },
  {
    id: 1004, caseId: 10, act: 1, name: 'Néstor Vila', age: 57, profession: 'Competidor de la feria vecina',
    relation: 'Organizaba una feria rival al otro lado del río', alibi: 'Dormía en su furgoneta de la otra orilla; el peaje del puente registra su paso a las 10:00, después del suceso.',
    description: 'Bruto en el trato y con antecedentes por amenazas a feriantes.',
    suspicionLevel: 'MEDIUM', notes: 'Sin acceso al recinto antes de las 10:00; la cámara del puente lo exculpa de la madrugada.',
    motive: 'Sabotear a la competencia; mal timing para la mecánica del crimen.',
  },
  {
    id: 1005, caseId: 10, act: 2, name: 'Valeria Sete', age: 41, profession: 'Socia gerente de la noria',
    relation: 'Socia al 50% del negocio y gestora de los seguros', alibi: 'Declara que entró al recinto a las 8:05, después del accidente. La cámara de la puerta Este fija su furgoneta a las 6:40.',
    description: 'Eficiente, ambiciosa y con una política de seguros "muy ordenada".',
    suspicionLevel: 'HIGH', notes: 'Contrató el doble de cobertura de la noria el mismo mes. La llave del taller de mantenimiento solo la custodia ella y Ciro.',
    motive: 'Cobrar la póliza duplicada y heredar la parte de Iván en la sociedad.',
  },
  {
    id: 1006, caseId: 10, act: 3, name: 'Ugo Zamora', age: 34, profession: 'Electricista del recinto',
    relation: 'Instaló la nueva iluminación de la noria', alibi: 'Trabajaba en el cuadro eléctrico de la entrada a las 7:45; el parte de corriente lo confirma.',
    description: 'Habilidoso y desmemoriado; "no toca los pasadores, solo los cables".',
    suspicionLevel: 'LOW', notes: 'Su herramental no incluye llaves de la medida de la tuerca del pasador.',
    motive: 'Ninguno; su jornada empezó coincidiendo con la apertura.',
  },
]

const evidence10 = [
  { id: 1101, caseId: 10, type: 'document', act: 1, title: 'Permiso de apertura', location: 'Taquilla de la feria', summary: 'Autorización municipal de la noria vigente para la temporada.', analysisNote: 'La inspección técnica era trimestral y estaba al día; no había fatiga reportada.', relevant: false, secure: true },
  { id: 1102, caseId: 10, type: 'testimony', act: 1, title: 'Parte del mecánico jefe', location: 'Taller de mantenimiento', summary: 'Registro de la revisión del eje central de las 7:50.', analysisNote: 'Ciro declaró que la tuerca del pasador "nunca había estado así de floja" en 20 años.', relevant: false, secure: true },
  { id: 1103, caseId: 10, type: 'trace', act: 2, title: 'Tuerca del pasador del eje', location: 'Sala del perito', summary: 'La pieza que fijaba la cabina 12 al manguito central.', analysisNote: 'Presenta limaduras frescas en la rosca y grietas de apriete manual; el corte no es por fatiga del metal sino por destensado previo.', relevant: true, secure: true },
  { id: 1104, caseId: 10, type: 'trace', act: 1, title: 'Cabina 12 tras la caída', location: 'Base de la noria', summary: 'La cabina y el manguito desenchufado en el suelo.', analysisNote: 'El manguito fue desmontado de forma limpia: se forzó la tuerca, no se rompió la chapa.', relevant: false, secure: true },
  { id: 1105, caseId: 10, type: 'document', act: 2, title: 'Póliza de la noria', location: 'Despacho de la gerencia', summary: 'Contrato de seguro de responsabilidad y daños.', analysisNote: 'La cobertura se duplicó hace tres semanas y la contrató la propia Valeria Sete como beneficiaria.', relevant: false, secure: true },
  { id: 1106, caseId: 10, type: 'digital', act: 3, title: 'Cámara de la puerta Este', location: 'Control de acceso del recinto', summary: 'Registro de entradas de vehículos la madrugada del suceso.', analysisNote: 'La furgoneta de Valeria Sete entra a las 6:40 y sale a las 7:30, contradiciendo su coartada.', relevant: true, secure: true },
  { id: 1107, caseId: 10, type: 'testimony', act: 1, title: 'Declaración de la feriante de la tómbola', location: 'Calle Mercado', summary: 'Testimonio de Dina Cardona sobre la llegada temprana de la gerente.', analysisNote: 'Coincide con la cámara de la puerta Este y con el parte de suministros.', relevant: false, secure: true },
  { id: 1108, caseId: 10, type: 'trace', act: 3, title: 'Llave de apriete con grasa nueva', location: 'Taller de mantenimiento', summary: 'La herramienta de la medida exacta del pasador, guardada en el armarito de la gerente.', analysisNote: 'Tiene grasa fresca y partículas metálicas compatibles con la tuerca destensada. Solo dos llaves: la de Ciro y la de Valeria.', relevant: true, secure: true },
  { id: 1109, caseId: 10, type: 'document', act: 1, title: 'Registro de horarios del personal', location: 'Panel de la feria', summary: 'Fichajes del día del accidente.', analysisNote: 'Valeria fichó a las 8:05 "entrada", aunque la cámara la mostró a las 6:40; el registro fue corregido a posteriori.', relevant: false, secure: true },
]

/* ---------------------------------------------------------------- */
/* Merge                                                            */
/* ---------------------------------------------------------------- */
const newCases = [case7, case8, case9, case10]
const newSuspects = [...suspects7, ...suspects8, ...suspects9, ...suspects10]
const newEvidence = [...evidence7, ...evidence8, ...evidence9, ...evidence10]

const caseIds = new Set(db.cases.map((c) => c.id))
const suspectIds = new Set(db.suspects.map((s) => s.id))
const evidenceIds = new Set(db.evidence.map((e) => e.id))

for (const c of newCases) {
  if (caseIds.has(c.id)) throw new Error(`ID de caso duplicado: ${c.id}`)
  caseIds.add(c.id)
}
for (const s of newSuspects) {
  if (suspectIds.has(s.id)) throw new Error(`ID de sospechoso duplicado: ${s.id}`)
  suspectIds.add(s.id)
}
for (const e of newEvidence) {
  if (evidenceIds.has(e.id)) throw new Error(`ID de evidencia duplicado: ${e.id}`)
  evidenceIds.add(e.id)
}

for (const c of newCases) {
  const sus = newSuspects.filter((s) => s.caseId === c.id)
  const evs = newEvidence.filter((e) => e.caseId === c.id)
  if (sus.length !== 6) throw new Error(`Caso ${c.id}: debe tener 6 sospechosos, tiene ${sus.length}`)
  if (evs.length !== 9) throw new Error(`Caso ${c.id}: debe tener 9 evidencias, tiene ${evs.length}`)
  if (!c.correctEvidenceIds.length || c.correctEvidenceIds.length !== evs.filter((e) => e.relevant).length) {
    throw new Error(`Caso ${c.id}: correctEvidenceIds no coincide con evidence relevant`)
  }
}

const before = { cases: db.cases.length, suspects: db.suspects.length, evidence: db.evidence.length }
db.cases.push(...newCases)
db.suspects.push(...newSuspects)
db.evidence.push(...newEvidence)

writeFileSync(dbPath, `${JSON.stringify(db, null, 2)}\n`, 'utf8')

console.log(`[expand-cases] ${before.cases} → ${db.cases.length} casos | ${before.suspects} → ${db.suspects.length} sospechosos | ${before.evidence} → ${db.evidence.length} evidencias.`)
console.log('Ahora ejecuta: node scripts/generate-interrogation.mjs')