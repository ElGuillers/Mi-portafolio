// ============================================================
// EXPERIENCIA — Experiencia profesional de Guillermo Gil
// ============================================================

export interface Experience {
  id: string
  role: {
    es: string
    en: string
  }
  company: string
  companyUrl?: string
  employmentType?: {
    es: string
    en: string
  }
  location?: {
    es: string
    en: string
  } | string
  period: {
    es: string
    en: string
  }
  summary?: {
    es: string
    en: string
  }
  description: {
    es: string[]
    en: string[]
  }
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: 'prointimo',
    role: {
      es: 'Practicante de Ingeniería de Sistemas',
      en: 'Systems Engineer Intern',
    },
    company: 'PROINTIMO S.A.S.',
    companyUrl: 'https://www.linkedin.com/company/69022762/',
    employmentType: {
      es: 'Contrato de formación · Presencial',
      en: 'Internship contract · On-site',
    },
    location: {
      es: 'Medellín, Antioquia, Colombia',
      en: 'Medellin, Antioquia, Colombia',
    },
    period: {
      es: 'Nov. 2025 — May. 2026 · 7 meses',
      en: 'Nov 2025 — May 2026 · 7 mos',
    },
    summary: {
      es: 'Liderazgo en operaciones de soporte TI corporativo y desarrollo interno de software, manteniendo la alta disponibilidad de la infraestructura e impulsando iniciativas de transformación digital.',
      en: 'Led corporate IT support operations and internal software development, maintaining infrastructure uptime while driving digital transformation initiatives.',
    },
    description: {
      es: [
        'Diseño y desarrollo de una aplicación web empresarial full-stack con Java, Spring Boot, Angular, TypeScript y PostgreSQL para optimizar procesos y operaciones del negocio.',
        'Soporte técnico Tier 1 y Tier 2 para más de 80 usuarios finales, resolviendo de 15 a 20 incidencias diarias bajo SLA de 24 horas con una tasa de satisfacción del 98%.',
        'Administración de más de 100 cuentas de usuario, asignación de permisos de acceso y gestión de servicios de directorio mediante Active Directory y Microsoft 365.',
        'Despliegue, diagnóstico y mantenimiento preventivo/correctivo de hardware y software en más de 30 estaciones de trabajo, garantizando la continuidad operativa y minimizando tiempos de inactividad.',
      ],
      en: [
        'Designed and developed a full-stack enterprise web application using Java, Spring Boot, Angular, TypeScript, and PostgreSQL to optimize business operations.',
        'Provided Tier 1 & 2 technical support for 80+ end-users, resolving 15–20 daily tickets under a 24-hour SLA with a 98% user satisfaction rate.',
        'Managed 100+ user accounts, access permissions, and directory services through Active Directory and Microsoft 365.',
        'Performed deployment, hardware/software troubleshooting, and maintenance for 30+ workstations, ensuring operational continuity and minimizing downtime.',
      ],
    },
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Active Directory',
      'Microsoft 365',
      'Soporte TI / Tier 1 & 2',
    ],
  },
  {
    id: 'tractores-arauca',
    role: {
      es: 'Auxiliar de Sistemas',
      en: 'IT Systems Assistant',
    },
    company: 'Tractores y Combinadas de Arauca S.A.S',
    employmentType: {
      es: 'Jornada parcial · Remoto',
      en: 'Part-time · Remote',
    },
    location: {
      es: 'Colombia (En remoto)',
      en: 'Colombia (Remote)',
    },
    period: {
      es: 'Ene. 2021 — Dic. 2022 · 2 años',
      en: 'Jan 2021 — Dec 2022 · 2 yrs',
    },
    summary: {
      es: 'Mantenimiento de infraestructura tecnológica de hardware y software en toda la organización, garantizando alta disponibilidad y continuidad en las operaciones diarias.',
      en: 'Maintained IT hardware and software infrastructure across the organization, ensuring high availability and seamless daily operations.',
    },
    description: {
      es: [
        'Gestión y ejecución de planes de mantenimiento preventivo y correctivo para más de 30 computadores y estaciones de trabajo, alcanzando y sosteniendo una disponibilidad del 98%.',
        'Control y auditoría del inventario tecnológico y activos de equipo de cómputo para salvaguardar la continuidad operativa.',
        'Soporte técnico oportuno y resolución de fallas en hardware, sistemas operativos y software a nivel de usuario para el personal interno.',
      ],
      en: [
        'Managed hardware and software maintenance for 30+ computers and workstations, achieving and sustaining a 98% uptime.',
        'Controlled technology inventory and equipment assets to maintain operational continuity.',
        'Provided timely technical troubleshooting and hardware support to internal staff.',
      ],
    },
    technologies: [
      'Hardware & Software',
      'Soporte Técnico',
      'Sistemas Operativos',
      'Soporte Remoto',
      'Inventario TI',
      'Mantenimiento Preventivo',
    ],
  },
]
