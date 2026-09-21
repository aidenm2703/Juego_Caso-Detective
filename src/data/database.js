// Generado automáticamente desde db.json - no editar a mano.
export const localDatabase = {
  "players": [
    {
      "id": 1,
      "name": "Detective",
      "codename": "OSIRIS",
      "rank": "ROOKIE",
      "casesSolved": 0,
      "casesFailed": 0,
      "totalScore": 0,
      "averageAccuracy": 0,
      "bestRank": "-",
      "hintsUsed": 0,
      "joinedAt": "2026-09-01T09:00:00.000Z"
    }
  ],
  "cases": [
    {
      "id": 1,
      "caseNumber": "404-001",
      "title": "El Asesinato de la Galería",
      "category": "Homicidio",
      "difficulty": "MEDIUM",
      "status": "AVAILABLE",
      "timeLimit": 900,
      "maxScore": 11000,
      "posterHue": 4,
      "location": "Galería Marlowe, Ala Este",
      "date": "2026-09-12",
      "victim": "Víctor Marlowe, 61 años, dueño de la galería",
      "brief": "Aparece muerto en el despacho cerrado del ala este durante una visita privada. Forzaron la cerradura del pasillo de servicio y dejaron una ventana entreabierta. Pero la escena está demasiado montada.",
      "summary": "Durante la inauguración privada de su nueva colección, el dueño de la galería, Víctor Marlowe, apareció muerto en su despacho del ala este. La puerta estaba cerrada por dentro, el pasillo de servicio tenía la cerradura forzada y una ventana permanecía entreabierta. Desde hace meses, el dinero se fuga de las cuentas de la galería. Seis personas estuvieron cerca de él esa noche y todas tienen algo que ocultar.",
      "acts": [
        {
          "name": "El hallazgo",
          "unlockAt": 0,
          "text": "El cuerpo se encontró pasada la medianoche. Se hacen las primeras entrevistas: el curador, la coleccionista rival, el guardia de turno y el resto del personal que asistió a la inauguración."
        },
        {
          "name": "La contabilidad",
          "unlockAt": 300,
          "text": "Una auditoría exprés desvela facturas falsas por 'restauraciones' que jamás se hicieron y cuadros dados de baja sin que nadie los viera salir."
        },
        {
          "name": "La noche del crimen",
          "unlockAt": 600,
          "text": "Llegan las grabaciones de la entrada trasera y el volcado del teléfono de la víctima. Por fin se puede reconstruir la última hora de Marlowe."
        }
      ],
      "correctSuspectId": 101,
      "correctEvidenceIds": [
        206,
        207,
        209
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "El curador Marco Vélez desviaba dinero de la galería con facturas falsas a nombre de proveedores inexistentes. Marlowe averiguó lo de los cuadros desaparecidos y lo citó en su despacho a las 23:00. Marco entró por la entrada trasera, cruzó el pasillo de servicio, lo golpeó con la estatuilla de bronce y montó el supuesto robo con la ventana entreabierta y el jarrón roto para desviar la sospecha hacia un ladrón externo. Lo delata la grabación de la entrada trasera, el mensaje final de Marlowe y los fragmentos del jarrón, que se rompió desde dentro."
    },
    {
      "id": 2,
      "caseNumber": "404-002",
      "title": "El Prototipo Desaparecido",
      "category": "Espionaje Industrial",
      "difficulty": "HARD",
      "status": "AVAILABLE",
      "timeLimit": 1080,
      "maxScore": 12000,
      "posterHue": 210,
      "location": "Laboratorio Helix Dynamics, piso de la bóveda",
      "date": "2026-09-15",
      "victim": "Prototipo 'APEX-9' (sustraído)",
      "brief": "Un prototipo de IA de nueva generación desapareció de un laboratorio sellado durante la noche. Sin fuerza bruta, sin alarma. Alguien con acceso se lo llevó y sabía exactamente dónde estaba la bóveda cifrada.",
      "summary": "El prototipo estrella de Helix Dynamics, el APEX-9, desapareció de la bóveda termo-sellada. La alarma nunca saltó, el cifrado de la bóveda está intacto y solo cuatro credenciales pueden abrir esa planta después de medianoche. Esto fue un trabajo interno, planificado y ejecutado con sangre fría. La salida más rápida hacia la calle pasa por el hueco de servicio, pero alguien quiso hacer pasar el robo por un fallo técnico.",
      "acts": [
        {
          "name": "La bóveda intacta",
          "unlockAt": 0,
          "text": "Inspección del piso: alarmas en orden, cifrado intacto, huellas mínimas. Se entrevista al personal nocturno y se revisan los accesos."
        },
        {
          "name": "El rastro térmico",
          "unlockAt": 360,
          "text": "Las cámaras termográficas del corredor de la bóveda muestran a una figura con un maletín bajo el brazo y unas botas con suela térmica muy llamativas."
        },
        {
          "name": "Las sesiones remotas",
          "unlockAt": 720,
          "text": "El análisis de consolas revela sesiones de administrador imposibles: una credencial entra y 'sale' dos veces en tres minutos, y un segundo factor respondido desde el aparcamiento."
        }
      ],
      "correctSuspectId": 203,
      "correctEvidenceIds": [
        306,
        307,
        309
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "El ingeniero de seguridad Elías Royce clonó su propia credencial para hacer un pase de entrada falso: su placa entraba al piso de la bóveda mientras un 'fantasma' salía por la escalera de servicio. Abrió la consola remota con la clave de administrador y respondió la verificación de segundo factor con un relé escondido en el aparcamiento. La anomalía pass-back, la sesión con clave de administrador y las botas de suela térmica del termográfico lo confirman: Royce fue quien salió con el maletín."
    },
    {
      "id": 3,
      "caseNumber": "404-003",
      "title": "Medianoche en el Hotel 404",
      "category": "Habitación Cerrada",
      "difficulty": "EASY",
      "status": "AVAILABLE",
      "timeLimit": 720,
      "maxScore": 9500,
      "posterHue": 44,
      "location": "Hotel 404, Habitación 21",
      "date": "2026-09-18",
      "victim": "Sr. Ashworth, 54 años, viajante de negocios",
      "brief": "Un huésped aparece muerto en una habitación cerrada por dentro. La única llave está en la mesita de noche. Dos copas de champán en el fregadero, una ventana abierta y una vecina de puerta que jura que se quedó dormida.",
      "summary": "El Sr. Ashworth fue hallado sin vida en su habitación del hotel a las 6:00. El gerente tuvo que forzar la puerta cuando nadie respondió a su llamada de salida. La habitación estaba sellada: la llave en la mesita, la ventana abierta al pasillo de incendios y, en el fregadero, una segunda copa aún fría. La dirección del hotel guarda un registro impecable de cada llave y cada entrega. Alguien estuvo con él aquella noche y salió sin dejar rastro aparente.",
      "acts": [
        {
          "name": "Habitación sellada",
          "unlockAt": 0,
          "text": "Primera inspección: la puerta estaba cerrada con llave desde dentro, la ventana abierta al patio de incendios y la tarjeta sobre la mesita."
        },
        {
          "name": "Las copas y el hielo",
          "unlockAt": 240,
          "text": "En el fregadero hay una segunda copa de champán que no pertenece al servicio de la habitación, y el registro de llaves arroja anomalías."
        },
        {
          "name": "El armario",
          "unlockAt": 480,
          "text": "En el armario de la huésped contigua aparecen objetos que no le pertenecen. La historia empieza a desmoronarse."
        }
      ],
      "correctSuspectId": 302,
      "correctEvidenceIds": [
        402,
        404,
        407
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "'La Sra. Calloway' es una estafadora veterana. Sirvió el champán, drogó a Ashworth, le robó la tarjeta de la habitación y dejó la puerta entornada para vigilar el pasillo desde su propia puerta. Cuando 'descubrió' el cuerpo, cerró la habitación deslizando por última vez la tarjeta desde fuera, recreando la cerradura interior. La segunda copa fuera de la bandeja del servicio, la cartera vaciada escondida en su armario y la huella en la botella la delatan: estuvo físicamente dentro de la habitación."
    },
    {
      "id": 4,
      "caseNumber": "404-004",
      "title": "El Veneno del Telón",
      "category": "Envenenamiento",
      "difficulty": "MEDIUM",
      "status": "AVAILABLE",
      "timeLimit": 900,
      "maxScore": 11000,
      "posterHue": 330,
      "location": "Teatro Círculo, camerino de la diva",
      "date": "2026-09-21",
      "victim": "Aurora Valente, 44 años, soprano",
      "brief": "La soprano estrella se desploma y muere tras beber de su copa en el entreacto. El análisis forense encuentra digitalina en el vino y en los pétalos de las rosas de su camerino. Nadie entró ni salió del camerino durante el entreacto… según el personal, que se cubre entre sí.",
      "summary": "Aurora Valente llevaba años siendo la gran voz del Teatro Círculo. Durante el entreacto de la función de gala bebió de su copa y, en veinte minutos, estaba muerta. La digitalina hallada en el vino y en las rosas del ramo apunta a un veneno administrado a sabiendas de su doble afección cardiaca. Seis personas tuvieron acceso al camerino a lo largo de la noche y todas comparten un secreto: el teatro pierde dinero, los estrenos se cancelan y alguien heredará el papel principal.",
      "acts": [
        {
          "name": "La copa envenenada",
          "unlockAt": 0,
          "text": "Autopsia e informe de toxicología: digitalina en vino y pétalos. Se entrevista a la compañía y al personal del camerino."
        },
        {
          "name": "La amenaza",
          "unlockAt": 300,
          "text": "El ayudante de escenario confiesa un mensaje anónimo de advertencia recibido la noche anterior: 'Quien no cante mañana, salva la voz'."
        },
        {
          "name": "Las flores",
          "unlockAt": 600,
          "text": "La cinta del pasillo de camerinos muestra que el ramo no llegó con el resto del regalo institucional: alguien lo cambió veinte minutos antes del entreacto."
        }
      ],
      "correctSuspectId": 401,
      "correctEvidenceIds": [
        503,
        506,
        508
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "La suplente Grecia Manso llevaba dos temporadas esperando un hueco en el reparto y sabía de la afección cardiaca de Aurora por conversaciones con el maquillador. Purificó digitalina de dedalera, impregnó las rosas del ramo sustituto y luego sumergió una ampolleta en la copa durante la entrega de flores. La cinta del pasillo que muestra el cambio de ramo, el mensaje de advertencia al ayudante y el vial con residuos hallado en el dobladillo de su vestuario la señalan sin ambigüedad."
    },
    {
      "id": 5,
      "caseNumber": "404-005",
      "title": "El Expreso de la Medianoche",
      "category": "Homicidio",
      "difficulty": "HARD",
      "status": "AVAILABLE",
      "timeLimit": 1080,
      "maxScore": 12000,
      "posterHue": 160,
      "location": "Tren nocturno Alfa-9, coche B, compartimento 4",
      "date": "2026-09-24",
      "victim": "Cosme Aldana, 58 años, abogado",
      "brief": "El pasajero del compartimento 4 aparece apuñalado en su litera durante la noche. Puerta cerrada con pestillo, ventana sellada y la cámara del pasillo no registra a nadie entrando. Todos los demás pasajeros del coche B tienen coartadas cruzadas… y todas son mentira a medias.",
      "summary": "El abogado Cosme Aldana viajaba solo en el expreso Alfa-9 cuando amaneció apuñalado en su litera. El compartimento estaba cerrado con pestillo, la ventana sellada y la cámara del pasillo no muestra a nadie acercándose a la puerta. El tren llevaba cuatro horas sin paradas. Eso reduce el caso a un único corredor: el coche B y sus seis ocupantes, todos con algo que ocultar sobre el viejo expediente que Aldana llevaba en un maletín reforzado.",
      "acts": [
        {
          "name": "La cerradura sin rastro",
          "unlockAt": 0,
          "text": "Inspección del compartimento: pestillo ileso, ventana sellada, cámara ciega en el tramo exacto. Se entrevista a los seis pasajeros del coche B."
        },
        {
          "name": "El expediente",
          "unlockAt": 360,
          "text": "En el equipaje de Aldana aparece una carta sin enviar y copias de una auditoría a un despacho de abogados que nadie mencionó por su cuenta."
        },
        {
          "name": "La reconstrucción",
          "unlockAt": 720,
          "text": "La revisión fina del vagón revela que la cámara del pasillo fue desplazada unos grados con una pértiga desde el aseo contiguo, y aparece el instrumento."
        }
      ],
      "correctSuspectId": 503,
      "correctEvidenceIds": [
        602,
        605,
        607
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "El socio León Quiroga desviaba fondos del bufete y sabía que Aldana llevaba la auditoría al fiscal. Viajó en otro tren hasta la parada previa, subió con billete pagado en efectivo y desplazó la cámara del pasillo con la pértiga del aseo. Con el pasillo ciego, forzó la puerta con una lámina, apuñaló a Aldana y volvió a su compartimento. Lo delatan la carta de ultimátum que Aldana no llegó a enviar, la copia de la auditoría que solo los dos socios tenían y la huella parcial en la lámina de la puerta."
    },
    {
      "id": 6,
      "caseNumber": "404-006",
      "title": "Fuego en la Biblioteca",
      "category": "Incendio Provocado",
      "difficulty": "EASY",
      "status": "AVAILABLE",
      "timeLimit": 720,
      "maxScore": 9500,
      "posterHue": 96,
      "location": "Biblioteca Municipal Cervantes, archivo histórico",
      "date": "2026-09-27",
      "victim": "Archivo histórico municipal (destruido)",
      "brief": "El archivo histórico queda calcinado la noche anterior a una auditoría que iba a revisar las escrituras de unas fincas municipales. El fuego se originó en el depósito con un acelerante de combustión muy concreta. Los bomberos lo llaman 'fuego limpio': alguien quería que ardiera rápido y sin testigos.",
      "summary": "A las 3:00 de la madrugada, el depósito de legajos de la Biblioteca Cervantes ardía por completo. La auditoría del lunes iba a cotejar escrituras de tres fincas municipales en manos de una inmobiliaria. El acelerante hallado coincide con un producto que solo se distribuye a flotas profesionales. El vigilante nocturno dormía, la directora estaba fuera de la ciudad y la llave del depósito tenía un uso 'no registrado'.",
      "acts": [
        {
          "name": "El incendio limpio",
          "unlockAt": 0,
          "text": "Informe de bomberos y pericial: acelerante de combustión química, tres focos simultáneos en el depósito de legajos."
        },
        {
          "name": "El dinero",
          "unlockAt": 240,
          "text": "Intervención de los ficheros contables de la biblioteca: aparece una transferencia reciente y poco prudente de una sociedad inmobiliaria."
        },
        {
          "name": "La llave",
          "unlockAt": 480,
          "text": "El registro de accesos al depósito muestra que la llave maestra se usó fuera de horario y la entregan los testigos de la calle."
        }
      ],
      "correctSuspectId": 602,
      "correctEvidenceIds": [
        703,
        705,
        706
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "El adjunto del archivo, Pablo Tierno, recibió 50.000 € de la inmobiliaria del empresario Nicolás Ferrán para destruir las escrituras antes de la auditoría. Abrió el depósito con la llave maestra fuera de horario, dejó el acelerante repartido en tres focos y salió por la puerta de servicio. Lo delata la transferencia desde la sociedad inmobiliaria, la grabación de un coche de esa sociedad frente a la biblioteca a las 2:40 y los restos de acelerante en la suela de sus zapatos técnicos."
    },
    {
      "id": 7,
      "caseNumber": "404-007",
      "title": "Rapto en la Subasta",
      "category": "Secuestro",
      "difficulty": "MEDIUM",
      "status": "AVAILABLE",
      "timeLimit": 900,
      "maxScore": 11000,
      "posterHue": 270,
      "location": "Casa de Subastas El Dorado, salón imperial",
      "date": "2026-10-02",
      "victim": "Sergio Ordóñez, 49 años, coleccionista de relojes",
      "brief": "Durante la puja por el reloj \"Tycho\", el coleccionista desaparece de su palco. Cuarenta minutos después llega la llamada del rescate. Pero no hay violencia real: ninguna puerta forzada, testigos que miran al suelo y una llamada que sale… del propio edificio.",
      "summary": "En la subasta benéfica de la Casa El Dorado, el coleccionista Sergio Ordóñez se esfuma del palco 12 en plena puja final por el reloj Tycho, valorado en dos millones. Cuarenta minutos después la familia recibe una llamada pidiendo rescate. El escenario no cuadra: sin puertas forzadas, el bastón olvidado en la bandeja de pujas, y una nota de rescate fotocopiada que huele a impostura.",
      "acts": [
        {
          "name": "La desaparición",
          "unlockAt": 0,
          "text": "El palco 12 aparece vacío tras la puja final. Los asistentes recuerdan haberse cruzado con Ordóñez justo antes del telón. Se toma declaración a la plana de la subasta."
        },
        {
          "name": "La llamada del rescate",
          "unlockAt": 300,
          "text": "La familia confirma lo peor: Ordóñez llamó pidiendo dos millones para liberarlo. El patch panel de la centralita sitúa la llamada en el interior de la casa de subastas."
        },
        {
          "name": "El regreso del coleccionista",
          "unlockAt": 600,
          "text": "Ordóñez aparece \"liberado\" en la puerta de servicio, ileso. El rastro de la taquilla, la cámara del sótano y una póliza renovada cuentan otra historia."
        }
      ],
      "correctSuspectId": 703,
      "correctEvidenceIds": [
        803,
        805,
        806
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "El secuestro era falso de principio a fin: Ordóñez lo organizó con su tasador de confianza, Ramiro Sol, para cobrar el seguro del reloj y tapar una deuda de juego. Salió por la escalera de servicio sin forzar nada, la nota de rescate se imprimió con la impresora del despacho de tasación, y la \"llamada del secuestrador\" salió de la extensión 14, el propio despacho de Sol. La cámara del sótano los pilla juntos repartiéndose un sobre de efectivo minutos antes del \"rescate\"."
    },
    {
      "id": 8,
      "caseNumber": "404-008",
      "title": "El Mago que se Esfumó",
      "category": "Desaparición",
      "difficulty": "MEDIUM",
      "status": "AVAILABLE",
      "timeLimit": 900,
      "maxScore": 11000,
      "posterHue": 20,
      "location": "Gran Teatro Alcázar, escenario principal",
      "date": "2026-10-09",
      "victim": "Aldo Castel, 52 años, ilusionista (desaparecido)",
      "brief": "En el número final, Castel desaparece de la caja de escape… y jamás aparece en el público. La taquilla amanece vacía y falta la bolsa de viaje de su camerino. Un mago que se esfuma de verdad solo se va por dos razones: impagos o un cómplice.",
      "summary": "Durante la réplica final de su célebre caja de escape, el ilusionista Aldo Castel se esfuma del escenario del Gran Teatro Alcázar. Los técnicos juran que la trampilla nunca llegó a accionarse y la caja cayó sin peso. A la mañana siguiente la recaudación amanece vacía, su ayudante Dora Kelis se ha ido sin avisar y el teléfono de Castel suena a un ferry con rumbo internacional.",
      "acts": [
        {
          "name": "El número final",
          "unlockAt": 0,
          "text": "La caja de escape de Castel cae al suelo con un golpe seco. Cuando se abre, no hay nadie dentro. Se entrevista al personal del escenario y al público de la primera fila."
        },
        {
          "name": "La taquilla vacía",
          "unlockAt": 300,
          "text": "La recaudación de la gira ha desaparecido y el registro del \"Ojo Biónico\", la cámara que graba el lateral del escenario, apunta a una segunda persona junto a Castel."
        },
        {
          "name": "El canal de utilería",
          "unlockAt": 600,
          "text": "Los billetes de ferry, la devolución de los efectos personales y un cheque sin cobrar reconstruyen la fuga de Castel y su cómplice."
        }
      ],
      "correctSuspectId": 802,
      "correctEvidenceIds": [
        904,
        906,
        908
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "Nadie raptó a Castel: se fue porque debía dos giras a sus acreedores y reservó su fuga de antemano. Su ayudante, Dora Kelis, lo sacó por el canal de utilería tras la réplica y guardó la recaudación en una bolsa preparada. La trampilla no se accionó (el cerrojo estaba frío), pero el Ojo Biónico registra dos siluetas saliendo por el pasillo de maquinaria, y los billetes de ferry comprados a nombre de ambos esa misma madrugada cierran la desaparición. Ni secuestro ni truco: una fuga calculada."
    },
    {
      "id": 9,
      "caseNumber": "404-009",
      "title": "La Auditoría Fantasma",
      "category": "Fraude",
      "difficulty": "HARD",
      "status": "AVAILABLE",
      "timeLimit": 1080,
      "maxScore": 12000,
      "posterHue": 300,
      "location": "Sede Prometeo Capital, planta 12",
      "date": "2026-10-16",
      "victim": "Olga Ferrán, 45 años, contadora del fondo (desaparecida)",
      "brief": "La única persona que había encontrado el \"proveedor fantasma\" lleva dos días sin aparecer. El servidor de contabilidad amanece con 40 minutos borrados, y el correo sellado de Olga está a un clic de la fiscalía.",
      "summary": "Prometeo Capital cierra su ejercicio anual con un informe limpio… y 1,2 millones de euros que no existen. Olga Ferrán, la contadora que detectó un proveedor que cobraba sin entregar nada, dejó de aparecer por la oficina el jueves. La auditoría oficial asegura que no hay agujero; el expediente sí lo encuentra, señala al director financiero y reconcilia cada factura con el proveedor fantasma.",
      "acts": [
        {
          "name": "El informe limpio",
          "unlockAt": 0,
          "text": "El consejo recibe el resultado anual sin salvedades. Solo Olga había anotado a mano una \"cuenta 777 Órbita\" que pulverizaba el balance de la contabilidad."
        },
        {
          "name": "El servidor borrado",
          "unlockAt": 360,
          "text": "El registro del servidor de contabilidad confirma un borrado nocturno a las 2:03 con la llave del director financiero. El proveedor Órbita cobraba, pero no factura nada al exterior."
        },
        {
          "name": "El correo sellado",
          "unlockAt": 720,
          "text": "El abogado de Olga entrega el informe que dejó sellado la noche que desapareció: copias de las facturas, las transferencias y el nombre de quien firmaba cada una."
        }
      ],
      "correctSuspectId": 904,
      "correctEvidenceIds": [
        1002,
        1004,
        1007
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "No hubo secuestro: Olga Ferrán se fue por su cuenta a entregar las copias a la fiscalía. El desfalco lo cometía el director financiero, Ezequiel Prats, que creó el proveedor fantasma \"Órbita Servicios\" y blanqueó 1,2 millones con facturas firmadas por él mismo. Cuando Olga detectó la cuenta 777, Prats borró la noche clave del servidor con su llave joya y le hizo llegar una \"invitación\" a retirar el asunto. El registro del servidor, el contrato de Órbita con su firma digital y el correo sellado de Olga cierran el círculo."
    },
    {
      "id": 10,
      "caseNumber": "404-010",
      "title": "Accidente en la Feria",
      "category": "Homicidio",
      "difficulty": "EASY",
      "status": "AVAILABLE",
      "timeLimit": 720,
      "maxScore": 9500,
      "posterHue": 140,
      "location": "Feria de Atracciones La Noria, torre central",
      "date": "2026-10-23",
      "victim": "Iván Curiel, 37 años, dueño de la noria",
      "brief": "La cabina 12 se suelta \"por azar\" mientras Iván la revisaba antes de abrir. El perito encuentra el pasador flojo de propósito: tuerca con limaduras frescas, grasa nueva en la llave de apriete y una socia que llegó \"después\" del accidente… demasiado arreglada.",
      "summary": "En la mañana de apertura, la cabina 12 de la noria se desprende del eje y cae al vacío. Iván Curiel, su dueño, muere en la caída justo cuando inspeccionaba la estructura. La investigación descubre que el pasador del eje estaba suelto con la tuerca destensada a conciencia y grasa nueva en la llave del taller. La socia gerente, la heredera y el mecánico defienden cada uno su versión del horario.",
      "acts": [
        {
          "name": "La caída",
          "unlockAt": 0,
          "text": "La cabina 12 se desprende de la noria a las 8:15. Los primeros testigos son los feriantes de las casetas vecinas que abrían sus puestos."
        },
        {
          "name": "El perito",
          "unlockAt": 240,
          "text": "El informe técnico confirma el sabotaje: el pasador tenía la tuerca floja con limaduras frescas y no había señales de fatiga del metal."
        },
        {
          "name": "La coartada de la socia",
          "unlockAt": 480,
          "text": "La cámara de la puerta Este y el registro de horarios desmontan la versión de la gerente y apuntan al taller de mantenimiento."
        }
      ],
      "correctSuspectId": 1005,
      "correctEvidenceIds": [
        1103,
        1106,
        1108
      ],
      "hints": [
        {
          "id": 1,
          "title": "Fuga de perfil",
          "description": "Desvela las notas de investigación de un sospechoso, incluido su motivo oculto."
        },
        {
          "id": 2,
          "title": "Pulso de evidencia",
          "description": "Marca una evidencia relevante accesible en el tablero en el acto actual."
        },
        {
          "id": 3,
          "title": "Eliminación de sospechoso",
          "description": "Descarta permanentemente a un sospechoso inocente."
        }
      ],
      "solution": "No fue un accidente: la socia gerente, Valeria Sete, aflojó el pasador del eje la madrugada anterior con la llave del taller de mantenimiento y llegó a las 6:40, antes de la revisión, para asegurarse de que nadie lo apretara. La tuerca conservaba limaduras frescas, la llave de apriete guardada en el taller de Valeria tenía grasa nueva, y la cámara de la puerta Este desmontó su coartada. Cobraba el doble del seguro de la noria que ella misma había contratado ese mes y heredaba la parte de Iván."
    }
  ],
  "suspects": [
    {
      "id": 101,
      "caseId": 1,
      "act": 2,
      "name": "Marco Vélez",
      "age": 45,
      "profession": "Curador de la galería",
      "relation": "Protegido y mano derecha de Marlowe",
      "alibi": "Dice que descargaba un embalaje en el muelle de carga entre las 22:30 y las 23:10.",
      "description": "Educado, enrocado cuando se le presiona. Lleva el día a día de la galería desde que Marlowe enfermó.",
      "suspicionLevel": "HIGH",
      "notes": "Contabilidad: cuadros dados de baja como 'restauración'. En su cajón, una factura de marcos por trabajo jamás cobrado.",
      "motive": "Desviaba fondos de la galería con facturas falsas y Marlowe acababa de descubrir los cuadros desaparecidos.",
      "interrogation": [
        {
          "id": 1011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Dice que descargaba un embalaje en el muelle de carga entre las 22:30 y las 23:10.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 1012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Protegido y mano derecha de Marlowe",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 1013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Desviaba fondos de la galería con facturas falsas y Marlowe acababa de descubrir los cuadros desaparecidos. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 1014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 1015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Dice que descargaba un embalaje en el muelle d…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 102,
      "caseId": 1,
      "act": 1,
      "name": "Elena Frías",
      "age": 38,
      "profession": "Coleccionista rival",
      "relation": "Enemiga declarada; peleó con Marlowe en público por un cuadro en litigio",
      "alibi": "Tomó un taxi a las 22:12, confirmado por el portero y el recibo del taxi.",
      "description": "Genio vivo; discusión pública y a gritos tres noches antes del crimen.",
      "suspicionLevel": "MEDIUM",
      "notes": "Amenazó con 'cerrarle el local a Marlowe' delante de media sala, pero su cronología es inexpugnable: estaba a kilómetros de distancia.",
      "motive": "Pelea pública por un cuadro en litigio y amenazas de 'cerrarle el local' ante testigos.",
      "interrogation": [
        {
          "id": 1021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Tomó un taxi a las 22:12, confirmado por el portero y el recibo del taxi.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 1022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Enemiga declarada; peleó con Marlowe en público por un cuadro en litigio",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 1023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Pelea pública por un cuadro en litigio y amenazas de 'cerrarle el local' ante testigos. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 1024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 1025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 103,
      "caseId": 1,
      "act": 1,
      "name": "Teo Remi",
      "age": 29,
      "profession": "Guardia de seguridad",
      "relation": "Empleado; amonestado hace poco por dormirse en el turno",
      "alibi": "Rondaba el perímetro en una ruta registrada de 15 minutos desde las 22:40.",
      "description": "A la defensiva; alianzas de juego rotas y deudas fuertes con una casa de apuestas desconocida.",
      "suspicionLevel": "LOW",
      "notes": "Su parte de ronda lleva marcas de hora consistentes. Los manuales de ruta lo descartan del ala este.",
      "motive": "Deudas fuertes de juego y una amonestación reciente: desesperado por dinero.",
      "interrogation": [
        {
          "id": 1031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Rondaba el perímetro en una ruta registrada de 15 minutos desde las 22:40.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 1032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Empleado; amonestado hace poco por dormirse en el turno",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 1033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Deudas fuertes de juego y una amonestación reciente: desesperado por dinero. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 1034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 1035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 104,
      "caseId": 1,
      "act": 2,
      "name": "Rosa Iglesias",
      "age": 51,
      "profession": "Restauradora",
      "relation": "Encargada del taller de restauración de la galería",
      "alibi": "Trabajaba sola con una lámpara en el taller; nadie la vio entre las 22:00 y las 23:20.",
      "description": "Precisa, callada. Amargada por un recorte de presupuesto que echó la culpa a Marlowe.",
      "suspicionLevel": "LOW",
      "notes": "El listado de sus encargos no recoge las 'restauraciones' facturadas. Podría ser cómplice o víctima del fraude.",
      "motive": "Recorte de presupuesto que puso en riesgo su puesto y rencor contenido hacia la dirección.",
      "interrogation": [
        {
          "id": 1041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Trabajaba sola con una lámpara en el taller; nadie la vio entre las 22:00 y las 23:20.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 1042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Encargada del taller de restauración de la galería",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 1043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Recorte de presupuesto que puso en riesgo su puesto y rencor contenido hacia la dirección. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 1044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 1045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 105,
      "caseId": 1,
      "act": 1,
      "name": "Iván Soler",
      "age": 47,
      "profession": "Contable externo",
      "relation": "Firma de contabilidad subcontratada por la galería",
      "alibi": "Dejó la galería a las 21:50; registro de salida del edificio registrado.",
      "description": "Nervioso, en contra de que la auditoría internara los libros, justo en plena temporada de balances.",
      "suspicionLevel": "MEDIUM",
      "notes": "La factura falsa nº117 no lleva su firma, pero sus anotaciones saltaban los totales de las 'restauraciones'.",
      "motive": "Hizo la vista gorda con el fraude a cambio de que la galería renovara su contrato.",
      "interrogation": [
        {
          "id": 1051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Dejó la galería a las 21:50; registro de salida del edificio registrado.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 1052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Firma de contabilidad subcontratada por la galería",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 1053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Hizo la vista gorda con el fraude a cambio de que la galería renovara su contrato. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 1054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 1055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 106,
      "caseId": 1,
      "act": 1,
      "name": "Camila Durán",
      "age": 26,
      "profession": "Ayudante de sala",
      "relation": "Gestora del cóctel de la inauguración",
      "alibi": "Repartiendo bebidas continuamente; el vídeo del salón la muestra hasta las 23:05.",
      "description": "Atenea, en apuros. Curiosa: hizo varias preguntas por el pasillo de servicio.",
      "suspicionLevel": "LOW",
      "notes": "Preguntó por la puerta del pasillo de servicio justo la semana antes de que la forzaran. Casualidad o punta de cadena.",
      "motive": "Necesita dinero para un familiar enfermo y preguntó demasiado por la puerta del pasillo de servicio.",
      "interrogation": [
        {
          "id": 1061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Repartiendo bebidas continuamente; el vídeo del salón la muestra hasta las 23:05.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 1062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Marlowe?",
          "answer": "Gestora del cóctel de la inauguración",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 1063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Necesita dinero para un familiar enfermo y preguntó demasiado por la puerta del pasillo de servicio. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 1064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la galería?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 1065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Grabación de la entrada trasera. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 201,
      "caseId": 2,
      "act": 1,
      "name": "Dra. Iris Senna",
      "age": 52,
      "profession": "Jefa de I+D",
      "relation": "Desarrolladora principal del proyecto APEX-9",
      "alibi": "Salió del edificio a las 21:40, confirmado por el registro de credencial; no volvió esa noche.",
      "description": "Brillante, reservada. Es propietaria de la patente original de la arquitectura del chip.",
      "suspicionLevel": "MEDIUM",
      "notes": "La oferta de una empresa rival la tienta desde hace seis meses, pero los torniquetes biométricos la sitúan fuera del edificio antes de la ventana del robo.",
      "motive": "Una empresa rival le ofrece un puesto fundador y conserva las patentes del chip sustraído.",
      "interrogation": [
        {
          "id": 2011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "Salió del edificio a las 21:40, confirmado por el registro de credencial; no volvió esa noche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 2012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Desarrolladora principal del proyecto APEX-9",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 2013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Una empresa rival le ofrece un puesto fundador y conserva las patentes del chip sustraído. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el robo. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 2014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 2015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 202,
      "caseId": 2,
      "act": 1,
      "name": "Mateo Paz",
      "age": 26,
      "profession": "Becario de investigación",
      "relation": "Becario de turno de noche con acceso a la planta de la bóveda",
      "alibi": "Estuvo en la cafetería con dos testigos de 23:00 a 1:00.",
      "description": "Despistado, descuidado, escribe contraseñas de servidores en una libreta sin cifrar.",
      "suspicionLevel": "LOW",
      "notes": "Su libreta de contraseñas es una bandera roja, pero su credencial nunca tocó la consola del piso de la bóveda.",
      "motive": "Contraseñas de servidores sin cifrar sobre su mesa y demasiada curiosidad para un becario.",
      "interrogation": [
        {
          "id": 2021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "Estuvo en la cafetería con dos testigos de 23:00 a 1:00.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 2022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Becario de turno de noche con acceso a la planta de la bóveda",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 2023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Contraseñas de servidores sin cifrar sobre su mesa y demasiada curiosidad para un becario. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el robo. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 2024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 2025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 203,
      "caseId": 2,
      "act": 2,
      "name": "Elías Royce",
      "age": 41,
      "profession": "Ingeniero de seguridad",
      "relation": "Administrador de los sistemas de acceso y consolas",
      "alibi": "Dice que estaba en casa; su router se conectó a la VPN de la oficina y registró sesión de 22:44 a 0:02.",
      "description": "Tranquilo, técnicamente superior a todas las contramedidas del sitio. Conocía al detalle la ventana de reinicio de la bóveda cifrada.",
      "suspicionLevel": "HIGH",
      "notes": "su VPN doméstica registró una sesión inactiva mientras ocurrían anomalías de credencial y un inicio de sesión en consola: físicamente imposible de una sola persona salvo que estuviera montado.",
      "motive": "Único administrador con derechos totales y el único que conocía de memoria la ventana de reinicio de la bóveda.",
      "interrogation": [
        {
          "id": 2031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "Dice que estaba en casa; su router se conectó a la VPN de la oficina y registró sesión de 22:44 a 0:02.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 2032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Administrador de los sistemas de acceso y consolas",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 2033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Único administrador con derechos totales y el único que conocía de memoria la ventana de reinicio de la bóveda. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 2034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 2035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Dice que estaba en casa; su router se conectó …",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 204,
      "caseId": 2,
      "act": 1,
      "name": "Norma Villa",
      "age": 49,
      "profession": "Jefa de instalaciones",
      "relation": "Responsable de llaves y del plan de evacuación",
      "alibi": "Revisaba la planta baja con el técnico de turno; firma de entrada a las 22:20.",
      "description": "Metódica, cansada; dos despidos laborales en un año la tienen al límite del presupuesto.",
      "suspicionLevel": "LOW",
      "notes": "Tiene copia física de la llave maestra, pero el candado del maletín no fue forzado y la alarma interior no se disparó jamás.",
      "motive": "Dos despidos recientes y deudas de hipoteca: candidata a una 'corrección' económica oportuna.",
      "interrogation": [
        {
          "id": 2041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "Revisaba la planta baja con el técnico de turno; firma de entrada a las 22:20.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 2042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Responsable de llaves y del plan de evacuación",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 2043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Dos despidos recientes y deudas de hipoteca: candidata a una 'corrección' económica oportuna. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el robo. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 2044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 2045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 205,
      "caseId": 2,
      "act": 2,
      "name": "Sergio Roca",
      "age": 33,
      "profession": "Técnico de turno",
      "relation": "Atendía incidencias del piso de la bóveda vía consola",
      "alibi": "En la sala de operaciones desde las 22:15; cámaras internas lo cubren hasta las 0:30.",
      "description": "Huraño, resentido con la dirección por no promocionarlo a administrador.",
      "suspicionLevel": "MEDIUM",
      "notes": "Conocía los reinicios de la bóveda, pero sin credencial de administración física no podía abrir la planta restringida.",
      "motive": "Rencor por el ascenso denegado y acceso operativo a la configuración de la consola.",
      "interrogation": [
        {
          "id": 2051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "En la sala de operaciones desde las 22:15; cámaras internas lo cubren hasta las 0:30.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 2052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Atendía incidencias del piso de la bóveda vía consola",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 2053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Rencor por el ascenso denegado y acceso operativo a la configuración de la consola. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el robo. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 2054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 2055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 206,
      "caseId": 2,
      "act": 1,
      "name": "Laia Font",
      "age": 30,
      "profession": "Analista de registros",
      "relation": "Revisaba los logs de acceso de la semana del robo",
      "alibi": "Trabajó desde casa; su credencial no registró entrada alguna esa noche.",
      "description": "Nerviosa desde el robo; pide de manera insistente acceso a los ficheros de la bóveda.",
      "suspicionLevel": "MEDIUM",
      "notes": "Sus peticiones de acceso a los logs de la bóveda son posteriores al robo, no anteriores. Más curiosidad que culpabilidad.",
      "motive": "Quería demostrar un fallo en las auditorías para mejorar su posición; no participó en el robo.",
      "interrogation": [
        {
          "id": 2061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el robo?",
          "answer": "Trabajó desde casa; su credencial no registró entrada alguna esa noche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 2062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el proyecto?",
          "answer": "Revisaba los logs de acceso de la semana del robo",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 2063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Quería demostrar un fallo en las auditorías para mejorar su posición; no participó en el robo. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el robo. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 2064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el laboratorio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 2065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Anomalía 'pass-back' de credencial. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 301,
      "caseId": 3,
      "act": 1,
      "name": "Odile March",
      "age": 47,
      "profession": "Recepcionista de noche",
      "relation": "Personal de recepción del Hotel 404",
      "alibi": "Detrás del mostrador toda la noche; la cámara del vestíbulo la cubre de principio a fin.",
      "description": "Cansada, meticulosa con los registros; hizo ella el check-in de Ashworth.",
      "suspicionLevel": "LOW",
      "notes": "Las cámaras muestran que nunca dejó el vestíbulo y que la tarjeta de Ashworth jamás se reactivó tras su entrega inicial.",
      "motive": "Registros impecables en un hotel en apuros: desdeñó cualquier maniobra con llaves.",
      "interrogation": [
        {
          "id": 3011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Detrás del mostrador toda la noche; la cámara del vestíbulo la cubre de principio a fin.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 3012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Personal de recepción del Hotel 404",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 3013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Registros impecables en un hotel en apuros: desdeñó cualquier maniobra con llaves. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 3014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 3015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 302,
      "caseId": 3,
      "act": 2,
      "name": "'Sra. Calloway'",
      "age": 35,
      "profession": "Consultora 'de negocios'",
      "relation": "Huésped de la habitación contigua, sin documento en el registro",
      "alibi": "Jura que durmió toda la noche y que 'no oyó nada hasta la alarma'.",
      "description": "Cautivadora, sin huellas en el equipaje, pagó en efectivo y su supuesta empresa no existe.",
      "suspicionLevel": "HIGH",
      "notes": "En ficheros policiales: cuatro alias coinciden con un perfil de estafadora conocido. Su historia de 'llegué ayer' no tiene entrada en el registro.",
      "motive": "Perfil de estafadora conocido: cuatro alias, pago en efectivo y sin entrada registrada en el libro de huéspedes.",
      "interrogation": [
        {
          "id": 3021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Jura que durmió toda la noche y que 'no oyó nada hasta la alarma'.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 3022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Huésped de la habitación contigua, sin documento en el registro",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 3023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Perfil de estafadora conocido: cuatro alias, pago en efectivo y sin entrada registrada en el libro de huéspedes. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 3024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 3025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Jura que durmió toda la noche y que 'no oyó na…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 303,
      "caseId": 3,
      "act": 1,
      "name": "Finn Bauer",
      "age": 23,
      "profession": "Botones",
      "relation": "Personal de servicio; entregó el hielo a la habitación 21 a las 23:30",
      "alibi": "Trailerita de entregas registrada y rondas por la planta 2 hasta la medianoche.",
      "description": "Solemne, servicial; conocido por curiosear las pertenencias de los huéspedes.",
      "suspicionLevel": "MEDIUM",
      "notes": "Fue el último empleado frente a la puerta de la 21, pero las cámaras de planta lo muestran entrando y saliendo de estancias distintas cada vez.",
      "motive": "Conocido por curiosear pertenencias; el último empleado frente a esa puerta la noche de los hechos.",
      "interrogation": [
        {
          "id": 3031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Trailerita de entregas registrada y rondas por la planta 2 hasta la medianoche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 3032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Personal de servicio; entregó el hielo a la habitación 21 a las 23:30",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 3033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Conocido por curiosear pertenencias; el último empleado frente a esa puerta la noche de los hechos. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 3034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 3035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 304,
      "caseId": 3,
      "act": 2,
      "name": "Augusto Peña",
      "age": 55,
      "profession": "Mantenimiento",
      "relation": "Personal de mantenimiento con llave maestra del piso",
      "alibi": "Reparaba un grifo en la planta 3 desde las 23:15; el albarán lleva su firma.",
      "description": "Huraño, de pocas palabras. Lleva cinco años pidiendo la jubilación anticipada.",
      "suspicionLevel": "LOW",
      "notes": "Su llave maestra abre todo el edificio, pero el dispositivo del piso muestra la apertura con tarjeta de huésped, no con maestra.",
      "motive": "Cansado de reglas y con la jubilación en la recámara: sin rastro de participación económica.",
      "interrogation": [
        {
          "id": 3041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Reparaba un grifo en la planta 3 desde las 23:15; el albarán lleva su firma.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 3042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Personal de mantenimiento con llave maestra del piso",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 3043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cansado de reglas y con la jubilación en la recámara: sin rastro de participación económica. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 3044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 3045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 305,
      "caseId": 3,
      "act": 1,
      "name": "Martina Solís",
      "age": 41,
      "profession": "Recepcionista de tarde",
      "relation": "Atendió el check-in de los huéspedes del piso 2",
      "alibi": "Salió a las 22:40; la cámara la muestra cruzando el vestíbulo y saliendo.",
      "description": "Atenta, habladora; recuerda con precisión la llegada de Ashworth y las 'extrañas' preguntas de Calloway.",
      "suspicionLevel": "LOW",
      "notes": "Recordó que Calloway preguntó dos veces por si 'la 21 estaba ocupada'. Detalle clave, no culpabilidad.",
      "motive": "Testigo involuntaria: su memoria de la conversación de Calloway la exculpa y a la vez la incrimina.",
      "interrogation": [
        {
          "id": 3051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Salió a las 22:40; la cámara la muestra cruzando el vestíbulo y saliendo.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 3052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Atendió el check-in de los huéspedes del piso 2",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 3053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Testigo involuntaria: su memoria de la conversación de Calloway la exculpa y a la vez la incrimina. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 3054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 3055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 306,
      "caseId": 3,
      "act": 1,
      "name": "Diego Vela",
      "age": 39,
      "profession": "Taxista",
      "relation": "Conductor que llevó a Calloway al hotel la tarde anterior",
      "alibi": "Lleva a Calloway a la puerta a las 17:50 y no vuelve a verla en toda la noche.",
      "description": "Pendiente de una multa impaga; recuerda el trayecto porque 'pagó con billetes grandes'.",
      "suspicionLevel": "LOW",
      "notes": "Su declaración confirma la ruta de Calloway hacia el hotel, nada más. Sin vínculo con la habitación.",
      "motive": "Multas impagas y una limpieza de deudas recurrente: sin conexión posterior con la escena.",
      "interrogation": [
        {
          "id": 3061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Lleva a Calloway a la puerta a las 17:50 y no vuelve a verla en toda la noche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 3062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía al señor Ashworth?",
          "answer": "Conductor que llevó a Calloway al hotel la tarde anterior",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 3063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Multas impagas y una limpieza de deudas recurrente: sin conexión posterior con la escena. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 3064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquella noche en el hotel?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 3065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Segunda copa de champán. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 401,
      "caseId": 4,
      "act": 2,
      "name": "Grecia Manso",
      "age": 33,
      "profession": "Soprano suplente",
      "relation": "Suplente oficial de Aurora; heredaría el papel estelar",
      "alibi": "Iba vestida para el mismo papel y permaneció en su camerino con la jefa de escena de las 20:15 a las 22:30.",
      "description": "Estudiosa, ambiciosa. Sabe botánica: mudó un jardín entero por hobby hace dos temporadas.",
      "suspicionLevel": "HIGH",
      "notes": "Preguntó dos veces al maquillador por la pastilla de Aurora y por su 'enfermedad del corazón' en los últimos meses.",
      "motive": "Dos años esperando un hueco en el reparto y conocimiento exacto de las flores y de la afección cardiaca de la diva.",
      "interrogation": [
        {
          "id": 4011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "Iba vestida para el mismo papel y permaneció en su camerino con la jefa de escena de las 20:15 a las 22:30.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 4012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Suplente oficial de Aurora; heredaría el papel estelar",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 4013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Dos años esperando un hueco en el reparto y conocimiento exacto de las flores y de la afección cardiaca de la diva. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 4014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 4015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Iba vestida para el mismo papel y permaneció e…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 402,
      "caseId": 4,
      "act": 1,
      "name": "Damián Calvo",
      "age": 58,
      "profession": "Director del teatro",
      "relation": "Responsable de programación y presupuestos",
      "alibi": "En la sala de control durante el entreacto, firmado por el técnico de sonido.",
      "description": "Mano de hierro en crisis: el teatro pierde abonos desde hace dos temporadas.",
      "suspicionLevel": "MEDIUM",
      "notes": "La póliza del teatro se renovó con una cláusula que cubre la cancelación de gala por fallecimiento de la solista principal.",
      "motive": "Salvar el teatro con el seguro de cancelación y renovar el abono con un nombre más barato en cartel.",
      "interrogation": [
        {
          "id": 4021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "En la sala de control durante el entreacto, firmado por el técnico de sonido.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 4022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Responsable de programación y presupuestos",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 4023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Salvar el teatro con el seguro de cancelación y renovar el abono con un nombre más barato en cartel. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el envenenamiento. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 4024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 4025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 403,
      "caseId": 4,
      "act": 1,
      "name": "Fiorella Reyes",
      "age": 37,
      "profession": "Peluquera y vestuarista",
      "relation": "Acompañaba a Aurora en cada función; conocía sus horarios",
      "alibi": "Cerrando el vestuario de Aurora 'diez minutos más' de lo habitual esa noche.",
      "description": "Protectora constante de Aurora; el personal la considera la sombra de la diva.",
      "suspicionLevel": "LOW",
      "notes": "La cinta muestra que salió del camerino sin el ramo institucional… y los lirios del valle que arma el ramo no son del ramo oficial.",
      "motive": "Rencor callado por el trato de manera constante de Aurora y acceso sin espera a su camerino.",
      "interrogation": [
        {
          "id": 4031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "Cerrando el vestuario de Aurora 'diez minutos más' de lo habitual esa noche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 4032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Acompañaba a Aurora en cada función; conocía sus horarios",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 4033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Rencor callado por el trato de manera constante de Aurora y acceso sin espera a su camerino. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el envenenamiento. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 4034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 4035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 404,
      "caseId": 4,
      "act": 1,
      "name": "Andrés Pujol",
      "age": 62,
      "profession": "Crítico musical",
      "relation": "Crítico que puso en duda la voz de Aurora en su última reseña",
      "alibi": "En la butaca 14 del patio, visible en cámara durante todo el acto I y el entreacto.",
      "description": "Elocuente y con peticiones contundentes: 'Aurora ya no rinde', escribió hace un mes.",
      "suspicionLevel": "LOW",
      "notes": "Su reseña negativa convenció al teatro de buscar suplente; sin embargo, no se le vio fuera de su butaca un solo instante.",
      "motive": "Credibilidad en juego tras su reseña demoledora; no tomó contacto con el camerino.",
      "interrogation": [
        {
          "id": 4041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "En la butaca 14 del patio, visible en cámara durante todo el acto I y el entreacto.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 4042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Crítico que puso en duda la voz de Aurora en su última reseña",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 4043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Credibilidad en juego tras su reseña demoledora; no tomó contacto con el camerino. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el envenenamiento. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 4044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 4045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 405,
      "caseId": 4,
      "act": 2,
      "name": "Nadia Campo",
      "age": 45,
      "profession": "Asistente personal de Aurora",
      "relation": "Gestora de la agenda, el vino y el equipaje de la diva",
      "alibi": "Fue quien sirvió la copa 'para la garganta' antes de salir a escena.",
      "description": "Cumplidora en exceso; hace tres años casi se despide por un desaire de Aurora.",
      "suspicionLevel": "MEDIUM",
      "notes": "La copa tenía el vino sustituto sin etiqueta. Su historial médico no muestra veneno alguno, pero la cadena del vino pasa por sus manos.",
      "motive": "Rencor por desaires pasados y control absoluto de la copa y del vino de Aurora.",
      "interrogation": [
        {
          "id": 4051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "Fue quien sirvió la copa 'para la garganta' antes de salir a escena.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 4052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Gestora de la agenda, el vino y el equipaje de la diva",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 4053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Rencor por desaires pasados y control absoluto de la copa y del vino de Aurora. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el envenenamiento. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 4054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 4055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 406,
      "caseId": 4,
      "act": 1,
      "name": "Bruno Vidal",
      "age": 50,
      "profession": "Exmarido, empresario",
      "relation": "Exmarido separado; la pensión pasa por el buen juicio del juez",
      "alibi": "Compró su butaca a las 20:05 y salió del teatro a las 20:40 para 'una llamada'.",
      "description": "Tenso, con abogado presente; niega haber entrado al camerino.",
      "suspicionLevel": "MEDIUM",
      "notes": "Su salida a las 20:40 deja un hueco de 20 minutos al que no hay testigo… pero la cámara del pasillo de camerinos no lo muestra dentro.",
      "motive": "Pensión y bienes en juego en el divorcio; interés financiero claro en el fallecimiento.",
      "interrogation": [
        {
          "id": 4061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el envenenamiento?",
          "answer": "Compró su butaca a las 20:05 y salió del teatro a las 20:40 para 'una llamada'.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 4062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Aurora?",
          "answer": "Exmarido separado; la pensión pasa por el buen juicio del juez",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 4063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Pensión y bienes en juego en el divorcio; interés financiero claro en el fallecimiento. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el envenenamiento. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 4064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el entreacto de la gala?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 4065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Mensaje de advertencia anónimo. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 501,
      "caseId": 5,
      "act": 1,
      "name": "Marta Aldana",
      "age": 30,
      "profession": "Gestora, sócia de la hija",
      "relation": "Hija soltera del fallecido; viajaba en el tren con él",
      "alibi": "En su compartimento vecino, puerta cerrada; la azafata la vio dormir hasta las 2:00.",
      "description": "Serena en el interrogatorio, algo fría. Hereda la sociedad del padre.",
      "suspicionLevel": "MEDIUM",
      "notes": "Discutió con su padre por el expediente que llevaba consigo. La entrevista no deja claro el contenido del maletín.",
      "motive": "Hereda el bufete y temía que el expediente hundiera el patrimonio familiar.",
      "interrogation": [
        {
          "id": 5011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "En su compartimento vecino, puerta cerrada; la azafata la vio dormir hasta las 2:00.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 5012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Hija soltera del fallecido; viajaba en el tren con él",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 5013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Hereda el bufete y temía que el expediente hundiera el patrimonio familiar. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 5014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 5015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 502,
      "caseId": 5,
      "act": 1,
      "name": "Sara Núñez",
      "age": 28,
      "profession": "Azafata del coche B",
      "relation": "Personal del tren; única con llaves de los compartimentos",
      "alibi": "Ronda documentada por el pasillo cada 20 minutos; la cámara la confirma cada vez.",
      "description": "Eficiente, cansada; lleva dos años en el turno nocturno y perdió su empleo anterior por un robo inexistente.",
      "suspicionLevel": "LOW",
      "notes": "Tiene llave maestra del vagón, pero no hay filmación de ella acercándose a la puerta 4 fuera de su horario.",
      "motive": "Ingresos justos y un despido injusto en su historial: sin motivos visibles contra Aldana.",
      "interrogation": [
        {
          "id": 5021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Ronda documentada por el pasillo cada 20 minutos; la cámara la confirma cada vez.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 5022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Personal del tren; única con llaves de los compartimentos",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 5023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Ingresos justos y un despido injusto en su historial: sin motivos visibles contra Aldana. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 5024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 5025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 503,
      "caseId": 5,
      "act": 2,
      "name": "León Quiroga",
      "age": 54,
      "profession": "Socio del bufete",
      "relation": "Socio de toda la vida; viajaba 'de casualidad' en el mismo tren",
      "alibi": "Dice que no se enteró hasta la mañana, que viajó en el compartimento 2 porque el suyo 'se lo dieron a un amigo'.",
      "description": "Afable y escurridizo. Su palabra cambia ligeramente entre las dos entrevistas.",
      "suspicionLevel": "HIGH",
      "notes": "La auditoría lo señala como beneficiario de los desvíos que Aldana llevaba denunciando. Y su billete pagado en efectivo no tiene número de asiento.",
      "motive": "Desviaba fondos del bufete y Aldana llevaba la auditoría al fiscal.",
      "interrogation": [
        {
          "id": 5031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Dice que no se enteró hasta la mañana, que viajó en el compartimento 2 porque el suyo 'se lo dieron a un amigo'.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 5032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Socio de toda la vida; viajaba 'de casualidad' en el mismo tren",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 5033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Desviaba fondos del bufete y Aldana llevaba la auditoría al fiscal. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 5034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 5035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Dice que no se enteró hasta la mañana, que via…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 504,
      "caseId": 5,
      "act": 1,
      "name": "Tadeo Blum",
      "age": 47,
      "profession": "Detective privado",
      "relation": "Contratado por la esposa de Aldana para seguirle el rastro",
      "alibi": "Viaja en el compartimento 6 del mismo coche y dice que 'observaba' por contrato.",
      "description": "Lacónico, método. Sus notas registran a cada pasajero del coche B cada hora.",
      "suspicionLevel": "MEDIUM",
      "notes": "El pestillo del compartimento 4 estaba cerrado desde dentro; si vio algo, su cuaderno es la única copia.",
      "motive": "Cobra por observar, no por intervenir: guarda silencio u oculta el dato que no le convenga.",
      "interrogation": [
        {
          "id": 5041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Viaja en el compartimento 6 del mismo coche y dice que 'observaba' por contrato.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 5042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Contratado por la esposa de Aldana para seguirle el rastro",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 5043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cobra por observar, no por intervenir: guarda silencio u oculta el dato que no le convenga. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 5044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 5045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 505,
      "caseId": 5,
      "act": 2,
      "name": "Inés Vergara",
      "age": 38,
      "profession": "Pasajera del compartimento vecino",
      "relation": "Ocupante del compartimento 3, contiguo a la víctima",
      "alibi": "Oye 'una discusión y ruido de cristal' a la 1:30, pero no sale a comprobar.",
      "description": "Ansiosa, palidece al hablar del tren. Esconde un frasco de ansiolíticos bajo el cinturón.",
      "suspicionLevel": "MEDIUM",
      "notes": "Su versión de las horas coincide con el hueco exacto de la cámara ciega: demasiado bien si verdaderamente no miró.",
      "motive": "Se ha saltado su medicación y teme por su propia vida: no un móvil criminal, sino un pánico real.",
      "interrogation": [
        {
          "id": 5051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Oye 'una discusión y ruido de cristal' a la 1:30, pero no sale a comprobar.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 5052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Ocupante del compartimento 3, contiguo a la víctima",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 5053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Se ha saltado su medicación y teme por su propia vida: no un móvil criminal, sino un pánico real. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 5054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 5055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 506,
      "caseId": 5,
      "act": 1,
      "name": "Rubén Salas",
      "age": 61,
      "profession": "Revisor del Alfa-9",
      "relation": "Comprobó los billetes en la parada anterior al suceso",
      "alibi": "Su puesto de revisión está en el coche C; la cámara del pasillo B no registra su presencia tras las 21:50.",
      "description": "Puntual, metódico; sus anotaciones de billetes son impecables durante todo el trayecto.",
      "suspicionLevel": "LOW",
      "notes": "Registró un pasajero sin billete a bordo del coche B en la parada de salida que nunca apareció en la lista de ocupantes.",
      "motive": "Cumplidor; el dato del 'pasajero fantasma' apunta hacia otra dirección: nadie en el tren lo inculpa.",
      "interrogation": [
        {
          "id": 5061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la muerte?",
          "answer": "Su puesto de revisión está en el coche C; la cámara del pasillo B no registra su presencia tras las 21:50.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 5062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía a Cosme Aldana?",
          "answer": "Comprobó los billetes en la parada anterior al suceso",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 5063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cumplidor; el dato del 'pasajero fantasma' apunta hacia otra dirección: nadie en el tren lo inculpa. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la muerte. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 5064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de el trayecto nocturno?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 5065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Carta de ultimátum sin enviar. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 601,
      "caseId": 6,
      "act": 1,
      "name": "Dra. Lidia Anchara",
      "age": 60,
      "profession": "Directora de la biblioteca",
      "relation": "Máxima responsable del archivo histórico",
      "alibi": "Estaba en una conferencia en otra ciudad; su hotel confirma el registro de una sola noche.",
      "description": "Funcionaria impecable en la forma, esquiva en el fondo: el incendio llega 'en el peor momento' para su expediente.",
      "suspicionLevel": "MEDIUM",
      "notes": "Su póliza del edificio subió tras el cierre del depósito central del año pasado. El trámite es correcto, pero el seguro se renovó a una cifra mucho mayor.",
      "motive": "Su expediente de jubilación depende del mantenimiento del archivo; interés en no abrir la auditoría.",
      "interrogation": [
        {
          "id": 6011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Estaba en una conferencia en otra ciudad; su hotel confirma el registro de una sola noche.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 6012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Máxima responsable del archivo histórico",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 6013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Su expediente de jubilación depende del mantenimiento del archivo; interés en no abrir la auditoría. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el incendio. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 6014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 6015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 602,
      "caseId": 6,
      "act": 2,
      "name": "Pablo Tierno",
      "age": 34,
      "profession": "Adjunto del archivo",
      "relation": "Gestor del depósito de legajos y de la llave maestra",
      "alibi": "Dice que cerró el depósito a las 21:30 y 'fue a casa'. Su coche no está en la cámara de la biblioteca esa noche.",
      "description": "Eficiente, reciente aumento de gastos: se compró un reloj de marca el mes pasado según sus compañeros.",
      "suspicionLevel": "HIGH",
      "notes": "La transferencia de 50.000 € de una sociedad inmobiliaria coincide con la fecha del incendio. Y recordó 'de repente' haber olvidado su abrigo en el depósito.",
      "motive": "La inmobiliaria de Nicolás Ferrán le ofreció liquidar sus deudas si 'desaparecían' ciertas escrituras.",
      "interrogation": [
        {
          "id": 6021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Dice que cerró el depósito a las 21:30 y 'fue a casa'. Su coche no está en la cámara de la biblioteca esa noche.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 6022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Gestor del depósito de legajos y de la llave maestra",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 6023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que La inmobiliaria de Nicolás Ferrán le ofreció liquidar sus deudas si 'desaparecían' ciertas escrituras. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 6024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 6025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Dice que cerró el depósito a las 21:30 y 'fue …",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 603,
      "caseId": 6,
      "act": 1,
      "name": "Vera Cobo",
      "age": 43,
      "profession": "Conserje",
      "relation": "Controla el acceso del turno de noche y las llaves auxiliares",
      "alibi": "Su puesto de conserjería la registra entrando y saliendo cada hora del baño.",
      "description": "Cansada, sonámbula diagnosticada hace años; las cámaras la muestran errando por el pasillo dormida.",
      "suspicionLevel": "LOW",
      "notes": "Un bidón vacío de acelerante aparece cerca de su taquilla, pero la marca del bidón es de una flota profesional externa: ella no tiene vehículo propio.",
      "motive": "La investigación forense descartó su implicación: dormía los focos, no los encendió.",
      "interrogation": [
        {
          "id": 6031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Su puesto de conserjería la registra entrando y saliendo cada hora del baño.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 6032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Controla el acceso del turno de noche y las llaves auxiliares",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 6033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que La investigación forense descartó su implicación: dormía los focos, no los encendió. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el incendio. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 6034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 6035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 604,
      "caseId": 6,
      "act": 2,
      "name": "Nicolás Ferrán",
      "age": 48,
      "profession": "Empresario inmobiliario",
      "relation": "Beneficiario de las escrituras 'extraviadas' de tres fincas municipales",
      "alibi": "Estuvo en la inauguración de una sucursal a 40 km; los recibos del evento lo registran hasta las 23:00.",
      "description": "Poderoso, abogado siempre presente. Nadie de su equipo tenía acceso a la biblioteca… según sus afirmaciones.",
      "suspicionLevel": "HIGH",
      "notes": "La sociedad inmobiliaria que transfirió los 50.000 € es de su propiedad. Y su camioneta flota firma justo el contrato de 'limpieza técnica' del edificio.",
      "motive": "Las escrituras amenazaban con devolver tres fincas valiosas al municipio: su imperio depende de que ardan.",
      "interrogation": [
        {
          "id": 6041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Estuvo en la inauguración de una sucursal a 40 km; los recibos del evento lo registran hasta las 23:00.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 6042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Beneficiario de las escrituras 'extraviadas' de tres fincas municipales",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 6043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Las escrituras amenazaban con devolver tres fincas valiosas al municipio: su imperio depende de que ardan. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el incendio. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 6044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 6045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 605,
      "caseId": 6,
      "act": 1,
      "name": "Sira Bell",
      "age": 27,
      "profession": "Restauradora becaria",
      "relation": "Digitalizaba legajos en el depósito la semana del incendio",
      "alibi": "Trabajó en la planta de lectura hasta las 20:00; su ficha de entrada está sellada a esa hora.",
      "description": "Seria, precisa; lleva su propio control de temperatura y humedad de los legajos.",
      "suspicionLevel": "LOW",
      "notes": "Sus copias digitales de las escrituras son la única salvación del expediente: su labor no puede estar en duda.",
      "motive": "Candidata a culpable por acceso… pero salvó una copia de cada escritura antes del fuego.",
      "interrogation": [
        {
          "id": 6051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Trabajó en la planta de lectura hasta las 20:00; su ficha de entrada está sellada a esa hora.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 6052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Digitalizaba legajos en el depósito la semana del incendio",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 6053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Candidata a culpable por acceso… pero salvó una copia de cada escritura antes del fuego. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el incendio. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 6054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 6055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 606,
      "caseId": 6,
      "act": 1,
      "name": "Mateo Cruz",
      "age": 35,
      "profession": "Vigilante nocturno",
      "relation": "Responsable de ronda del turno de noche",
      "alibi": "Su cuadrante registra rondas… pero la cámara del garaje no lo muestra completando la del depósito.",
      "description": "Con sueño acumulado, revienta al describir su ruta exacta: la describe a la perfección, demasiado bien.",
      "suspicionLevel": "MEDIUM",
      "notes": "Su cuadrante está marcado 'completado' a las 2:40, pero el garaje lo registra dormido en el puesto desde las 2:10.",
      "motive": "Descuidó su ronda por agotamiento; su negligencia permitió el fuego, no lo provocó.",
      "interrogation": [
        {
          "id": 6061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el incendio?",
          "answer": "Su cuadrante registra rondas… pero la cámara del garaje no lo muestra completando la del depósito.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 6062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con el archivo?",
          "answer": "Responsable de ronda del turno de noche",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 6063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Descuidó su ronda por agotamiento; su negligencia permitió el fuego, no lo provocó. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el incendio. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 6064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la madrugada del incendio?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 6065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Transferencia inmobiliaria. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 701,
      "caseId": 7,
      "act": 1,
      "name": "Celia Ordóñez",
      "age": 44,
      "profession": "Galerista y benefactora",
      "relation": "Esposa separada de bienes de la víctima",
      "alibi": "Estaba en la sala de pujas; la cámara del ala norte la sitúa sentada en la fila C durante toda la desaparición.",
      "description": "Componada y calculadora. Se enteró del secuestro \"por la prensa\" antes que por la familia.",
      "suspicionLevel": "MEDIUM",
      "notes": "Es la única beneficiaria del seguro contratado sobre el Tycho. Firmó los papeles de renovación el mismo mes del suceso.",
      "motive": "Cobrar el seguro del reloj para saldar sus propias deudas galería.",
      "interrogation": [
        {
          "id": 7011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Estaba en la sala de pujas; la cámara del ala norte la sitúa sentada en la fila C durante toda la desaparición.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 7012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Esposa separada de bienes de la víctima",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 7013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cobrar el seguro del reloj para saldar sus propias deudas galería. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el rapto. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 7014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 7015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 702,
      "caseId": 7,
      "act": 1,
      "name": "Bruno Vidal",
      "age": 38,
      "profession": "Jefe de seguridad de la sala",
      "relation": "Encargado de custodiar el palco y la caja de seguridad",
      "alibi": "Hacía su ronda por el ala oeste entre las 21:30 y las 22:10; el registro de rondas lo confirma.",
      "description": "Exmilitar, puntual y seco. Volvió a revisar el palco dos veces en la misma hora.",
      "suspicionLevel": "MEDIUM",
      "notes": "Su informa menciona \"un bastón que no estaba\" antes de que nadie lo denunciara. Sabía más de lo que declaró.",
      "motive": "Debía favores económicos a Ordóñez y pudo haber tapado el acceso a la escalera de servicio.",
      "interrogation": [
        {
          "id": 7021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Hacía su ronda por el ala oeste entre las 21:30 y las 22:10; el registro de rondas lo confirma.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 7022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Encargado de custodiar el palco y la caja de seguridad",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 7023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Debía favores económicos a Ordóñez y pudo haber tapado el acceso a la escalera de servicio. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el rapto. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 7024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 7025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 703,
      "caseId": 7,
      "act": 2,
      "name": "Ramiro Sol",
      "age": 51,
      "profession": "Tasador jefe de la casa de subastas",
      "relation": "Tasador y amigo de confianza de la víctima",
      "alibi": "Permanecía en su despacho preparando el certificado del lote 9; nadie lo vio salir.",
      "description": "Elegante, calculador. Fue de los primeros en proponer el rezo por Ordóñez \"por si aparecía herido\".",
      "suspicionLevel": "HIGH",
      "notes": "Contrató un préstamo personal usando el Tycho como garantía. La impresora de su despacho es la única del edificio que usa el mismo papel de la nota.",
      "motive": "El reloj \"desaparecido\" le permitía liquidar su préstamo con el dinero del seguro.",
      "interrogation": [
        {
          "id": 7031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Permanecía en su despacho preparando el certificado del lote 9; nadie lo vio salir.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 7032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Tasador y amigo de confianza de la víctima",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 7033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que El reloj \"desaparecido\" le permitía liquidar su préstamo con el dinero del seguro. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 7034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 7035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Permanecía en su despacho preparando el certif…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 704,
      "caseId": 7,
      "act": 3,
      "name": "Vera Luna",
      "age": 47,
      "profession": "Socia rival de la casa de subastas",
      "relation": "Competía con Ordóñez por el lote final",
      "alibi": "Jugaba al bridge en el vestíbulo con tres testigos durante la puja final.",
      "description": "Mordaz y directa. No ocultó que quería el Tycho para su propia sala.",
      "suspicionLevel": "LOW",
      "notes": "Sin relación firme con la llamada ni con la puerta de servicio. El bridge es irrefutable.",
      "motive": "Interés económico por quedarse con la pieza, no por secuestrar al dueño.",
      "interrogation": [
        {
          "id": 7041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Jugaba al bridge en el vestíbulo con tres testigos durante la puja final.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 7042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Competía con Ordóñez por el lote final",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 7043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Interés económico por quedarse con la pieza, no por secuestrar al dueño. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el rapto. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 7044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 7045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 705,
      "caseId": 7,
      "act": 1,
      "name": "Tomás Ordóñez",
      "age": 55,
      "profession": "Administrador del patrimonio familiar",
      "relation": "Hermano mayor de la víctima",
      "alibi": "Fumaba en el patio interior con el camarero de la segunda planta, que lo corrobora.",
      "description": "Reservado y receloso de la gestión de su hermano.",
      "suspicionLevel": "MEDIUM",
      "notes": "Tenían pendiente el reparto de la herencia paterna y discuten por la venta del reloj desde hace un año.",
      "motive": "Rencillas familiares por el patrimonio; sin acceso registrado a la centralita.",
      "interrogation": [
        {
          "id": 7051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Fumaba en el patio interior con el camarero de la segunda planta, que lo corrobora.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 7052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Hermano mayor de la víctima",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 7053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Rencillas familiares por el patrimonio; sin acceso registrado a la centralita. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el rapto. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 7054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 7055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 706,
      "caseId": 7,
      "act": 3,
      "name": "Iria Puente",
      "age": 33,
      "profession": "Periodista de la sección de sociedad",
      "relation": "Cubría la gala del Tycho para la prensa",
      "alibi": "Estaba en la planta uno publicando la crónica; su portátil muestra la hora de subida del artículo.",
      "description": "Curiosa hasta la imprudencia. Fue la primera en \"filtrar\" la foto del palco vacío.",
      "suspicionLevel": "LOW",
      "notes": "Acceso a la sala de prensa, no al despacho de tasación ni a la centralita.",
      "motive": "La exclusiva del secuestro, no el secuestro.",
      "interrogation": [
        {
          "id": 7061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el rapto?",
          "answer": "Estaba en la planta uno publicando la crónica; su portátil muestra la hora de subida del artículo.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 7062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Sergio Ordóñez?",
          "answer": "Cubría la gala del Tycho para la prensa",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 7063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que La exclusiva del secuestro, no el secuestro. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el rapto. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 7064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de la noche de la subasta?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 7065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Nota de rescate fotocopiada. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 801,
      "caseId": 8,
      "act": 1,
      "name": "Ludovico Peers",
      "age": 48,
      "profession": "Ilusionista rival",
      "relation": "Competidor directo en la cartelera del Alcázar",
      "alibi": "Actuaba a la misma hora en el salón Imperial; su camarino está al otro lado del patio de butacas.",
      "description": "Vanidoso hasta la grosería. Amenazó públicamente con \"acariciar el truco\" de Castel.",
      "suspicionLevel": "MEDIUM",
      "notes": "Sin acceso al escenario ni a la taquilla; el jefe de maquinaria confirma que no cruzó el pasillo de utilería.",
      "motive": "Envidia y competencia; el público le cantaba \"farsante\" en la gala anterior.",
      "interrogation": [
        {
          "id": 8011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Actuaba a la misma hora en el salón Imperial; su camarino está al otro lado del patio de butacas.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 8012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Competidor directo en la cartelera del Alcázar",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 8013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Envidia y competencia; el público le cantaba \"farsante\" en la gala anterior. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la desaparición. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 8014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 8015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 802,
      "caseId": 8,
      "act": 2,
      "name": "Dora Kelis",
      "age": 29,
      "profession": "Ayudante de escenario",
      "relation": "Cómplice y asistenta personal del ilusionista desde hace cuatro años",
      "alibi": "Se retiró a su camerino a \"recoger el vestuario\" justo antes del número final.",
      "description": "Rápida, silenciosa, resolutiva. Nadie la vio en la sala de la trampilla.",
      "suspicionLevel": "HIGH",
      "notes": "La cámara del lateral la sitúa junto al canal de utilería durante la réplica. No regresó al teatro a la mañana siguiente.",
      "motive": "Le habían ofrecido cobrar el último porcentaje de la gira si \"hacía desaparecer los problemas\" del mago.",
      "interrogation": [
        {
          "id": 8021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Se retiró a su camerino a \"recoger el vestuario\" justo antes del número final.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 8022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Cómplice y asistenta personal del ilusionista desde hace cuatro años",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 8023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Le habían ofrecido cobrar el último porcentaje de la gira si \"hacía desaparecer los problemas\" del mago. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 8024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 8025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Se retiró a su camerino a \"recoger el vestuari…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 803,
      "caseId": 8,
      "act": 1,
      "name": "Tino Salgado",
      "age": 52,
      "profession": "Jefe de maquinaria",
      "relation": "Controlaba la trampilla y el telón acústico",
      "alibi": "Hizo la revisión del telón a las 21:20; el registro de mantenimiento lo acredita.",
      "description": "Años de teatro a cuestas, amable y detallista.",
      "suspicionLevel": "MEDIUM",
      "notes": "Pudo bloquear la trampilla por orden de seguridad. Nada lo vincula con la taquilla.",
      "motive": "Proteger la integridad del número; no monetario.",
      "interrogation": [
        {
          "id": 8031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Hizo la revisión del telón a las 21:20; el registro de mantenimiento lo acredita.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 8032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Controlaba la trampilla y el telón acústico",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 8033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Proteger la integridad del número; no monetario. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la desaparición. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 8034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 8035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 804,
      "caseId": 8,
      "act": 3,
      "name": "Mae Casal",
      "age": 58,
      "profession": "Productora de la gira",
      "relation": "Gerente comercial del alcázar y del contrato de Castel",
      "alibi": "Cenaba con un mecenas en el vestíbulo durante el número final.",
      "description": "Negociadora de trato difícil, harta de las deudas del ilusionista.",
      "suspicionLevel": "LOW",
      "notes": "Sin acceso al pasillo de maquinaria. El mecenas confirma su cena.",
      "motive": "Cerrar la gira y cobrar su porcentaje, no desaparecer al artista.",
      "interrogation": [
        {
          "id": 8041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Cenaba con un mecenas en el vestíbulo durante el número final.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 8042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Gerente comercial del alcázar y del contrato de Castel",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 8043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cerrar la gira y cobrar su porcentaje, no desaparecer al artista. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la desaparición. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 8044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 8045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 805,
      "caseId": 8,
      "act": 3,
      "name": "Fabián Urco",
      "age": 31,
      "profession": "Tramoyista de utilería",
      "relation": "Operario del pasillo de maquinaria",
      "alibi": "Estaba en el almacén de escenografía entre las 22:40 y las 23:10.",
      "description": "El \"erudito\" de los números; conoce cada polea del teatro.",
      "suspicionLevel": "LOW",
      "notes": "Declaró haber oído el golpe seco de la caja sin abrirla. Su versión no se contradice con los registros.",
      "motive": "Curiósito por los trucos, sin interés en la recaudación.",
      "interrogation": [
        {
          "id": 8051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Estaba en el almacén de escenografía entre las 22:40 y las 23:10.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 8052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Operario del pasillo de maquinaria",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 8053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Curiósito por los trucos, sin interés en la recaudación. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la desaparición. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 8054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 8055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 806,
      "caseId": 8,
      "act": 1,
      "name": "Rosamunda Vilar",
      "age": 66,
      "profession": "Taquillera del teatro",
      "relation": "Cuenta la recaudación diaria al final del turno",
      "alibi": "Cerro el arca a las 23:05 y se marchó con el último tranvía, confirmado por el conductor.",
      "description": "Eficiente y de confianza; lleva veinte años con las llaves de la caja.",
      "suspicionLevel": "MEDIUM",
      "notes": "La caja se vació con la llave que solo custodia la taquillería, pero su salida está acreditada.",
      "motive": "Ninguno aparente; el horario la exculpa.",
      "interrogation": [
        {
          "id": 8061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió la desaparición?",
          "answer": "Cerro el arca a las 23:05 y se marchó con el último tranvía, confirmado por el conductor.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 8062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Aldo Castel?",
          "answer": "Cuenta la recaudación diaria al final del turno",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 8063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Ninguno aparente; el horario la exculpa. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no la desaparición. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 8064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa noche en el teatro?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 8065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del Ojo Biónico. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 901,
      "caseId": 9,
      "act": 1,
      "name": "Renata Pons",
      "age": 53,
      "profession": "Directora general del fondo",
      "relation": "Cabeza visible de Prometeo Capital",
      "alibi": "Presentaba el ejercicio ante el consejo al mediodía; el acta de la reunión la confirma.",
      "description": "Firme defensora del \"informe limpio\". Fue la primera en declarar que un error contable era solo un error.",
      "suspicionLevel": "MEDIUM",
      "notes": "Sin acceso directo al servidor, pero con una ventaja: nadie en la compañía podía auditar sin su permiso.",
      "motive": "Preservar la imagen y el bonus del fondo; no desviar dinero personalmente.",
      "interrogation": [
        {
          "id": 9011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "Presentaba el ejercicio ante el consejo al mediodía; el acta de la reunión la confirma.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 9012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Cabeza visible de Prometeo Capital",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 9013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Preservar la imagen y el bonus del fondo; no desviar dinero personalmente. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el fraude. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 9014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 9015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 902,
      "caseId": 9,
      "act": 2,
      "name": "Hugo Menk",
      "age": 41,
      "profession": "Jefe de auditoría interna",
      "relation": "Encargado de revisar la contabilidad anual",
      "alibi": "Estaba fuera de la ciudad en una certificación a proveedores externos durante el borrado.",
      "description": "Preciso y quisquilloso. Su departamento no señaló el agujero en tres revisiones.",
      "suspicionLevel": "MEDIUM",
      "notes": "Sus informes internos mencionan la \"cuenta 777\" dos veces y la descartan ambas con una firma ajena.",
      "motive": "Proteger su propio equipo de un escándalo; pudo encubrir por incapacidad, no por beneficio.",
      "interrogation": [
        {
          "id": 9021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "Estaba fuera de la ciudad en una certificación a proveedores externos durante el borrado.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 9022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Encargado de revisar la contabilidad anual",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 9023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Proteger su propio equipo de un escándalo; pudo encubrir por incapacidad, no por beneficio. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el fraude. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 9024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 9025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 903,
      "caseId": 9,
      "act": 3,
      "name": "Sira Noval",
      "age": 30,
      "profession": "Administrativa de facturas",
      "relation": "Manejaba el registro de proveedores",
      "alibi": "Firmó la entrada de las facturas del día 14; el registro horario la sitúa en la oficina hasta las 18:00.",
      "description": "Eficiente y apocada; confiesa que \"las facturas de Órbita llegaban ya firmadas\".",
      "suspicionLevel": "LOW",
      "notes": "Su usuario validó dos pagos a Órbita. Declara que se los pasaron con \"prioridad\" verbal del despacho del director.",
      "motive": "Obediencia al puesto, sin beneficio documentado.",
      "interrogation": [
        {
          "id": 9031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "Firmó la entrada de las facturas del día 14; el registro horario la sitúa en la oficina hasta las 18:00.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 9032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Manejaba el registro de proveedores",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 9033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Obediencia al puesto, sin beneficio documentado. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el fraude. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 9034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 9035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 904,
      "caseId": 9,
      "act": 2,
      "name": "Ezequiel Prats",
      "age": 49,
      "profession": "Director financiero",
      "relation": "Custodio del servidor de contabilidad y de la firma bancaria",
      "alibi": "\"Trabajaba en casa\" la noche del borrado; el registro de la cámara de la planta lo desmiente solo en apariencia: la llave entró a las 2:01.",
      "description": "Frío, metódico, con un despacho impecable. Nada en su discurso cede a la primera.",
      "suspicionLevel": "HIGH",
      "notes": "La llave joya del servidor solo existe en dos unidades: la suya y la de sistemas. La central térmica registró su tarjeta a la 1:58.",
      "motive": "Desviar los fondos del fondo a través del proveedor fantasma y evitar que Olga lo publicara.",
      "interrogation": [
        {
          "id": 9041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "\"Trabajaba en casa\" la noche del borrado; el registro de la cámara de la planta lo desmiente solo en apariencia: la llave entró a las 2:01.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 9042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Custodio del servidor de contabilidad y de la firma bancaria",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 9043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Desviar los fondos del fondo a través del proveedor fantasma y evitar que Olga lo publicara. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 9044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 9045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en \"Trabajaba en casa\" la noche del borrado; el r…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 905,
      "caseId": 9,
      "act": 1,
      "name": "Marcelo Ibar",
      "age": 59,
      "profession": "Vigilante de la planta 12",
      "relation": "Controlaba los accesos al despacho financiero",
      "alibi": "Hizo la ronda de las 2:00 y no vio a nadie \"de fuera\" en la planta.",
      "description": "Servicial y leal a la dirección. Su cuaderno anota todas las entregas, incluida la del jueves.",
      "suspicionLevel": "LOW",
      "notes": "No puede exculpar a los titulares de tarjeta; la planta entera es interna.",
      "motive": "Ninguno; su ronda es rutinaria.",
      "interrogation": [
        {
          "id": 9051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "Hizo la ronda de las 2:00 y no vio a nadie \"de fuera\" en la planta.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 9052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Controlaba los accesos al despacho financiero",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 9053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Ninguno; su ronda es rutinaria. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el fraude. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 9054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 9055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 906,
      "caseId": 9,
      "act": 3,
      "name": "Yuri Daza",
      "age": 36,
      "profession": "Jefe de sistemas",
      "relation": "Administraba la red y las llaves de acceso del servidor",
      "alibi": "Estaba en mantenimiento de la sede del país vecino durante todo el jueves y el viernes.",
      "description": "Técnico y reservado. Entiende cada capa de la red.",
      "suspicionLevel": "MEDIUM",
      "notes": "El registro del borrado muestra su cuenta técnica… pero la sesión fue iniciada con la llave joya del CFO, no la personal.",
      "motive": "Ninguno directo; su cuenta técnica pudo ser comprometida.",
      "interrogation": [
        {
          "id": 9061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el fraude?",
          "answer": "Estaba en mantenimiento de la sede del país vecino durante todo el jueves y el viernes.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 9062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Olga Ferrán?",
          "answer": "Administraba la red y las llaves de acceso del servidor",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 9063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Ninguno directo; su cuenta técnica pudo ser comprometida. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el fraude. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 9064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de aquellos días en el fondo?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 9065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Registro del servidor de contabilidad. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 1001,
      "caseId": 10,
      "act": 1,
      "name": "Ciro Balmes",
      "age": 46,
      "profession": "Mecánico jefe de la feria",
      "relation": "Encargado del mantenimiento de la noria",
      "alibi": "Revisaba el eje central a las 7:50 con el permiso de apertura; el parte técnico lo registra.",
      "description": "Ordenado y con veinte años de oficio; nadie lo vio cerca de la cabina 12.",
      "suspicionLevel": "MEDIUM",
      "notes": "Conoce el pasador al milímetro, pero su parte confirma que la tuerca ya estaba floja cuando llegó.",
      "motive": "Proteger su reputación técnica; no hay beneficio económico registrado.",
      "interrogation": [
        {
          "id": 10011,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Revisaba el eje central a las 7:50 con el permiso de apertura; el parte técnico lo registra.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 10012,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Encargado del mantenimiento de la noria",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 10013,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Proteger su reputación técnica; no hay beneficio económico registrado. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el accidente. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 10014,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 10015,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 1002,
      "caseId": 10,
      "act": 2,
      "name": "Lara Ruiz",
      "age": 26,
      "profession": "Sobrina y heredera de Iván",
      "relation": "Única heredera del negocio de la noria",
      "alibi": "Tomaba café en la cafetería del recinto desde las 7:10; lo corrobora la cajera.",
      "description": "Distante con la familia, muy al tanto de los seguros.",
      "suspicionLevel": "MEDIUM",
      "notes": "Heredaba la noria y la mitad de la maquinaria. Sin acceso registrado al taller la madrugada del accidente.",
      "motive": "Herenciar sin dilación; la póliza duplicada acababa de entrar en vigor.",
      "interrogation": [
        {
          "id": 10021,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Tomaba café en la cafetería del recinto desde las 7:10; lo corrobora la cajera.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 10022,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Única heredera del negocio de la noria",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 10023,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Herenciar sin dilación; la póliza duplicada acababa de entrar en vigor. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el accidente. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 10024,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 10025,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 1003,
      "caseId": 10,
      "act": 3,
      "name": "Dina Cardona",
      "age": 39,
      "profession": "Feriante de la tómbola",
      "relation": "Vecina de caseta de la noria",
      "alibi": "Montaba su puesto en la calle Mercado desde las 7:30; la factura del suministro lo prueba.",
      "description": "Locuaz y observadora. Vio \"a la gerente llegar temprano\" y lo repite sin quitarse la sonrisa.",
      "suspicionLevel": "LOW",
      "notes": "Su testimonio es coherente con la cámara de la puerta Este.",
      "motive": "Envidia del negocio del fallecido; sin acceso al taller.",
      "interrogation": [
        {
          "id": 10031,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Montaba su puesto en la calle Mercado desde las 7:30; la factura del suministro lo prueba.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 10032,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Vecina de caseta de la noria",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 10033,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Envidia del negocio del fallecido; sin acceso al taller. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el accidente. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 10034,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 10035,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    },
    {
      "id": 1004,
      "caseId": 10,
      "act": 1,
      "name": "Néstor Vila",
      "age": 57,
      "profession": "Competidor de la feria vecina",
      "relation": "Organizaba una feria rival al otro lado del río",
      "alibi": "Dormía en su furgoneta de la otra orilla; el peaje del puente registra su paso a las 10:00, después del suceso.",
      "description": "Bruto en el trato y con antecedentes por amenazas a feriantes.",
      "suspicionLevel": "MEDIUM",
      "notes": "Sin acceso al recinto antes de las 10:00; la cámara del puente lo exculpa de la madrugada.",
      "motive": "Sabotear a la competencia; mal timing para la mecánica del crimen.",
      "interrogation": [
        {
          "id": 10041,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Dormía en su furgoneta de la otra orilla; el peaje del puente registra su paso a las 10:00, después del suceso.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 10042,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Organizaba una feria rival al otro lado del río",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 10043,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Sabotear a la competencia; mal timing para la mecánica del crimen. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el accidente. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "NERVOUS",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 10044,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 10045,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "TENSE",
          "note": "Se alteró al verse confrontado, maldijo la pregunta… y aun así mantuvo los mismos datos de su alibi palabra por palabra. La versión no se rompió."
        }
      ]
    },
    {
      "id": 1005,
      "caseId": 10,
      "act": 2,
      "name": "Valeria Sete",
      "age": 41,
      "profession": "Socia gerente de la noria",
      "relation": "Socia al 50% del negocio y gestora de los seguros",
      "alibi": "Declara que entró al recinto a las 8:05, después del accidente. La cámara de la puerta Este fija su furgoneta a las 6:40.",
      "description": "Eficiente, ambiciosa y con una política de seguros \"muy ordenada\".",
      "suspicionLevel": "HIGH",
      "notes": "Contrató el doble de cobertura de la noria el mismo mes. La llave del taller de mantenimiento solo la custodia ella y Ciro.",
      "motive": "Cobrar la póliza duplicada y heredar la parte de Iván en la sociedad.",
      "interrogation": [
        {
          "id": 10051,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Declara que entró al recinto a las 8:05, después del accidente. La cámara de la puerta Este fija su furgoneta a las 6:40.",
          "reaction": "TENSE",
          "note": "Recitó el guion de su alibi en orden perfecto, con los dedos tamborileando sobre la mesa. Demasiado ensayado para alguien que «no sabía nada»."
        },
        {
          "id": 10052,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Socia al 50% del negocio y gestora de los seguros",
          "reaction": "CALM",
          "note": "Habla de la víctima en pasado con una frialdad que no encaja con su relato de «cercanía»."
        },
        {
          "id": 10053,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Cobrar la póliza duplicada y heredar la parte de Iván en la sociedad. ¿Qué respondes?",
          "answer": "«Eso es una mentira calculada. Quien me acusa debería explicar por qué la escena no tiene puertas forzadas reales.» — responde demasiado rápido, sin dejar pausas para interrumpir.",
          "reaction": "EVASIVE",
          "note": "Cambió de tema al instante y al insistirle se pasó la lengua por los labios y desvió la mirada hacia la puerta. Fue la única pregunta que intentó cerrar sola."
        },
        {
          "id": 10054,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«No oculto nada, y este interrogatorio me está hartando.» — cruza los brazos y la voz se le seca a mitad de frase.",
          "reaction": "NERVOUS",
          "note": "Respiración audible, pulso visible en la mandíbula. Es la pregunta donde pierde por completo la compostura."
        },
        {
          "id": 10055,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«No sé de qué habla. Yo no estaba allí. Y quien le dijo eso…» — se detiene, traga saliva y reconstruye la frase desde cero. Antes lo había dicho de carrerilla; ahora titubea hasta en los nombres: primero situó su alibi en Declara que entró al recinto a las 8:05, despu…",
          "reaction": "CONTRADICTS",
          "note": "CONTRADICCIÓN: recién había fijado su alibi para esa misma franja y ahora sostiene que «no estaba allí». Los dedos le tiemblan y repite la frase dos veces, cambiando los detalles entre cada repetición."
        }
      ]
    },
    {
      "id": 1006,
      "caseId": 10,
      "act": 3,
      "name": "Ugo Zamora",
      "age": 34,
      "profession": "Electricista del recinto",
      "relation": "Instaló la nueva iluminación de la noria",
      "alibi": "Trabajaba en el cuadro eléctrico de la entrada a las 7:45; el parte de corriente lo confirma.",
      "description": "Habilidoso y desmemoriado; \"no toca los pasadores, solo los cables\".",
      "suspicionLevel": "LOW",
      "notes": "Su herramental no incluye llaves de la medida de la tuerca del pasador.",
      "motive": "Ninguno; su jornada empezó coincidiendo con la apertura.",
      "interrogation": [
        {
          "id": 10061,
          "type": "ALIBI",
          "act": 1,
          "question": "¿Dónde estabas cuando ocurrió el accidente?",
          "answer": "Trabajaba en el cuadro eléctrico de la entrada a las 7:45; el parte de corriente lo confirma.",
          "reaction": "CALM",
          "note": "Respondió sin titubear; su versión coincide con los registros disponibles."
        },
        {
          "id": 10062,
          "type": "RELACION",
          "act": 1,
          "question": "¿Qué relación te unía con Iván Curiel?",
          "answer": "Instaló la nueva iluminación de la noria",
          "reaction": "CALM",
          "note": "Tono neutro y coherente con su rol; esta es la parte que relata con más soltura."
        },
        {
          "id": 10063,
          "type": "MOTIVO",
          "act": 1,
          "question": "Hay quien dice que Ninguno; su jornada empezó coincidiendo con la apertura. ¿Qué respondes?",
          "answer": "«Eso es mi vida privada, no el accidente. Hablemos de los hechos, no de rumores.» — se queja del rumbo, pero se mantiene firme en los datos.",
          "reaction": "TENSE",
          "note": "Se turbó al mencionar su asunto personal, pero su defensa gira siempre sobre los hechos y no contradice ninguna franja horaria."
        },
        {
          "id": 10064,
          "type": "GENERAL",
          "act": 1,
          "question": "¿Hay algo que ocultes acerca de esa mañana en la feria?",
          "answer": "«Tengo mi vida privada, como cualquiera. Pero de la noche en cuestión ya lo he dicho todo.»",
          "reaction": "TENSE",
          "note": "Se incomoda con el ruido personal, pero nunca esquiva un dato concreto; su narración no se desmorona."
        },
        {
          "id": 10065,
          "type": "PRUEBA",
          "act": 3,
          "question": "Mi equipo encontró Tuerca del pasador del eje. ¿Todavía lo niegas todo?",
          "answer": "«Revisa todo lo que quieras: tengo los recibos, los testigos y la hora exacta. No tengo nada que esconder sobre eso.»",
          "reaction": "CALM",
          "note": "Escuchó la confrontación casi sin pestañear y mantuvo su versión íntegra. No presentó marcas de engaño."
        }
      ]
    }
  ],
  "evidence": [
    {
      "id": 201,
      "caseId": 1,
      "type": "document",
      "act": 1,
      "title": "Programa de la inauguración",
      "location": "Vestíbulo del ala este",
      "summary": "El programa impreso de la muestra privada. Nada inusual a simple vista.",
      "analysisNote": "Rutinario. Sin valor para la investigación.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 202,
      "caseId": 1,
      "type": "document",
      "act": 1,
      "title": "Recibo del taxi de Elena",
      "location": "Registro del portero",
      "summary": "Un recibo con hora 22:12, taxi #4418, que coincide con el recuerdo del portero.",
      "analysisNote": "Cronología confirmada: Elena Frías estaba al menos a 4 km en la hora estimada de la muerte.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 203,
      "caseId": 1,
      "type": "document",
      "act": 1,
      "title": "Parte de ronda de Teo",
      "location": "Oficina de seguridad",
      "summary": "Ronda marcada: 22:40, 22:55, 23:10. Todos los puntos electrónicos en hora.",
      "analysisNote": "Coincide con las cámaras. Teo estaba en su ruta, no en el ala este.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 204,
      "caseId": 1,
      "type": "document",
      "act": 2,
      "title": "Factura falsa nº 117",
      "location": "Bandeja de contabilidad",
      "summary": "Una factura por 'restauración histórica' sin proveedor real. El análisis de firmas apunta a un tercero externo.",
      "analysisNote": "Pistola falsa: la redactó alguien externo al personal. No conduce a la escena.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 205,
      "caseId": 1,
      "type": "testimony",
      "act": 1,
      "title": "Amenaza pública de Elena",
      "location": "Declaraciones de testigos",
      "summary": "Tres testigos recuerdan el grito de Elena, 'Te cierro el local, Marlowe', tres noches antes.",
      "analysisNote": "Ruido de móvil fuerte, pero la amenaza fue ante todo el mundo y jamás la ejecutó.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 206,
      "caseId": 1,
      "type": "digital",
      "act": 3,
      "title": "Grabación de la entrada trasera",
      "location": "Archivo de seguridad, cámara SE-4",
      "summary": "23:48: una figura con el abrigo de Marco Vélez entra por la puerta trasera y cruza directo hacia el pasillo de servicio.",
      "analysisNote": "Contradice su coartada. Aseguraba estar en el muelle de carga, que está en el extremo opuesto del edificio.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 207,
      "caseId": 1,
      "type": "digital",
      "act": 2,
      "title": "Mensaje final de Marlowe",
      "location": "Extracción forense del teléfono",
      "summary": "23:00: 'Los números no cuadran, Marco. Encontré los cuadros desaparecidos. Mi despacho. Ahora.'",
      "analysisNote": "Enviado minutos antes de la muerte, dirigido a Marco Vélez. Establece el móvil y la confrontación.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 208,
      "caseId": 1,
      "type": "trace",
      "act": 1,
      "title": "Ventana entreabierta del pasillo",
      "location": "Pasillo de servicio",
      "summary": "Una ventana de mantenimiento abierta hacia el callejón. El polvo del alféizar está intacto.",
      "analysisNote": "Montada. Nadie entró ni salió por ella: sin huellas, sin polvo removido.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 209,
      "caseId": 1,
      "type": "trace",
      "act": 3,
      "title": "Fragmentos del jarrón roto",
      "location": "Informe del laboratorio criminal",
      "summary": "El jarrón chino roto, 'prueba del forcejeo', se quebró desde dentro: hay esquirlas bajo la estantería, no junto a la puerta.",
      "analysisNote": "El allanamiento lo montó alguien que ya estaba dentro. La cerradura forzada y la ventana eran teatro.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 301,
      "caseId": 2,
      "type": "document",
      "act": 1,
      "title": "Manual de la bóveda cifrada",
      "location": "Biblioteca de I+D",
      "summary": "Manual de servicio que documenta la ventana de reinicio, cuando la validación de cifrado queda anulada 90 segundos.",
      "analysisNote": "Solo dos personas del edificio conocían de memoria la ventana de reinicio. Ambas ya fueron entrevistadas.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 302,
      "caseId": 2,
      "type": "document",
      "act": 1,
      "title": "Cuaderno de contraseñas del becario",
      "location": "Puesto de Mateo Paz",
      "summary": "Una lista sin cifrar de contraseñas de servidor, incluida la de la consola de la bóveda.",
      "analysisNote": "Descuidado, pero la planta de la bóveda jamás aceptó una credencial que no fuera de los tres altos cargos o del administrador.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 303,
      "caseId": 2,
      "type": "testimony",
      "act": 2,
      "title": "Oferta de la empresa rival",
      "location": "Expediente de RR.HH.",
      "summary": "Una empresa rival ofreció a la Dra. Senna un puesto fundador hace seis meses. Lo rechazó por escrito.",
      "analysisNote": "Móvil tentador, pero los torniquetes biométricos prueban que salió a las 21:40 y nunca volvió a entrar.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 304,
      "caseId": 2,
      "type": "physical",
      "act": 2,
      "title": "Maletín de equipo vacío",
      "location": "Hueco de servicio, nivel 2",
      "summary": "Maletín acolchado del tamaño exacto de la caja del APEX-9, limpio de huellas.",
      "analysisNote": "La termografía del cierre coincide con una figura que se dirige al hueco de servicio, no al vestíbulo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 305,
      "caseId": 2,
      "type": "digital",
      "act": 2,
      "title": "Sesión VPN doméstica",
      "location": "Registro del router de Royce",
      "summary": "Sesión VPN desde la IP de casa de Elías Royce de 22:44 a 0:02. La sesión estuvo inactiva todo el tiempo: sin tráfico.",
      "analysisNote": "Eine 'coartada' ociosa: cualquiera puede abrir una VPN y abandonarla. No prueba nada por sí sola.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 306,
      "caseId": 2,
      "type": "digital",
      "act": 3,
      "title": "Anomalía 'pass-back' de credencial",
      "location": "Sistema de control de accesos",
      "summary": "La credencial de Royce entra a la planta de la bóveda a las 23:12 y, de forma imposible, vuelve a marcar tres minutos después como 'entrada fantasma'.",
      "analysisNote": "Pass-back clásico: una credencial fue clonada. El intruso entró mientras el clon 'salía' por relé.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 307,
      "caseId": 2,
      "type": "digital",
      "act": 3,
      "title": "Consola con clave de administrador",
      "location": "Registros de la consola de la bóveda",
      "summary": "23:15: una sesión de consola de administrador con la clave que solo se emite al puesto de ingeniería de seguridad.",
      "analysisNote": "La clave 'pass-back' también: se retiró bajo un parte distinto y se usó desde un host con identidad de administrador. Solo Elías Royce posee esa identidad.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 308,
      "caseId": 2,
      "type": "physical",
      "act": 3,
      "title": "Relé del aparcamiento",
      "location": "Vestíbulo visitantes, plaza P-12",
      "summary": "Un dispositivo repetidor bajo un coche que respondió a la notificación de segundo factor antes de que la red la cortara.",
      "analysisNote": "Quien montó el segundo factor dejó un receptor físico. Combina con el calzado térmico del termográfico.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 309,
      "caseId": 2,
      "type": "trace",
      "act": 3,
      "title": "Botas de suela térmica",
      "location": "Termográfica del corredor de la bóveda",
      "summary": "El termográfico muestra a una figura cruzando a las 23:14 con botas de suela térmica retráctiles, un modelo vendido en una tienda local… compradas a nombre de Royce el mes pasado.",
      "analysisNote": "Coincidencia positiva con la compra reciente de Elías Royce. El arquetipo de la figura coincide con su complexión.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 401,
      "caseId": 3,
      "type": "digital",
      "act": 1,
      "title": "Cámara del vestíbulo",
      "location": "Seguridad del Hotel 404",
      "summary": "Cobertura continua de la recepción. Odile March permanece tras el mostrador toda la noche.",
      "analysisNote": "La recepcionista de noche queda descartada por las imágenes.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 402,
      "caseId": 3,
      "type": "physical",
      "act": 2,
      "title": "Segunda copa de champán",
      "location": "Fregadero de la habitación 21, fuera de la bandeja",
      "summary": "Una segunda copa, fría, fuera de la bandeja estándar de la habitación. Esta tarifa solo incluye una copa.",
      "analysisNote": "Alguien más estuvo en la habitación. El contenido de la copa coincide con la bebida de la víctima: es la copa del crimen.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 403,
      "caseId": 3,
      "type": "testimony",
      "act": 1,
      "title": "Entrada de Calloway en el registro",
      "location": "Diario de recepción",
      "summary": "'La Sra. Calloway' se registró ayer… pero no hay entrada, escaneo de DNI ni fianza.",
      "analysisNote": "Nunca hizo check-in real. Su habitación se pagó por un 'error' en efectivo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 404,
      "caseId": 3,
      "type": "physical",
      "act": 3,
      "title": "Cartera vacía en el armario",
      "location": "Habitación de Calloway, cajón del armario",
      "summary": "La cartera de Ashworth —efectivo y tarjetas fuera— escondida bajo una manta de repuesto en su armario.",
      "analysisNote": "Conexión directa entre la víctima y la huésped contigua.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 405,
      "caseId": 3,
      "type": "digital",
      "act": 2,
      "title": "Desactivación de la tarjeta de puerta",
      "location": "Sistema de llaves del hotel",
      "summary": "La tarjeta de la 21 se desactivó a las 6:03, después de que el gerente ya entrara con la maestra.",
      "analysisNote": "Solo el personal puede desactivar tarjetas. Odile está en recepción y Finn tiene la maestra, ambos cubiertos por cámaras.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 406,
      "caseId": 3,
      "type": "digital",
      "act": 1,
      "title": "Recorrido de la carretilla del hielo",
      "location": "Cámara del pasillo de la planta 2",
      "summary": "La carretilla de Finn Bauer aparece en cada parada. Entra una sola vez en la 21, a las 23:30, y sale un minuto después.",
      "analysisNote": "La cronología del botones es perfecta y confirmada por cámara. Descartado.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 407,
      "caseId": 3,
      "type": "trace",
      "act": 3,
      "title": "Huella en la botella",
      "location": "Botella del minibar de la 21",
      "summary": "Una huella reciente y única en la botella de champán: coincide con uno de los alias conocidos de 'la Sra. Calloway' en el patrón estatal.",
      "analysisNote": "Definitiva: estuvo manipulando la botella dentro de la habitación.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 408,
      "caseId": 3,
      "type": "trace",
      "act": 1,
      "title": "Polvo de la ventana del patio",
      "location": "Ventana de la habitación 21",
      "summary": "Ventana abierta al patio de incendios con polvo intacto en los rieles y sin marcas de fricción.",
      "analysisNote": "Nadie entró ni salió por la ventana. Solo pudo usarse como cortina de humo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 409,
      "caseId": 3,
      "type": "testimony",
      "act": 1,
      "title": "Declaración de Finn",
      "location": "Interrogatorio",
      "summary": "Confirmó la entrega del hielo y recordó que la puerta de la 21 'no estaba cerrada del todo' cuando pasó la primera vez, a las 23:20.",
      "analysisNote": "Dato destacable: la puerta no estaba sellada en ese momento. La llave de la mesita llegó después.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 501,
      "caseId": 4,
      "type": "testimony",
      "act": 1,
      "title": "Informe de toxicología",
      "location": "Forense",
      "summary": "Digitalina en el vino de la copa y en los pétalos de las rosas del camerino. Se trata de un envenenamiento deliberado.",
      "analysisNote": "La dosis es demasiado precisa para ser accidental: alguien conocía la afección cardiaca de Aurora.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 502,
      "caseId": 4,
      "type": "document",
      "act": 1,
      "title": "Programa de gala",
      "location": "Cartel del teatro",
      "summary": "El programa anuncia a Aurora Valente como estrella solista y ningún suplente en el reparto visible.",
      "analysisNote": "Nada relevante. Todos los implicados estaban mencionados de alguna forma en la obra.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 503,
      "caseId": 4,
      "type": "digital",
      "act": 2,
      "title": "Mensaje de advertencia anónimo",
      "location": "Teléfono del ayudante de escena",
      "summary": "'Quien no cante mañana, salva la voz.' Recibido la noche anterior a la función, remitente enmascarado.",
      "analysisNote": "La dirección del texto y su timbre apuntan a alguien del entorno teatral, no a un extraño.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 504,
      "caseId": 4,
      "type": "trace",
      "act": 2,
      "title": "Ampolleta de digitalina",
      "location": "En el dobladillo del vestuario del reparto",
      "summary": "Un vial de vidrio con residuos de digitalina, la misma sustancia del vino. Encontrado en el bajo de un vestido.",
      "analysisNote": "Confirma dónde se preparó el veneno, pero no quién lo dejó: la cadena definitiva la cierra el ramo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 505,
      "caseId": 4,
      "type": "digital",
      "act": 1,
      "title": "Cámara del pasillo de camerinos",
      "location": "Teatro Círculo, planta de camerinos",
      "summary": "Registro de toda la noche: el ramo institucional llega a las 21:40 y un segundo ramo 'sustituto' a las 21:55.",
      "analysisNote": "Dos ramos y dos mensajeros distintos en el mismo pasillo: el ramo final no está bajo control del teatro.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 506,
      "caseId": 4,
      "type": "digital",
      "act": 3,
      "title": "Cambio de flores filmado",
      "location": "Cámara del pasillo de camerinos",
      "summary": "A las 21:55, una figura con gorro cambia el ramo institucional por otro más pequeño mientras la cámara sufre un fugaz corte.",
      "analysisNote": "La figura desaparece en el segundo exacto del corte de imagen. El corte técnico es altamente sospechoso.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 507,
      "caseId": 4,
      "type": "testimony",
      "act": 1,
      "title": "Doble afección de Aurora",
      "location": "Historial clínico aportado por su asistente",
      "summary": "Aurora padecía una arritmia benigna conocida por muy pocas personas del equipo.",
      "analysisNote": "Solo el entorno íntimo conocía su medicación y el riesgo: el círculo de sospechosos se cierra aquí.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 508,
      "caseId": 4,
      "type": "physical",
      "act": 3,
      "title": "Ramo sustituto y pétalos",
      "location": "Camerino de Aurora, sobre la mesa",
      "summary": "Los pétalos de las rosas están impregnados de la misma digitalina. La impregnación es previa a la entrada en camerino.",
      "analysisNote": "El veneno llegó con las flores: quien cambió el ramo es quien envenenó la escena.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 509,
      "caseId": 4,
      "type": "testimony",
      "act": 1,
      "title": "Declaración del maquillador",
      "location": "Comisaría",
      "summary": "Aurora le confesó hace un mes que 'el teatro quiere renovarme el papel' y que 'hay quien espera el puesto'.",
      "analysisNote": "Contexto: la presión por el reparto era conocida entre bambalinas.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 601,
      "caseId": 5,
      "type": "digital",
      "act": 1,
      "title": "Cámara del pasillo del coche B",
      "location": "Tren Alfa-9",
      "summary": "Registro continuo: la cámara está desplazada unos grados exactamente en el tramo frente a los compartimentos 3 y 4.",
      "analysisNote": "El desajuste es deliberado y coincide con el acceso de una pértiga desde el aseo contiguo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 602,
      "caseId": 5,
      "type": "document",
      "act": 2,
      "title": "Carta de ultimátum sin enviar",
      "location": "Maletín de Aldana",
      "summary": "Borrón de una carta: 'Si no devuelves lo desviado, la auditoría va al fiscal'.",
      "analysisNote": "Dirigida a alguien del bufete. El tono y el destinatario son la clave del conflicto.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 603,
      "caseId": 5,
      "type": "document",
      "act": 2,
      "title": "Copia de la auditoría",
      "location": "Maletín de Aldana, carpeta separada",
      "summary": "La única copia del informe que reunía las irregularidades del bufete. Faltan dos folios finales.",
      "analysisNote": "Dos folios eliminados: el autor conocía el informe y protegió su propia sección.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 604,
      "caseId": 5,
      "type": "digital",
      "act": 1,
      "title": "Concesión del azafata",
      "location": "Registro de servicio del tren",
      "summary": "La azafata registra que la puerta 4 'debía de estar sin pestillo' a las 12:40, minutos antes del hallazgo.",
      "analysisNote": "Detalle que contradice la versión de cerradura impecable: la puerta fue abierta desde dentro.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 605,
      "caseId": 5,
      "type": "physical",
      "act": 3,
      "title": "Lámina de la puerta",
      "location": "Bisagra interior del compartimento 4",
      "summary": "Huella parcial en la lámina de refuerzo de la cerradura, de un guante fino y un óxido característico.",
      "analysisNote": "Coincide con el óxido del óxido metálico que se vende en las ferreterías junto a la estación.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 606,
      "caseId": 5,
      "type": "digital",
      "act": 2,
      "title": "Billete sin asiento",
      "location": "Registro del revisor",
      "summary": "Un billete pagado en efectivo sin número de asiento en el coche B, correspondiente a la parada anterior al suceso.",
      "analysisNote": "El portador no subió jamás al tren desde esa parada: un pasajero 'fantasma' viajó o fingió viajar.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 607,
      "caseId": 5,
      "type": "physical",
      "act": 3,
      "title": "Pértiga del aseo",
      "location": "Aseo contiguo del coche B",
      "summary": "Una pértiga de limpieza con marcas de fricción frescas y una fibra del pasillo.",
      "analysisNote": "El instrumento que movió la cámara. La fibra coincide con la alfombra del pasillo del coche B.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 608,
      "caseId": 5,
      "type": "trace",
      "act": 1,
      "title": "Fibra del anorak",
      "location": "Cierre del maletín de Aldana",
      "summary": "Una fibra de poliéster azul en el cierre del maletín que no pertenece a ningún pasajero del coche B… según el revisor.",
      "analysisNote": "Hasta que no se identifique la fibra, apenas orienta: quizá alguien registró el maletín.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 609,
      "caseId": 5,
      "type": "testimony",
      "act": 1,
      "title": "Declaración de Marta",
      "location": "Interrogatorio",
      "summary": "'Papá insistía en que había quien robaba en el despacho. Llevaba el informe como una bala.'",
      "analysisNote": "Confirma el conflicto de fondo, no la autoría. La hija se muestra leal pero esquiva.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 701,
      "caseId": 6,
      "type": "document",
      "act": 1,
      "title": "Informe de bomberos",
      "location": "Parque municipal 3",
      "summary": "Tres focos simultáneos en el depósito de legajos con acelerante de combustión química profesional.",
      "analysisNote": "Un incendio provocado con método: delimitado, rápido y con hora elegida.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 702,
      "caseId": 6,
      "type": "digital",
      "act": 1,
      "title": "Cámara del garaje",
      "location": "Biblioteca, planta sótano",
      "summary": "Registro de las 2:10: el vigilante dormido en su puesto, sin ronda hasta las camillas.",
      "analysisNote": "Negligencia del vigilante, no autoría: no salió del garaje en toda la noche.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 703,
      "caseId": 6,
      "type": "digital",
      "act": 2,
      "title": "Transferencia inmobiliaria",
      "location": "Ficheros contables de la biblioteca",
      "summary": "Transferencia de 50.000 € desde la sociedad de Nicolás Ferrán a una cuenta personal de reciente creación, apenas dos días antes del incendio.",
      "analysisNote": "Ningún contrato municipal justifica esa cifra. Es el puente económico entre la inmobiliaria y el archivo.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 704,
      "caseId": 6,
      "type": "physical",
      "act": 1,
      "title": "Bidón del acelerante",
      "location": "Cerca de la taquilla de conserjería",
      "summary": "Un bidón vacío con la marca del acelerante. Pertenece a una flota profesional externa.",
      "analysisNote": "No pertenece al inventario de la biblioteca: entró desde fuera, la noche del fuego.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 705,
      "caseId": 6,
      "type": "trace",
      "act": 3,
      "title": "Restos de acelerante en suelas",
      "location": "Suelas de los zapatos técnicos del depósito",
      "summary": "El calzado técnico de uso interno conserva restos del acelerante y partículas de la moqueta del depósito.",
      "analysisNote": "El portador estuvo dentro del depósito con el acelerante: es el mismo que abrió con la llave maestra.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 706,
      "caseId": 6,
      "type": "digital",
      "act": 3,
      "title": "Cámara de la calle",
      "location": "Frente a la biblioteca",
      "summary": "A las 2:40, una furgoneta con el logotipo de la sociedad de Ferrán pasa frente a la entrada y frena unos segundos.",
      "analysisNote": "Relación visual entre la inmobiliaria y la escena el mismo día del incendio.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 707,
      "caseId": 6,
      "type": "document",
      "act": 2,
      "title": "Registro de accesos al depósito",
      "location": "Registro de llaves de la biblioteca",
      "summary": "La llave maestra se retiró fuera de horario y se devolvió 'sin registro' 18 horas después.",
      "analysisNote": "Confirma el acceso, no la autoría: la suela con acelerante y la transferencia cierran el caso.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 708,
      "caseId": 6,
      "type": "testimony",
      "act": 1,
      "title": "Declaración de la becaria",
      "location": "Comisaría",
      "summary": "Sira Bell entregó copias digitales de las escrituras 'por previsión' la tarde anterior.",
      "analysisNote": "La copia digital salva el expediente: el fuego pudo ser una derrota estratégica.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 709,
      "caseId": 6,
      "type": "physical",
      "act": 1,
      "title": "Llave del depósito extraviada",
      "location": "Fondo del archivador de la directora",
      "summary": "La llave de respaldo del depósito, que según el inventario estaba 'en el cajón de la directora', aparece duplicada en el archivo de llaves.",
      "analysisNote": "Una copia no registrada: aumenta el círculo de quién pudo entrar, pero no identifica a su portador.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 801,
      "caseId": 7,
      "type": "document",
      "act": 1,
      "title": "Programa de la subasta benéfica",
      "location": "Taquilla de entrada",
      "summary": "Relación de lotes, palcos y horarios de la gala.",
      "analysisNote": "El palco 12 aparece con un acompañante menos del reservado.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 802,
      "caseId": 7,
      "type": "testimony",
      "act": 1,
      "title": "Parte de la seguridad del palco",
      "location": "Recepción de vigilancia",
      "summary": "Registro de rondas y aperturas de la noche.",
      "analysisNote": "La escalera de servicio del palco 12 se abrió dos veces por el mismo código: el del tasador.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 803,
      "caseId": 7,
      "type": "document",
      "act": 2,
      "title": "Nota de rescate fotocopiada",
      "location": "Bandeja de pujas del palco 12",
      "summary": "Reclamo de dos millones con tipografía de impresora de oficina.",
      "analysisNote": "El papel coincide con el lote de la impresora del despacho de tasación; las huellas parciales apuntan a Ramiro Sol.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 804,
      "caseId": 7,
      "type": "trace",
      "act": 1,
      "title": "Bastón olvidado en el palco",
      "location": "Palco 12",
      "summary": "Un bastón de ébano que la jefa de seguridad asegura \"no estar allí\" en su primera ronda.",
      "analysisNote": "Prueba que la zona fue revisada antes de que se declarara la desaparición. No determina al autor.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 805,
      "caseId": 7,
      "type": "digital",
      "act": 2,
      "title": "Registro de la llamada del rescate",
      "location": "Centralita del edificio",
      "summary": "La llamada exigiendo el rescate duró 11 segundos.",
      "analysisNote": "El patch panel sitúa la llamada en la extensión 14: el despacho del tasador Ramiro Sol.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 806,
      "caseId": 7,
      "type": "digital",
      "act": 3,
      "title": "Cámara del sótano",
      "location": "Servidor de videovigilancia",
      "summary": "Grabación de la puerta de servicio minutos antes del \"rescate\".",
      "analysisNote": "Se ve a Ordóñez y a Ramiro Sol bajando juntos y repartiéndose un sobre de efectivo.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 807,
      "caseId": 7,
      "type": "trace",
      "act": 1,
      "title": "Cadena rota de la escalera de servicio",
      "location": "Escalera interior, planta baja",
      "summary": "Un eslabón roto en el pasamanos junto a la salida de emergencia.",
      "analysisNote": "El óxido de la fractura indica que llevaba semanas así; no es una entrada forzada esa noche.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 808,
      "caseId": 7,
      "type": "document",
      "act": 2,
      "title": "Póliza del reloj Tycho",
      "location": "Archivo de seguros",
      "summary": "Contrato de seguro de la obra de arte.",
      "analysisNote": "La cobertura del Tycho se cuadruplicó un mes antes del suceso. Beneficiaria: Celia y la colección en garantía.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 809,
      "caseId": 7,
      "type": "testimony",
      "act": 3,
      "title": "Declaración del camarero del patio",
      "location": "Planta de restauración",
      "summary": "El camarero vió a Ordóñez bajar solo por la escalera interior.",
      "analysisNote": "Coincide con la hora de la llamada del rescate y con la cámara del sótano.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 901,
      "caseId": 8,
      "type": "document",
      "act": 1,
      "title": "Programa de la gala",
      "location": "Vestíbulo del teatro",
      "summary": "Cartel de la réplica final de la caja de escape.",
      "analysisNote": "La taquilla de la gala alcanzó casi su aforo; la recaudación estaba prevista para esa noche.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 902,
      "caseId": 8,
      "type": "trace",
      "act": 1,
      "title": "Trampilla revisada (cerrojo frío)",
      "location": "Foso del escenario",
      "summary": "La trampilla del número no fue accionada.",
      "analysisNote": "El cerrojo estaba frío al tacto y sin marcas de uso; la caja cayó vacía. El truco no usó el plano de foso.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 903,
      "caseId": 8,
      "type": "testimony",
      "act": 1,
      "title": "Parte del jefe de maquinaria",
      "location": "Control técnico",
      "summary": "Registro de la revisión del telón y del pasillo de utilería.",
      "analysisNote": "Confirma que Dora Kelis cruzó el pasillo 14 minutos antes del desenlace.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 904,
      "caseId": 8,
      "type": "digital",
      "act": 2,
      "title": "Registro del Ojo Biónico",
      "location": "Lateral de escenario",
      "summary": "La cámara que graba el pasillo de maquinaria durante el número.",
      "analysisNote": "Dos siluetas salen por el canal de utilería en plena réplica: una con el frac de la gala y otra con el mono de maquinista.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 905,
      "caseId": 8,
      "type": "document",
      "act": 2,
      "title": "Cheque sin cobrar de la última gira",
      "location": "Área de administración",
      "summary": "Una orden de pago del patrocinador que nadie ha cobrado.",
      "analysisNote": "Castel acumulaba dos giras sin cobrar; el cheque estaba en la mesa de la productora.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 906,
      "caseId": 8,
      "type": "document",
      "act": 3,
      "title": "Billetes de ferry a nombre de Kelis",
      "location": "Compañía de ferris del sur, embarque",
      "summary": "Reserva de dos plazas en el primer ferry de la madrugada siguiente.",
      "analysisNote": "Los billetes están a nombre de Dora Kelis y \"A. Castel\". Horario coincidente con el cierre de taquilla.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 907,
      "caseId": 8,
      "type": "trace",
      "act": 3,
      "title": "Bolsa de viaje del camerino",
      "location": "Camerino de Castel",
      "summary": "La bolsa utilitaria con la que se escapó el vestuario de repuesto.",
      "analysisNote": "Faltan el traje de gala y la bolsa; el inventario del guardarropa confirma la sustracción.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 908,
      "caseId": 8,
      "type": "document",
      "act": 3,
      "title": "Inventario del guardarropa",
      "location": "Departamento de vestuario",
      "summary": "Lista de efectos personales retirados del teatro esa noche.",
      "analysisNote": "Dos trajes y el vestuario de la ayudante fueron retirados con \"permiso verbal de la dirección\" minutos antes del número final.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 909,
      "caseId": 8,
      "type": "testimony",
      "act": 1,
      "title": "Declaración de la taquillera",
      "location": "Oficina de administración",
      "summary": "Rosamunda Vilar cargó el arca a las 23:05.",
      "analysisNote": "La caja estaba vacía, pero la cerradura no presentaba señales de forzado: se usó su llave o una copia.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1001,
      "caseId": 9,
      "type": "document",
      "act": 1,
      "title": "Informe anual del fondo",
      "location": "Comisaría? No. Sede Prometeo, archivo",
      "summary": "Resultado del ejercicio con \"salvedades: ninguna\".",
      "analysisNote": "La nota manuscrita de Olga con la \"cuenta 777 Órbita\" no aparece en la versión oficial.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1002,
      "caseId": 9,
      "type": "digital",
      "act": 2,
      "title": "Registro del servidor de contabilidad",
      "location": "Centro de datos",
      "summary": "Bitácora de accesos y borrados del sistema contable.",
      "analysisNote": "Un borrado de 40 minutos a las 2:03 fue ejecutado con la llave joya del director financiero. Solo él y sistemas poseen una.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1003,
      "caseId": 9,
      "type": "trace",
      "act": 1,
      "title": "Tarjeta de acceso apagada de Olga",
      "location": "Control de accesos",
      "summary": "La tarjeta de Olga se desactivó el jueves a las 19:40.",
      "analysisNote": "La baja partió del departamento financiero una hora después de su último registro horario.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1004,
      "caseId": 9,
      "type": "document",
      "act": 2,
      "title": "Contrato del proveedor Órbita Servicios",
      "location": "Archivo de proveedores",
      "summary": "Contrato de mantenimiento anual firmado electrónicamente.",
      "analysisNote": "La firma digital corresponde a Ezequiel Prats. La compañía \"Órbita\" no tiene nómina ni local registrados; es un buzón.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1005,
      "caseId": 9,
      "type": "testimony",
      "act": 1,
      "title": "Parte del vigilante",
      "location": "Recepción planta 12",
      "summary": "Ruta nocturna y registro de visitas del jueves.",
      "analysisNote": "Confirma que Olga salió por su cuenta con una carpeta a las 19:35; nadie la retuvo.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1006,
      "caseId": 9,
      "type": "digital",
      "act": 2,
      "title": "Correo interno amenazante",
      "location": "Buzón corporativo",
      "summary": "Mensaje de la \"dirección\" sugiriendo no remover la cuenta 777.",
      "analysisNote": "El remitente técnico es una cuenta de sistemas redirigida pocos minutos antes del borrado.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1007,
      "caseId": 9,
      "type": "digital",
      "act": 3,
      "title": "Correo sellado de Olga a la fiscalía",
      "location": "Bufete del abogado de Olga",
      "summary": "Copia impresa y sellada que la contadora dejó antes de desaparecer.",
      "analysisNote": "Adjunta el contrato de Órbita, las transferencias y el registro del borrado. Fechado la noche del jueves.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1008,
      "caseId": 9,
      "type": "document",
      "act": 3,
      "title": "Transferencias al proveedor fantasma",
      "location": "Banco corporativo",
      "summary": "Órdenes de pago mensuales a la cuenta de Órbita.",
      "analysisNote": "Suma total: 1,2 millones. La autorización bancaria es la tercera firma de Prats, idéntica en cada mes.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1009,
      "caseId": 9,
      "type": "trace",
      "act": 1,
      "title": "Cálculo del desfalco manuscrito",
      "location": "Cajón del despacho de Olga",
      "summary": "La hoja de trabajo con la reconciliación de la cuenta 777.",
      "analysisNote": "Coincide con las cifras del correo sellado. Quien borró el servidor no se llevó la hoja.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1101,
      "caseId": 10,
      "type": "document",
      "act": 1,
      "title": "Permiso de apertura",
      "location": "Taquilla de la feria",
      "summary": "Autorización municipal de la noria vigente para la temporada.",
      "analysisNote": "La inspección técnica era trimestral y estaba al día; no había fatiga reportada.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1102,
      "caseId": 10,
      "type": "testimony",
      "act": 1,
      "title": "Parte del mecánico jefe",
      "location": "Taller de mantenimiento",
      "summary": "Registro de la revisión del eje central de las 7:50.",
      "analysisNote": "Ciro declaró que la tuerca del pasador \"nunca había estado así de floja\" en 20 años.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1103,
      "caseId": 10,
      "type": "trace",
      "act": 2,
      "title": "Tuerca del pasador del eje",
      "location": "Sala del perito",
      "summary": "La pieza que fijaba la cabina 12 al manguito central.",
      "analysisNote": "Presenta limaduras frescas en la rosca y grietas de apriete manual; el corte no es por fatiga del metal sino por destensado previo.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1104,
      "caseId": 10,
      "type": "trace",
      "act": 1,
      "title": "Cabina 12 tras la caída",
      "location": "Base de la noria",
      "summary": "La cabina y el manguito desenchufado en el suelo.",
      "analysisNote": "El manguito fue desmontado de forma limpia: se forzó la tuerca, no se rompió la chapa.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1105,
      "caseId": 10,
      "type": "document",
      "act": 2,
      "title": "Póliza de la noria",
      "location": "Despacho de la gerencia",
      "summary": "Contrato de seguro de responsabilidad y daños.",
      "analysisNote": "La cobertura se duplicó hace tres semanas y la contrató la propia Valeria Sete como beneficiaria.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1106,
      "caseId": 10,
      "type": "digital",
      "act": 3,
      "title": "Cámara de la puerta Este",
      "location": "Control de acceso del recinto",
      "summary": "Registro de entradas de vehículos la madrugada del suceso.",
      "analysisNote": "La furgoneta de Valeria Sete entra a las 6:40 y sale a las 7:30, contradiciendo su coartada.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1107,
      "caseId": 10,
      "type": "testimony",
      "act": 1,
      "title": "Declaración de la feriante de la tómbola",
      "location": "Calle Mercado",
      "summary": "Testimonio de Dina Cardona sobre la llegada temprana de la gerente.",
      "analysisNote": "Coincide con la cámara de la puerta Este y con el parte de suministros.",
      "relevant": false,
      "secure": true
    },
    {
      "id": 1108,
      "caseId": 10,
      "type": "trace",
      "act": 3,
      "title": "Llave de apriete con grasa nueva",
      "location": "Taller de mantenimiento",
      "summary": "La herramienta de la medida exacta del pasador, guardada en el armarito de la gerente.",
      "analysisNote": "Tiene grasa fresca y partículas metálicas compatibles con la tuerca destensada. Solo dos llaves: la de Ciro y la de Valeria.",
      "relevant": true,
      "secure": true
    },
    {
      "id": 1109,
      "caseId": 10,
      "type": "document",
      "act": 1,
      "title": "Registro de horarios del personal",
      "location": "Panel de la feria",
      "summary": "Fichajes del día del accidente.",
      "analysisNote": "Valeria fichó a las 8:05 \"entrada\", aunque la cámara la mostró a las 6:40; el registro fue corregido a posteriori.",
      "relevant": false,
      "secure": true
    }
  ],
  "results": []
}
