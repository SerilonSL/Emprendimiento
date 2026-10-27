import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Trophy,
  Filter,
  Bookmark,
  BookmarkCheck,
  Sun,
  Moon,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Sparkles,
  BarChart3,
  Award,
  Layers,
  Search,
  Check,
  Zap,
  HelpCircle
} from 'lucide-react';

// ==========================================
// BANCO COMPLETO DE 60 PREGUNTAS (12 POR MÓDULO)
// ==========================================
const QUESTIONS_DATA = [
  // ----------------------------------------------------
  // MÓDULO 1: Fundamentos del Emprendimiento y Entorno (1-12)
  // ----------------------------------------------------
  {
    id: 1,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Cómo define la Unión Europea el concepto de emprendimiento?",
    options: [
      "La habilidad exclusiva de administrar grandes corporaciones multinacionales sin asumir riesgos.",
      "La capacidad de un individuo de transformar ideas en acciones, siendo una competencia clave para la innovación y la seguridad personal.",
      "La obligación legal de inscribirse en el Servicio de Impuestos Internos antes de tener una idea.",
      "El acto exclusivo de vender productos físicos en establecimientos comerciales tradicionales."
    ],
    correctAnswer: 1,
    explanation: "Según la Unión Europea, el emprendimiento es una competencia clave transversal que permite a las personas transformar sus ideas en acciones creativas e innovadoras."
  },
  {
    id: 2,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "En el contexto emprendedor, ¿cuál es la diferencia fundamental entre 'Actitud' y 'Aptitud'?",
    options: [
      "La Actitud es la capacidad de hacer cálculos numéricos; la Aptitud es la simpatía con los clientes.",
      "La Actitud es un comportamiento y disposición motivacional; la Aptitud es la habilidad o conocimiento técnico para realizar una tarea.",
      "Ambos términos significan exactamente lo mismo en la legislación chilena.",
      "La Aptitud no se puede entrenar, mientras que la Actitud es un título universitario."
    ],
    correctAnswer: 1,
    explanation: "La ACTITUD se refiere al 'querer hacer' (disposición, iniciativa, perseverancia) y la APTITUD al 'saber hacer' (capacidades, habilidades técnicas y destrezas)."
  },
  {
    id: 3,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Qué caracteriza al perfil de un 'Intraemprendedor'?",
    options: [
      "Es un emprendedor que desarrolla ideas en el sector público de manera informal.",
      "Es un trabajador dependiente dentro de una empresa que emprende, propone e impulsa proyectos innovadores internamente.",
      "Es una persona que compra acciones en la bolsa de valores sin trabajar en la empresa.",
      "Es un trabajador que se independiza inmediatamente sin haber tenido experiencia laboral previa."
    ],
    correctAnswer: 1,
    explanation: "Un intraemprendedor es un colaborador que aplica la mentalidad emprendedora dentro de la organización donde trabaja, generando valor e innovación interna."
  },
  {
    id: 4,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿En qué se diferencia principalmente un Emprendedor de un Empresario?",
    options: [
      "El emprendedor solo maneja dinero público; el empresario maneja dinero de bancos.",
      "El emprendedor inicia y crea una oportunidad asumiendo riesgos iniciales; el empresario consolida, administra y gestiona una empresa ya establecida.",
      "No existe ninguna diferencia; ambos conceptos son idénticos formalmente.",
      "El empresario no necesita contratar personal ni llevar contabilidad."
    ],
    correctAnswer: 1,
    explanation: "El emprendedor está enfocado en la creación, innovación y puesta en marcha del proyecto; el empresario se enfoca en la gestión, eficiencia operativa y crecimiento rentable continuo."
  },
  {
    id: 5,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Qué es un 'Interemprendedor' según la tipología abordada en la asignatura?",
    options: [
      "Un colaborador dependiente que busca aprender la mayor cantidad de procesos y competencias en su trabajo para independizarse más adelante.",
      "Un emprendedor que crea negocios únicamente en internet.",
      "Un inversionista internacional que busca startups en quiebra.",
      "Un profesional que trabaja en más de 5 empresas simultáneamente."
    ],
    correctAnswer: 0,
    explanation: "El interemprendedor utiliza su trabajo dependiente como una escuela de aprendizaje con miras a dar el salto a la independencia emprendedora en el futuro."
  },
  {
    id: 6,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Cuál es el foco principal del 'Emprendedor Social'?",
    options: [
      "Maximizar las utilidades financieras de los accionistas a corto plazo a cualquier costo.",
      "Desarrollar soluciones innovadoras y sostenibles para resolver problemáticas sociales, comunitarias o ambientales.",
      "Organizar eventos festivos para la comunidad local sin emitir boletas.",
      "Evitar pagar impuestos mediante donaciones no declaradas."
    ],
    correctAnswer: 1,
    explanation: "El emprendimiento social busca transformar la sociedad generando un impacto positivo tangible ante brechas sociales o ambientales, integrando la sostenibilidad financiera."
  },
  {
    id: 7,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "Al analizar el Macroentorno de un emprendimiento, ¿qué factores abarca el análisis general?",
    options: [
      "Únicamente los gustos personales de los familiares directos del emprendedor.",
      "Factores económicos, legales/políticos, socio-culturales, tecnológicos y ambientales/ecológicos.",
      "Exclusivamente el horario de colación de los empleados de la empresa rival.",
      "Los saldos de las cuentas bancarias personales del fundador."
    ],
    correctAnswer: 1,
    explanation: "El Macroentorno se compone de variables externas incontrolables pero determinantes (Análisis PESTEL: Político, Económico, Social, Tecnológico, Ecológico, Legal)."
  },
  {
    id: 8,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Cuáles son los 4 tipos de Recursos fundamentales necesarios para la puesta en marcha de un proyecto?",
    options: [
      "Recursos Humanos, Materiales, Técnicos y Financieros.",
      "Recursos Virtuales, Fantásticos, Nominativos y Judiciales.",
      "Recursos Primarios, Secundarios, Terciarios y Cuaternarios.",
      "Recursos de Software, Hardware, Redes y Redes Sociales únicamente."
    ],
    correctAnswer: 0,
    explanation: "Todo proyecto de emprendimiento requiere la combinación estratégica de recursos humanos (equipo), materiales (infraestructura/insumos), técnicos (procesos/tecnología) y financieros (capital)."
  },
  {
    id: 9,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Qué constituyen los 'Recursos Técnicos' en un proyecto emprendedor?",
    options: [
      "Los créditos bancarios de consumo otorgados al dueño.",
      "La maquinaria pesada y terrenos de la empresa exclusivamente.",
      "Las herramientas tecnológicas, conocimientos específicos, licencias, sistemas y procedimientos de trabajo.",
      "Las reuniones de camaradería que se realizan los fines de semana."
    ],
    correctAnswer: 2,
    explanation: "Los recursos técnicos incluyen la tecnología, software, métodos, patentes, procedimientos y know-how que permiten operar y mantener la ventaja competitiva."
  },
  {
    id: 10,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Cuál de los siguientes es un ejemplo directo de un Recurso Material?",
    options: [
      "Una patente de invención otorgada por INAPI.",
      "Un crédito Corfo aprobando financiamiento.",
      "Herramientas, mobiliario, materia prima e infraestructura física.",
      "La experiencia laboral previa de la contadora."
    ],
    correctAnswer: 2,
    explanation: "Los recursos materiales son bienes tangibles que utiliza la empresa para elaborar sus productos o prestar sus servicios (equipos, vehículos, oficinas, insumos)."
  },
  {
    id: 11,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Por qué se afirma que la tolerancia al fracaso y a la incertidumbre es clave en la actitud emprendedora?",
    options: [
      "Porque los emprendedores nunca cometen errores y siempre ganan dinero desde el primer día.",
      "Porque emprender implica asumir riesgos y la capacidad de aprender de los errores permite iterar y pivotar el negocio.",
      "Porque es una exigencia legal estipulada en el Código del Trabajo.",
      "Porque así lo exige el Banco Central para otorgar una cuenta corriente."
    ],
    correctAnswer: 1,
    explanation: "El camino emprendedor está lleno de hipótesis no verificadas; la tolerancia a la frustración permite resiliencia para corregir el rumbo ante imprevistos."
  },
  {
    id: 12,
    module: 1,
    moduleName: "Módulo 1: Fundamentos del Emprendimiento",
    question: "¿Qué rol juega la creatividad dentro del proceso emprendedor?",
    options: [
      "Es un elemento secundario prescindible si se cuenta con capital suficiente.",
      "Es el motor inicial que permite identificar oportunidades, resolver problemas de forma novedosa y diferenciarse en el mercado.",
      "Es una técnica exclusiva aplicada por contadores auditores en balances.",
      "Solo sirve para diseñar el logotipo y los colores de la empresa."
    ],
    correctAnswer: 1,
    explanation: "La creatividad permite transformar problemas no resueltos en propuestas de valor originales que capturan el interés de un segmento de mercado."
  },

  // ----------------------------------------------------
  // MÓDULO 2: Planificación, Ideas y Modelo de Negocio (13-24)
  // ----------------------------------------------------
  {
    id: 13,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿En qué consiste la técnica de generación de ideas conocida como 'Galería de Famosos'?",
    options: [
      "En contratar celebridades de televisión para que hagan publicidad de tu producto.",
      "En proyectar un problema de negocio y preguntarse cómo lo resolvería una figura célebre (ej. Steve Jobs, Elon Musk, Da Vinci) para adoptar perspectivas diversas.",
      "En tomarse fotografías con empresarios conocidos para pedir financiamiento.",
      "En pintar retratos de científicos en las paredes de la oficina para inspirarse."
    ],
    correctAnswer: 1,
    explanation: "Esta técnica de pensamiento lateral invita a salir de la zona de confort imaginando las soluciones que proponerían referentes destacados con filosofías de trabajo distintas."
  },
  {
    id: 14,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Qué caracteriza al 'Método Delphi' en la generación y validación de ideas?",
    options: [
      "Es un juego de rol donde se simula la quiebra de la empresa.",
      "Es una técnica de consulta estructurada y anónima a un panel de expertos en varias rondas para llegar a un consenso fundamentado.",
      "Es un software automático de inteligencia artificial que calcula los precios de la competencia.",
      "Es una reunión masiva donde todos gritan sus ideas al mismo tiempo."
    ],
    correctAnswer: 1,
    explanation: "El Método Delphi busca opiniones expertas sin la influencia del pensamiento de grupo o sesgos jerárquicos, garantizando anonimato y retroalimentación sistemática."
  },
  {
    id: 15,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Qué diferencia principal existe entre un 'Plan de Negocios' y un 'Plan de Trabajo'?",
    options: [
      "El Plan de Negocios evalúa la viabilidad integral y modelo del emprendimiento; el Plan de Trabajo organiza las actividades operativas, plazos y responsables concretos.",
      "El Plan de Trabajo es para el banco y el Plan de Negocios es para los trabajadores.",
      "No existe diferencia, son dos nombres para la Carta Gantt.",
      "El Plan de Negocios dura 1 semana y el Plan de Trabajo dura 10 años."
    ],
    correctAnswer: 0,
    explanation: "El Plan de Negocios demuestra la viabilidad comercial, técnica y financiera del proyecto; el Plan de Trabajo establece la ejecución táctica (tareas, recursos, fechas)."
  },
  {
    id: 16,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Cuál es la función principal de la 'Carta Gantt' en la gestión de proyectos?",
    options: [
      "Calcular automáticamente los impuestos a pagar en el SII.",
      "Planificar y visualizar gráficamente el cronograma de actividades, sus fechas de inicio/término y secuencia temporal.",
      "Determinar la gratificación legal de los trabajadores.",
      "Diseñar la estrategia de marketing en redes sociales."
    ],
    correctAnswer: 1,
    explanation: "La Carta Gantt es una herramienta de gestión temporal que representa las tareas mediante barras sobre un eje de tiempo, facilitando el seguimiento del proyecto."
  },
  {
    id: 17,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Cuántos bloques compone el lienzo del Modelo Canvas ideado por Alexander Osterwalder?",
    options: [
      "4 bloques (Las 4 Ps).",
      "5 bloques (El PESTEL).",
      "9 bloques clave interrelacionados.",
      "12 bloques de contabilidad financiera."
    ],
    correctAnswer: 2,
    explanation: "El Modelo Canvas se estructura en 9 bloques fundamentales que cubren las cuatro áreas principales de un negocio: clientes, oferta, infraestructura y viabilidad financiera."
  },
  {
    id: 18,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "En el Modelo Canvas, ¿qué representa la 'Propuesta de Valor'?",
    options: [
      "El precio más bajo que se puede cobrar por un producto.",
      "El conjunto de productos o servicios que crean valor para un segmento específico resolviendo sus problemas o satisfaciendo sus necesidades.",
      "El capital invertido por los socios fundadores en la notaría.",
      "El valor de liquidación de los muebles de la oficina."
    ],
    correctAnswer: 1,
    explanation: "La Propuesta de Valor es el núcleo del Canvas: la razón por la cual los clientes eligen a tu empresa por sobre la competencia."
  },
  {
    id: 19,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Qué bloque del Canvas define cómo entregamos nuestra propuesta de valor al cliente (comunicación, distribución y venta)?",
    options: [
      "Estructura de Costos.",
      "Canales.",
      "Recursos Clave.",
      "Socios Clave."
    ],
    correctAnswer: 1,
    explanation: "Los Canales describen cómo una empresa se comunica y alcanza a sus segmentos de clientes para entregar su propuesta de valor (puntos de venta, e-commerce, distribuidores)."
  },
  {
    id: 20,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿En qué consiste la técnica creativa de inspiración en la 'Flora y Fauna' (Biomímesis)?",
    options: [
      "En vender productos fabricados únicamente con madera de pino.",
      "En observar los mecanismos, formas y sistemas adaptativos de la naturaleza para aplicarlos en la solución de problemas o diseño de productos.",
      "En abrir una tienda de mascotas o jardín botánico.",
      "En plantar árboles alrededor de la fábrica para pagar menos IVA."
    ],
    correctAnswer: 1,
    explanation: "La Biomímesis o inspiración en la flora y fauna busca soluciones sostenibles e innovadoras emulando patrones y estrategias probadas por la evolución de la naturaleza."
  },
  {
    id: 21,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "En el Modelo Canvas, los bloques de 'Fuentes de Ingresos' y 'Estructura de Costos' constituyen:",
    options: [
      "La base financiera de la viabilidad del negocio.",
      "El área de recursos humanos del proyecto.",
      "El análisis del macroentorno político.",
      "La estrategia de contratación de la competencia."
    ],
    correctAnswer: 0,
    explanation: "Ambos bloques forman la ecuación económica fundamental: si las fuentes de ingresos superan a la estructura de costos de forma sostenible, el negocio es viable."
  },
  {
    id: 22,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Qué es la 'Técnica de Da Vinci' aplicada a la creatividad?",
    options: [
      "Pintar un cuadro al óleo antes de hacer el plan de negocios.",
      "Combinar diferentes listas de parámetros o características de un objeto/servicio para generar combinaciones novedosas (Análisis Morfológico).",
      "Escribir todas las ideas en italiano e invertidas con un espejo.",
      "Contratar ingenieros del siglo XV para construir prototipos."
    ],
    correctAnswer: 1,
    explanation: "Inspirada en las tablas analíticas de Leonardo da Vinci, consiste en descomponer un problema en atributos y combinar variantes aleatorias para hallar innovaciones."
  },
  {
    id: 23,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "¿Qué bloque del Canvas identifica a las alianzas estratégicas necesarias para optimizar el negocio y reducir riesgos?",
    options: [
      "Relación con Clientes.",
      "Socios Clave.",
      "Segmentos de Clientes.",
      "Actividades Clave."
    ],
    correctAnswer: 1,
    explanation: "Los Socios Clave son la red de proveedores y aliados estratégicos que permiten que el modelo de negocio funcione eficientemente."
  },
  {
    id: 24,
    module: 2,
    moduleName: "Módulo 2: Planificación y Modelo de Negocio",
    question: "La técnica creativa de 'Lluvia de Ideas' (Brainstorming) exige como regla de oro inicial:",
    options: [
      "Criticar inmediatamente las ideas que parezcan absurdas.",
      "Privilegiar la cantidad de ideas suspendiendo todo juicio o crítica restrictiva durante la fase de generación.",
      "Aceptar solo ideas que hayan sido aprobadas por un abogado.",
      "Permitir hablar únicamente al líder del grupo."
    ],
    correctAnswer: 1,
    explanation: "En la fase de generación de la Lluvia de Ideas está prohibido juzgar o descalificar, favoreciendo la libre asociación y la máxima cantidad de alternativas."
  },

  // ----------------------------------------------------
  // MÓDULO 3: Formalización y Contabilidad Básica (25-36)
  // ----------------------------------------------------
  {
    id: 25,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Cuál es la diferencia fundamental entre una Persona Natural y una Persona Jurídica?",
    options: [
      "La Persona Natural tiene 2 RUT; la Persona Jurídica no tiene RUT.",
      "La Persona Natural responde con todo su patrimonio personal por las deudas del negocio; la Persona Jurídica es una entidad ficticia con patrimonio e identidad propios.",
      "Las Personas Jurídicas son solo empresas públicas del Estado.",
      "Las Personas Naturales no pagan impuestos en Chile."
    ],
    correctAnswer: 1,
    explanation: "Una Persona Jurídica nace formalmente mediante constitución legal separando el patrimonio de los socios del patrimonio de la entidad frente a terceros."
  },
  {
    id: 26,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Qué tipo de sociedad en Chile destaca por permitir su constitución por un solo accionista y ser altamente flexible para startups e inversionistas?",
    options: [
      "Sociedad Anónima Abierta (S.A.).",
      "Sociedad por Acciones (SpA).",
      "Sociedad de Responsabilidad Limitada (Ltda.).",
      "Sociedad Colectiva Comercial."
    ],
    correctAnswer: 1,
    explanation: "La Sociedad por Acciones (SpA) fue creada para facilitar el emprendimiento, permitiendo desde 1 solo accionista hasta múltiples socios y libre cesión de acciones."
  },
  {
    id: 27,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Cuál es la Ecuación Fundamental de la Contabilidad expresada en el Balance General?",
    options: [
      "Activo = Pasivo - Capital.",
      "Activo = Pasivo + Capital (o Patrimonio).",
      "Pasivo = Activo + Capital.",
      "Capital = Pasivo - Activo."
    ],
    correctAnswer: 1,
    explanation: "La ecuación contable básica establece que todo lo que posee la empresa (Activo) es financiado por terceros (Pasivo) o por los dueños (Capital/Patrimonio)."
  },
  {
    id: 28,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "En la estructura del Balance General, ¿qué es un 'Activo'?",
    options: [
      "Una deuda exigible por el banco a corto plazo.",
      "Un recurso, bien o derecho controlado por la empresa del cual se esperan beneficios económicos futuros.",
      "El sueldo bruto contratado para los operarios.",
      "La pérdida acumulada por ventas no realizadas."
    ],
    correctAnswer: 1,
    explanation: "Los Activos representan lo que la empresa tiene o le deben (Caja, Banco, Inventarios, Maquinaria, Cuentas por Cobrar)."
  },
  {
    id: 29,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "Son ejemplos directos de cuentas contables del grupo de 'Activos':",
    options: [
      "Caja, Banco, Mercaderías y Cuentas por Cobrar.",
      "Proveedores, Préstamos Bancarios y Cuentas por Pagar.",
      "Capital Social, Reservas y Utilidades Retenidas.",
      "Gastos de Arriendo, Gastos de Luz e Impuestos por Pagar."
    ],
    correctAnswer: 0,
    explanation: "Caja, Banco, Mercadería y Cobramzas son activos porque representan dinero líquido o bienes convertibles en beneficio económico."
  },
  {
    id: 30,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Qué representa un 'Pasivo' en contabilidad?",
    options: [
      "Las ganancias netas del ejercicio recibidas en efectivo.",
      "Las obligaciones y deudas financieras presentes que la empresa tiene con terceros.",
      "Los productos almacenados en la bodega listos para la venta.",
      "Las marcas comerciales registradas por la empresa."
    ],
    correctAnswer: 1,
    explanation: "Los Pasivos registran los compromisos financieros pendientes con proveedores, bancos, trabajadores o el fisco."
  },
  {
    id: 31,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Cuál es la tasa vigente del Impuesto al Valor Agregado (IVA) en Chile?",
    options: [
      "10%",
      "15%",
      "19%",
      "25%"
    ],
    correctAnswer: 2,
    explanation: "En Chile, la tasa general del Impuesto al Valor Agregado (IVA) aplicable a ventas de bienes y prestaciones de servicios es del 19%."
  },
  {
    id: 32,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "Si un producto tiene un Valor Neto de $10.000 en Chile, ¿cuál es su Valor Total con IVA incluido?",
    options: [
      "$10.190",
      "$11.900",
      "$12.500",
      "$19.000"
    ],
    correctAnswer: 1,
    explanation: "Valor Total = Valor Neto + IVA (19%). IVA = $10.000 x 0,19 = $1.900. Total = $10.000 + $1.900 = $11.900."
  },
  {
    id: 33,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Qué caracteriza a una Empresa Individual de Responsabilidad Limitada (E.I.R.L.)?",
    options: [
      "Requiere obligatoriamente un mínimo de 10 socios.",
      "Es una persona jurídica formada por un solo dueño donde el patrimonio de la empresa es independiente del personal.",
      "Es una sociedad anónima abierta que cotiza en la Bolsa de Comercio.",
      "No está autorizada a emitir facturas ni contratar empleados."
    ],
    correctAnswer: 1,
    explanation: "La E.I.R.L. permite a una sola persona natural constituir una empresa comercial asignando un patrimonio específico distinto al propio."
  },
  {
    id: 34,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Cómo se calcula el 'IVA Débito Fiscal' frente al 'IVA Crédito Fiscal' que determina el pago mensual al SII?",
    options: [
      "El IVA Débito (de las ventas) se le resta el IVA Crédito (de las compras gravadas); si es positivo, se paga la diferencia al SII.",
      "Se suman ambos IVAs y se dividen por 12 meses.",
      "El IVA Crédito es siempre una multa impuesta por la Tesorería.",
      "Solo se calcula al momento de liquidar la empresa en quiebra."
    ],
    correctAnswer: 0,
    explanation: "El contribuyente recauda IVA Débito en sus ventas y descuenta el IVA Crédito pagado en sus compras de insumos; paga la diferencia neta en el Formulario 29."
  },
  {
    id: 35,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "Una Sociedad de Responsabilidad Limitada (Ltda.) en Chile se caracteriza por:",
    options: [
      "Tener un máximo de 50 socios y requerir la aprobación de todos ante el ingreso de un nuevo integrante.",
      "Estar compuesta únicamente por accionistas anónimos sin contrato de trabajo.",
      "Poder crearse por la sola firma de una boleta de honorarios en la Tesorería.",
      "Ser administrada exclusivamente por la Municipalidad correspondiente."
    ],
    correctAnswer: 0,
    explanation: "La sociedad de responsabilidad limitada es una sociedad de personas donde las decisiones requieren acuerdo unánime y la responsabilidad se limita a los aportes."
  },
  {
    id: 36,
    module: 3,
    moduleName: "Módulo 3: Formalización y Contabilidad",
    question: "¿Cuál es el propósito del Estado de Resultados dentro del ciclo contable?",
    options: [
      "Mostrar el listado de nombres y RUTs de los clientes.",
      "Reflejar los ingresos acumulados menos los costos y gastos para determinar si existió utilidad o pérdida en un periodo determinado.",
      "Registrar las fechas de vencimiento de las licencias médicas.",
      "Calcular el seguro de cesantía imponible."
    ],
    correctAnswer: 1,
    explanation: "El Estado de Resultados mide el desempeño operativo y financiero de la empresa en un periodo dado, mostrando si hubo beneficio o pérdida neta."
  },

  // ----------------------------------------------------
  // MÓDULO 4: Marketing y Gestión de Costos (37-48)
  // ----------------------------------------------------
  {
    id: 37,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Cuáles son las '4 Ps' del Marketing Mix tradicional creado por E. Jerome McCarthy?",
    options: [
      "Plan, Personas, Planilla y Proceso.",
      "Producto, Precio, Plaza y Promoción.",
      "Patrimonio, Pasivo, Pronóstico y Posicionamiento.",
      "Publicidad, Proveedores, Puntuación y Producción."
    ],
    correctAnswer: 1,
    explanation: "El Marketing Mix clásico se compone de Producto (oferta), Precio (valor de intercambio), Plaza (distribución) y Promoción (comunicación comercial)."
  },
  {
    id: 38,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "En las 4 Ps del marketing, ¿a qué corresponde la 'Plaza'?",
    options: [
      "Al parque público más cercano a la fábrica.",
      "A los canales de distribución y estrategias para que el producto esté disponible y accesible al cliente final.",
      "Al costo de embalaje y etiquetado con código de barras.",
      "A las reuniones de directorio donde se negocian créditos."
    ],
    correctAnswer: 1,
    explanation: "Plaza (Place / Distribución) comprende la logística, puntos de venta, e-commerce, intermediarios y cobertura geográfica de entrega."
  },
  {
    id: 39,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Qué es el 'Flujo de Caja' (Cash Flow) en una empresa?",
    options: [
      "La suma fija depositada en la cuenta de ahorro para la jubilación.",
      "Un informe financiero que registra y proyecta las entradas reales y salidas de dinero en efectivo durante un periodo determinado.",
      "La tasación del edificio donde funciona la oficina central.",
      "La lista de candidatos preseleccionados por la psicóloga laboral."
    ],
    correctAnswer: 1,
    explanation: "El Flujo de Caja evalúa la liquidez de la empresa registrando los movimientos reales de cobros (ingresos) y pagos (egresos) monetarios."
  },
  {
    id: 40,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Qué diferencia existe entre Costos Fijos y Costos Variables?",
    options: [
      "Los Costos Fijos cambian si aumenta la producción; los Costos Variables se mantienen iguales siempre.",
      "Los Costos Fijos se pagan sin importar el nivel de producción o venta (ej. arriendo); los Costos Variables varían en proporción directa al volumen producido (ej. materia prima).",
      "Los Costos Fijos son pagados en dólares; los Variables en pesos chilenos.",
      "No existe diferencia, ambos son gastos no imponibles."
    ],
    correctAnswer: 1,
    explanation: "Los Costos Fijos no dependen de la producción inmediata; los Costos Variables se incrementan o reducen según el nivel directo de fabricación o ventas."
  },
  {
    id: 41,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Qué comprende la 'Promoción' dentro del Marketing Mix?",
    options: [
      "Exclusivamente regalar productos gratis de forma permanente.",
      "El conjunto de estrategias de comunicación (publicidad, relaciones públicas, marketing digital, venta personal) para dar a conocer la oferta y estimular la compra.",
      "La fijación del margen bruto de ganancias en la factura.",
      "La contratación de camiones de carga de reparto."
    ],
    correctAnswer: 1,
    explanation: "Promoción abarca todas las acciones comunicacionales destinadas a informar, persuadir y recordar a los clientes los beneficios de la propuesta de valor."
  },
  {
    id: 42,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "Si el saldo del Flujo de Caja de un mes resulta negativo, esto indica que:",
    options: [
      "La empresa tuvo más cobros en efectivo que pagos realizados.",
      "Las salidas de dinero efectivo superaron a los ingresos reales del periodo, señalando un problema inmediato de liquidez.",
      "El impuesto IVA del mes fue cobrado a la tasa del 0%.",
      "Es obligatorio cerrar legalmente la empresa esa misma semana."
    ],
    correctAnswer: 1,
    explanation: "Un flujo de caja negativo requiere financiamiento de trabajo (o reservas) para cubrir las obligaciones inmediatas sin caer en cesación de pagos."
  },
  {
    id: 43,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "En el diseño de la estrategia de 'Precio', ¿cuáles son los 3 enfoques clásicos de fijación?",
    options: [
      "Basado en los costos, basado en la competencia, y basado en el valor percibido por el cliente.",
      "Basado en la suerte, basado en la inflación de EE.UU. y basado en el sueldo del gerente.",
      "Basado en el IVA, basado en las AFP y basado en la gratificación.",
      "Basado en la patente notarial únicamente."
    ],
    correctAnswer: 0,
    explanation: "Se puede fijar el precio sumando un margen al costo de producción, tomando como referencia a los competidores o evaluando lo que el cliente está dispuesto a pagar por el valor recibido."
  },
  {
    id: 44,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Qué es el 'Punto de Equilibrio' (Break-Even Point)?",
    options: [
      "El día exacto en que los accionistas venden el 100% de la empresa.",
      "El nivel de ventas donde los ingresos totales igualan exactamente a los costos totales (no hay utilidad ni pérdida).",
      "La suma del sueldo base y la colación no imponible.",
      "El saldo máximo que se puede endeudar un cliente en la tarjeta."
    ],
    correctAnswer: 1,
    explanation: "El Punto de Equilibrio indica el volumen mínimo de unidades a vender para cubrir todos los costos operativos sin perder ni ganar dinero."
  },
  {
    id: 45,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "Institución pública chilena cuyo objetivo es impulsar el emprendimiento y la micro/pequeña empresa mediante fondos concursables como Capital Semilla y Capital Abeja:",
    options: [
      "SERCOTEC (Servicio de Cooperación Técnica).",
      "INE (Instituto Nacional de Estadísticas).",
      "DT (Dirección del Trabajo).",
      "CMF (Comisión para el Mercado Financiero)."
    ],
    correctAnswer: 0,
    explanation: "SERCOTEC apoya activamente a micro y pequeños empresarios con capacitación, asesoría técnica y fondos concursables no reembolsables."
  },
  {
    id: 46,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Qué organismo público chileno promueve la innovación de alto impacto, el emprendimiento dinámico y el desarrollo tecnológico (ej. Start-Up Chile)?",
    options: [
      "FOSIS.",
      "CORFO (Corporación de Fomento de la Producción).",
      "INDAP.",
      "SENCE."
    ],
    correctAnswer: 1,
    explanation: "CORFO ejecuta programas enfocados en competitividad, innovación, financiamiento a startups de escalabilidad global y transferencia tecnológica."
  },
  {
    id: 47,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "Servicio público enfocado prioritariamente en erradicar la pobreza apoyando con emprendimientos básicos a personas en situación de vulnerabilidad social:",
    options: [
      "FOSIS (Fondo de Solidaridad e Inversión Social).",
      "CORFO.",
      "INAPI.",
      "Superintendencia de Pensiones."
    ],
    correctAnswer: 0,
    explanation: "FOSIS entrega capacidades y capital inicial a personas y familias vulnerables para generar ingresos sostenibles de subsistencia o desarrollo."
  },
  {
    id: 48,
    module: 4,
    moduleName: "Módulo 4: Marketing y Gestión de Costos",
    question: "¿Cuál es el foco primordial de la institución pública INDAP en Chile?",
    options: [
      "Promover el desarrollo económico del sector agropecuario y de los pequeños productores agrícolas.",
      "Regular las plataformas de e-commerce en zonas urbanas.",
      "Aprobar la constitución de Sociedades por Acciones.",
      "Administrar el Seguro de Cesantía de los trabajadores."
    ],
    correctAnswer: 0,
    explanation: "INDAP (Instituto de Desarrollo Agropecuario) apoya a la agricultura familiar campesina con créditos, asistencia técnica y fomento productivo rural."
  },

  // ----------------------------------------------------
  // MÓDULO 5: Capital Humano, Legislación y Ahorro (49-60)
  // ----------------------------------------------------
  {
    id: 49,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "Según el Artículo 7 del Código del Trabajo en Chile, ¿qué define un Contrato Individual de Trabajo?",
    options: [
      "Un acuerdo informal de palabra sin validez legal obligatoria.",
      "Una convención por la cual el empleador y el trabajador se obligan recíprocamente, este a prestar servicios personales bajo dependencia y subordinación, y aquel a pagar por estos servicios una remuneración determinada.",
      "Un documento notarial firmado solo cuando el trabajador cumple 10 años en la empresa.",
      "Un compromiso de inversión en la bolsa de comercio."
    ],
    correctAnswer: 1,
    explanation: "El Contrato de Trabajo exige 3 elementos constitutivos: prestación de servicios personales, subordinación y dependencia, y pago de una remuneración."
  },
  {
    id: 50,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "De acuerdo con la legislación laboral chilena, ¿cuál es el plazo máximo regla general para escriturar el contrato de trabajo tras el ingreso del trabajador?",
    options: [
      "15 días corridos desde la incorporación del trabajador (o 5 días si es por obra/faena o menor a 30 días).",
      "6 meses después de terminado el periodo de prueba.",
      "30 días hábiles bancarios.",
      "No existe plazo legal, es optativo."
    ],
    correctAnswer: 0,
    explanation: "El empleador tiene un plazo estricto de 15 días corridos para formalizar por escrito el contrato (5 días en contratos de obra o duración inferior a 30 días) bajo sanción de multas."
  },
  {
    id: 51,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "En una liquidación de sueldo, ¿cuál de los siguientes ítems se considera un 'Haber Imponible'?",
    options: [
      "Asignación de Movilización.",
      "Asignación de Colación.",
      "Sueldo Base y Horas Extraordinarias.",
      "Devolución de viáticos por compras con boleta."
    ],
    correctAnswer: 2,
    explanation: "Los Haberes Imponibles forman la remuneración sobre la cual se calculan los descuentos de previsión y salud (Sueldo base, comisiones, gratificación, horas extras)."
  },
  {
    id: 52,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "Son ejemplos de 'Haberes No Imponibles' en la legislación chilena:",
    options: [
      "Comisiones y Bonos de Producción.",
      "Colación, Movilización, Viáticos y Asignación Familiar.",
      "Sueldo Base y Sobresueldo.",
      "Gratificación Legal Anual."
    ],
    correctAnswer: 1,
    explanation: "Los haberes no imponibles son compensaciones de gastos que sufre el trabajador para realizar su labor; no constituyen remuneración ni sufren descuentos previsionales."
  },
  {
    id: 53,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "¿Cuál es el porcentaje legal obligatorio de descuento a cargo del trabajador destinado a la cotización de SALUD (Fonasa o Isapre)?",
    options: [
      "5%",
      "7%",
      "10%",
      "12%"
    ],
    correctAnswer: 1,
    explanation: "El descuento obligatorio básico en la liquidación de sueldo destinado al fondo o plan de salud es del 7% de la remuneración imponible."
  },
  {
    id: 54,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "¿Cuál es la tasa legal obligatoria que se descuenta al trabajador para su fondo de pensiones de jubilación (capitalización individual en AFP)?",
    options: [
      "7% fijo.",
      "10% de la remuneración imponible (más la comisión de la AFP respectiva).",
      "19% de impuestos directos.",
      "0,6% del total de haberes no imponibles."
    ],
    correctAnswer: 1,
    explanation: "La ley establece que un 10% del sueldo imponible va directo a la cuenta individual de ahorro previsional, al cual se suma el porcentaje de comisión cobrado por la AFP."
  },
  {
    id: 55,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "En un contrato a plazo indefinido, ¿cuál es el porcentaje de descuento que aporta el trabajador para el Seguro de Cesantía (AFC)?",
    options: [
      "0,6% de la remuneración imponible.",
      "2,4% del haber total no imponible.",
      "7% de salud obligatoria.",
      "El trabajador no aporta nada en ningún contrato."
    ],
    correctAnswer: 0,
    explanation: "En contratos indefinidos, el trabajador aporta el 0,6% imponible y el empleador aporta el 2,4%. (En contratos a plazo fijo, el empleador financia el 3% total)."
  },
  {
    id: 56,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "En el Sistema Previsional de Chile, ¿qué abarca el 'Pilar Voluntario'?",
    options: [
      "Las donaciones obligatorias exigidas por las municipalidades.",
      "Mecanismos como el Ahorro Previsional Voluntario (APV) que permiten complementar o anticipar la pensión con incentivos tributarios.",
      "La pensión básica garantizada por el Estado a personas del 60% más vulnerable.",
      "Los depósitos que hace el empleador en la cuenta corriente del sindicato."
    ],
    correctAnswer: 1,
    explanation: "El Pilar Voluntario (APV, APVC) permite a los trabajadores ahorrar fondos adicionales por sobre el 10% obligatorio con beneficios impositivos vigentes."
  },
  {
    id: 57,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "¿Qué es un 'Contrato a Honorarios'?",
    options: [
      "Un contrato de trabajo bajo el Código del Trabajo con derecho a gratificación.",
      "Un contrato civil de prestación de servicios independientes, donde no existe subordinación ni dependencia, y se emiten boletas de honorarios con retención de impuestos.",
      "Una sociedad anónima cerrada de carácter profesional.",
      "Un subsidio otorgado por FOSIS para trabajadores cesantes."
    ],
    correctAnswer: 1,
    explanation: "Es una relación de carácter civil en la cual el prestador trabaja de forma autónoma sin cumplir jornada fija ni recibir instrucciones directas bajo subordinación."
  },
  {
    id: 58,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "¿En qué consiste la 'Gratificación Legal' contemplada en el Código del Trabajo?",
    options: [
      "Un bono voluntario que el jefe entrega en fiestas patrias si lo desea.",
      "El derecho de los trabajadores a percibir parte de las utilidades líquidas obtenidas por la empresa en el ejercicio comercial.",
      "La devolución del cobro de estacionamientos en el lugar de trabajo.",
      "La indemnización por años de servicio al ser despedido por necesidades de la empresa."
    ],
    correctAnswer: 1,
    explanation: "Las empresas con fines de lucro que obtengan utilidades deben repartir el 30% de la utilidad líquida o abonar mensualmente el 25% del sueldo con tope de 4,75 ingresos mínimos."
  },
  {
    id: 59,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "¿Qué es un 'Depósito a Plazo' como alternativa financiera de ahorro/inversión?",
    options: [
      "Una acción especulativa de alto riesgo en la bolsa internacional.",
      "Un producto bancario donde se entrega una suma de dinero a una institución por un tiempo determinado a cambio de una rentabilidad fija o conocida.",
      "Un crédito concedido por el banco a 30 años plazo.",
      "Una cuenta donde solo se guardan dólares en efectivo sin ganar intereses."
    ],
    correctAnswer: 1,
    explanation: "El Depósito a Plazo es un instrumento conservador de bajo riesgo donde el inversor conoce de antemano el interés exacto que ganará al vencimiento del plazo estipulado."
  },
  {
    id: 60,
    module: 5,
    moduleName: "Módulo 5: Capital Humano y Legislación Laboral",
    question: "Según el Artículo 3 del Código del Trabajo, ¿quién es considerado 'Empleador'?",
    options: [
      "Únicamente el Gerente General que tenga nacionalidad chilena.",
      "La persona natural o jurídica que utiliza los servicios intelectuales o materiales de una o más personas en virtud de un contrato de trabajo.",
      "Cualquier cliente que compre más de $1.000.000 en el local comercial.",
      "El fiscalizador de la Dirección del Trabajo."
    ],
    correctAnswer: 1,
    explanation: "El Artículo 3 define jurídicamente las figuras de empleador (quien contrata y coordina el trabajo) y trabajador (quien presta el servicio bajo dependencia)."
  }
];

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState(true);

  // Filter and mode state
  const [selectedModule, setSelectedModule] = useState(0); // 0 = Todos
  const [studyMode, setStudyMode] = useState('menu'); // 'menu', 'exam', 'practice', 'bookmarks', 'summary'
  
  // Exam / Practice state
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { questionId: optionIndex }
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Timer state
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Handle module filtering and mode starting
  const startMode = (mode, shuffle = false) => {
    let filtered = [...QUESTIONS_DATA];
    if (selectedModule !== 0) {
      filtered = filtered.filter((q) => q.module === selectedModule);
    }
    
    if (mode === 'bookmarks') {
      filtered = filtered.filter((q) => bookmarkedIds.includes(q.id));
      if (filtered.length === 0) {
        alert("No tienes preguntas guardadas como favoritas en este filtro.");
        return;
      }
    }

    if (shuffle) {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    setActiveQuestions(filtered);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setStudyMode(mode);
    setTimer(0);
    setIsTimerRunning(true);
  };

  // Toggle bookmark
  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Select an answer
  const handleSelectOption = (questionId, optionIdx) => {
    if (studyMode === 'exam' && isSubmitted) return; // Locked on submission
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  // Submit exam
  const handleSubmitExam = () => {
    setIsSubmitted(true);
    setIsTimerRunning(false);
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Compute metrics
  const currentQuestion = activeQuestions[currentIndex];
  
  const scoreMetrics = useMemo(() => {
    if (!activeQuestions.length) return { correct: 0, total: 0, percentage: 0 };
    let correct = 0;
    activeQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: activeQuestions.length,
      percentage: Math.round((correct / activeQuestions.length) * 100)
    };
  }, [activeQuestions, selectedAnswers]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* HEADER / NAVBAR */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            onClick={() => { setStudyMode('menu'); setIsTimerRunning(false); }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Emprendimiento e Innovación
              </h1>
              <p className="text-xs text-slate-400">Preparador de Examen • 60 Preguntas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-750' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'}`}
              title={darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Back to Home if in quiz */}
            {studyMode !== 'menu' && (
              <button
                onClick={() => { setStudyMode('menu'); setIsTimerRunning(false); }}
                className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-colors ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-white border-slate-200 hover:bg-slate-100'}`}
              >
                Menú Principal
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* =================================================== */}
        {/* VISTA 1: MENÚ PRINCIPAL Y CONFIGURACIÓN */}
        {/* =================================================== */}
        {studyMode === 'menu' && (
          <div className="space-y-8 animate-fadeIn">
            {/* BANNER BIENVENIDA */}
            <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden ${darkMode ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-indigo-500/20' : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-white border-indigo-100'}`}>
              <div className="relative z-10 max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Repaso Exprés Nocturno
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Domina todo el contenido de la asignatura en una sesión
                </h2>
                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  Cuestionario completo interactivo estructurado exactamente sobre los 5 módulos oficiales: desde fundamentos del emprendedor, modelo Canvas y contabilidad básica, hasta legislación laboral y el sistema previsional en Chile.
                </p>
              </div>
            </div>

            {/* SELECCIÓN DE FILTRO DE MÓDULO */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold">Filtrar Contenido por Módulo</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                <button
                  onClick={() => setSelectedModule(0)}
                  className={`p-3 rounded-2xl text-left border transition-all text-xs sm:text-sm font-semibold flex flex-col justify-between h-24 ${
                    selectedModule === 0
                      ? 'bg-indigo-600 text-white border-indigo-500 ring-2 ring-indigo-500/30'
                      : darkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="opacity-80 text-[10px] uppercase tracking-wider">Todos</span>
                  <span className="font-bold text-sm">Los 5 Módulos (60 Preguntas)</span>
                  <span className="text-[10px] opacity-70">100% Cobertura</span>
                </button>

                {[
                  { id: 1, name: "Módulo 1", desc: "Fundamentos & Entorno" },
                  { id: 2, name: "Módulo 2", desc: "Ideas, Plan & Canvas" },
                  { id: 3, name: "Módulo 3", desc: "Formalización & IVA" },
                  { id: 4, name: "Módulo 4", desc: "Marketing & Flujo Caja" },
                  { id: 5, name: "Módulo 5", desc: "Contratos & Sueldos" }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(m.id)}
                    className={`p-3 rounded-2xl text-left border transition-all text-xs sm:text-sm flex flex-col justify-between h-24 ${
                      selectedModule === m.id
                        ? 'bg-indigo-600 text-white border-indigo-500 ring-2 ring-indigo-500/30'
                        : darkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="opacity-80 text-[10px] uppercase tracking-wider font-bold text-indigo-400">{m.name}</span>
                    <span className="font-semibold text-xs leading-tight">{m.desc}</span>
                    <span className="text-[10px] opacity-70">12 Preguntas</span>
                  </button>
                ))}
              </div>
            </div>

            {/* TARJETAS DE MODOS DE ESTUDIO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Modo Práctica / Tarjetas */}
              <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 transition-all hover:border-indigo-500/50 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Modo Práctica / Flashcards</h4>
                    <p className={`text-xs sm:text-sm mt-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Estudia pregunta a pregunta con retroalimentación instantánea, explicaciones detalladas y sin presión de tiempo. Ideal para la primera lectura.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => startMode('practice', false)}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    Iniciar Práctica
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modo Examen Simulado */}
              <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 transition-all hover:border-indigo-500/50 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Modo Examen Evaluado</h4>
                    <p className={`text-xs sm:text-sm mt-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Simulacro de prueba con contador de tiempo, sin respuestas a la vista hasta finalizar. Recibe un puntaje final y un desglose detallado.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => startMode('exam', false)}
                    className="py-3 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/20 transition-all text-center"
                  >
                    Orden Normal
                  </button>
                  <button
                    onClick={() => startMode('exam', true)}
                    className={`py-3 px-3 rounded-xl font-bold text-xs sm:text-sm border transition-all text-center ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'}`}
                  >
                    Aleatorio
                  </button>
                </div>
              </div>

              {/* Preguntas Favoritas / Guardadas */}
              <div className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 transition-all hover:border-indigo-500/50 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Preguntas Guardadas</h4>
                    <p className={`text-xs sm:text-sm mt-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Repasa únicamente las preguntas que has marcado con estrella o bookmark durante tus sesiones anteriores de estudio.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold px-1 text-slate-400">
                    <span>Guardadas en memoria:</span>
                    <span className="text-amber-400 font-bold">{bookmarkedIds.length} preguntas</span>
                  </div>
                  <button
                    disabled={bookmarkedIds.length === 0}
                    onClick={() => startMode('bookmarks', false)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      bookmarkedIds.length > 0
                        ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/20'
                        : 'bg-slate-800/50 text-slate-500 border border-slate-800 cursor-not-allowed'
                    }`}
                  >
                    Repasar Guardadas
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* SECCIÓN RESUMEN RÁPIDO DE MÓDULOS */}
            <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Resumen de Cobertura Temática Incluida
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Módulo 1: Fundamentos</span>
                  UE, Actitud vs Aptitud, Tipos de emprendedores (social, intra, inter, empresario), Macroentorno (PESTEL) y Recursos del proyecto.
                </div>
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Módulo 2: Planificación & Canvas</span>
                  Técnicas de creatividad (Delphi, Da Vinci, Galería de Famosos, Biomímesis), Plan de Negocios vs Trabajo, Gantt y 9 bloques Canvas.
                </div>
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Módulo 3: Formalización & Contabilidad</span>
                  Persona Natural vs Jurídica, Sociedades (SpA, Ltda., EIRL), Balance General (Activo = Pasivo + Capital) e IVA 19% en Chile.
                </div>
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Módulo 4: Marketing & Costos</span>
                  4 Ps del Marketing Mix, Flujo de Caja, Costos Fijos vs Variables, Punto de Equilibrio y Apoyo público (Corfo, Sercotec, Fosis, Indap).
                </div>
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Módulo 5: Legislación & Sueldos</span>
                  Código del Trabajo (Art. 3 y 7), Contratos, Liquidación de Sueldo (Haberes Imponibles/No imponibles) y Descuentos (AFP 10%, Salud 7%, AFC 0,6%).
                </div>
                <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="font-bold text-indigo-400 block mb-1">Estrategia de Estudio Nocturno</span>
                  Completa los 60 ítems en Modo Práctica para memorizar las justificaciones pedagógicas antes de ponerte a prueba en Modo Examen.
                </div>
              </div>
            </div>

          </div>
        )}

        {/* =================================================== */}
        {/* VISTA 2: CUESTIONARIO ACTIVO (PRÁCTICA / EXAMEN / FAVORITAS) */}
        {/* =================================================== */}
        {(studyMode === 'practice' || studyMode === 'exam' || studyMode === 'bookmarks') && currentQuestion && (
          <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
            
            {/* BARRA SUPERIOR DE ESTADO Y PROGRESO */}
            <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Pregunta {currentIndex + 1} de {activeQuestions.length}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  {currentQuestion.moduleName}
                </span>
              </div>

              {/* TIMER Y BOTÓN BOOKMARK */}
              <div className="flex items-center gap-3 ml-auto">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-xl border border-slate-700/50">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  {formatTime(timer)}
                </div>

                <button
                  onClick={() => toggleBookmark(currentQuestion.id)}
                  className={`p-2 rounded-xl border transition-all ${
                    bookmarkedIds.includes(currentQuestion.id)
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      : darkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-amber-500'
                  }`}
                  title="Guardar esta pregunta en Favoritas"
                >
                  {bookmarkedIds.includes(currentQuestion.id) ? (
                    <BookmarkCheck className="w-4 h-4 fill-amber-400" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* BARRA DE PROGRESO */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* TARJETA DE PREGUNTA PRINCIPAL */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              
              {/* Encabezado con Tag del Módulo */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  {currentQuestion.moduleName}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* OPCIONES DE RESPUESTA */}
              <div className="space-y-3">
                {currentQuestion.options.map((optionText, optIdx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === optIdx;
                  const isCorrectOption = optIdx === currentQuestion.correctAnswer;
                  
                  // Definición de colores según el modo
                  let btnStyle = darkMode 
                    ? 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 text-slate-200' 
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';

                  if (studyMode === 'practice') {
                    if (selectedAnswers[currentQuestion.id] !== undefined) {
                      if (isCorrectOption) {
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                      }
                    }
                  } else if (studyMode === 'exam') {
                    if (isSubmitted) {
                      if (isCorrectOption) {
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-indigo-600 border-indigo-500 text-white font-semibold shadow-md shadow-indigo-600/20';
                    }
                  } else {
                    // Bookmarks mode (funciona como práctica)
                    if (selectedAnswers[currentQuestion.id] !== undefined) {
                      if (isCorrectOption) {
                        btnStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-semibold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500/10 border-rose-500 text-rose-400';
                      }
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQuestion.id, optIdx)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 text-xs sm:text-base ${btnStyle}`}
                    >
                      <span className={`w-6 h-6 rounded-full border text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected 
                          ? 'border-indigo-400 bg-indigo-500/20 text-indigo-300' 
                          : 'border-slate-600 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-relaxed">{optionText}</span>

                      {/* Iconos de verificación en modo práctica o examen finalizado */}
                      {(studyMode === 'practice' || isSubmitted) && selectedAnswers[currentQuestion.id] !== undefined && (
                        <div>
                          {isCorrectOption && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                          {isSelected && !isCorrectOption && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* RETROALIMENTACIÓN / EXPLICACIÓN EN MODO PRÁCTICA */}
              {(studyMode === 'practice' || studyMode === 'bookmarks' || isSubmitted) && selectedAnswers[currentQuestion.id] !== undefined && (
                <div className={`p-5 rounded-2xl border space-y-2 animate-fadeIn ${
                  selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                    : 'bg-indigo-950/20 border-indigo-500/30 text-indigo-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <HelpCircle className="w-4 h-4 text-indigo-400" />
                    <span>Explicación Pedagógica:</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </div>

            {/* CONTROLES NAVEGACIÓN INFERIOR */}
            <div className="flex items-center justify-between gap-4">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => prev - 1)}
                className={`py-3 px-5 rounded-xl border font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                  currentIndex === 0
                    ? 'opacity-40 cursor-not-allowed border-slate-800 text-slate-600'
                    : darkMode ? 'bg-slate-900 border-slate-800 hover:bg-slate-800' : 'bg-white border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>

              {studyMode === 'exam' && !isSubmitted ? (
                <button
                  onClick={handleSubmitExam}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
                >
                  Finalizar Examen
                  <Check className="w-4 h-4" />
                </button>
              ) : null}

              {currentIndex < activeQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2 ml-auto"
                >
                  Siguiente
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setStudyMode('summary');
                  }}
                  className="py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/20 transition-all flex items-center gap-2 ml-auto"
                >
                  Ver Resultados Finales
                  <BarChart3 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* MAPA NAVEGADOR DE PREGUNTAS (GRID DE NÚMEROS) */}
            <div className={`p-4 rounded-2xl border space-y-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                <span>Navegador de Preguntas ({activeQuestions.length})</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span> Respondida</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-700 inline-block"></span> Pendiente</span>
                </div>
              </div>

              <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-20 gap-1.5">
                {activeQuestions.map((q, idx) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCurrent = idx === currentIndex;
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center border ${
                        isCurrent
                          ? 'ring-2 ring-indigo-400 border-indigo-400 bg-indigo-500/20 text-indigo-300'
                          : isAnswered
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : darkMode ? 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-600'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* =================================================== */}
        {/* VISTA 3: RESUMEN Y RESULTADOS FINALES */}
        {/* =================================================== */}
        {studyMode === 'summary' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
            
            {/* TARJETA DE PUNTAJE Y TROFEO */}
            <div className={`p-8 rounded-3xl border text-center space-y-6 relative overflow-hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-indigo-600 p-0.5 shadow-xl shadow-indigo-500/20 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-amber-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold">¡Sesión de Estudio Finalizada!</h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Aquí tienes el desglose de tu rendimiento en el cuestionario
                </p>
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs text-slate-400 block font-semibold mb-1">Puntaje Obtenido</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400">
                    {scoreMetrics.correct} / {scoreMetrics.total}
                  </span>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs text-slate-400 block font-semibold mb-1">Porcentaje</span>
                  <span className={`text-2xl sm:text-3xl font-extrabold ${scoreMetrics.percentage >= 60 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {scoreMetrics.percentage}%
                  </span>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700/60' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs text-slate-400 block font-semibold mb-1">Tiempo Total</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                    {formatTime(timer)}
                  </span>
                </div>
              </div>

              {/* Mensaje de Rendimiento */}
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm font-medium ${
                scoreMetrics.percentage >= 70
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              }`}>
                {scoreMetrics.percentage >= 80 
                  ? "¡Excelente trabajo! Tienes dominados los conceptos clave de Emprendimiento e Innovación para tu prueba."
                  : scoreMetrics.percentage >= 60
                  ? "¡Buen rendimiento! Has aprobado el simulacro. Te recomendamos repasar las respuestas incorrectas en Modo Práctica."
                  : "Estás cerca de la meta. Revisa las explicaciones de las preguntas falladas y vuelve a intentarlo."}
              </div>

              {/* BOTONES DE ACCIÓN */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={() => startMode(studyMode, false)}
                  className="py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reiniciar esta Sesión
                </button>

                <button
                  onClick={() => setStudyMode('menu')}
                  className={`py-3 px-5 rounded-xl border font-bold text-xs sm:text-sm transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'}`}
                >
                  Volver al Menú Principal
                </button>
              </div>

            </div>

            {/* DESGLOSE PREGUNTA POR PREGUNTA */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-400" />
                Revisión Detallada de Respuestas ({activeQuestions.length})
              </h3>

              <div className="space-y-3">
                {activeQuestions.map((q, index) => {
                  const userAns = selectedAnswers[q.id];
                  const isCorrect = userAns === q.correctAnswer;
                  
                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border space-y-3 transition-all ${
                        isCorrect
                          ? darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-white border-slate-200'
                          : 'bg-rose-950/10 border-rose-500/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                            Pregunta {index + 1} • {q.moduleName}
                          </span>
                          <h4 className="text-sm font-bold">{q.question}</h4>
                        </div>
                        {isCorrect ? (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Correcta
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0 flex items-center gap-1">
                            <XCircle className="w-3 h-3" /> Incorrecta
                          </span>
                        )}
                      </div>

                      <div className="text-xs space-y-1 pt-1 border-t border-slate-800/50">
                        <p className="text-slate-400">
                          Tu respuesta: <span className={isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                            {userAns !== undefined ? q.options[userAns] : 'Sin responder'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-slate-400">
                            Respuesta correcta: <span className="text-emerald-400 font-semibold">{q.options[q.correctAnswer]}</span>
                          </p>
                        )}
                      </div>

                      <div className={`p-3 rounded-xl text-xs ${darkMode ? 'bg-slate-800/50 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                        <span className="font-bold text-indigo-400 block mb-0.5">Explicación:</span>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className={`mt-12 border-t py-6 text-center text-xs ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
        <p>Aplicación de Estudio Nocturno • Asignatura Emprendimiento e Innovación (Módulos 1-5)</p>
      </footer>
    </div>
  );
}