// ============================================================
// CERTIFICACIONES Y CURSOS — Licencias y certificaciones
// ============================================================

export interface Certification {
  id: string
  title: string
  issuer: string
  issueDate: {
    es: string
    en: string
  }
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
  badge?: string
}

export const certifications: Certification[] = [
  {
    id: 'efset-c1',
    title: 'Certificado EF SET Inglés 66/100 (C1 Avanzado)',
    issuer: 'EF SET',
    issueDate: {
      es: 'C1 Avanzado · 66/100',
      en: 'C1 Advanced · 66/100',
    },
    credentialUrl: 'https://cert.efset.org/es/xk81wE',
    skills: ['Inglés C1 Avanzado', 'Comprensión Lectora y Auditiva'],
    badge: 'C1',
  },
  {
    id: 'dragonjar-pentesting',
    title: 'Curso Gratuito de Introducción al Pentesting Certificate',
    issuer: 'DragonJAR Seguridad Informática',
    issueDate: {
      es: 'Mayo 2025',
      en: 'May 2025',
    },
    credentialId: 'fca22135627646ef81a28bb2f3997ba1',
    credentialUrl: 'https://certificados.dragonjar.org/c/fca22135627646ef81a28bb2f3997ba1',
    skills: ['Ciberseguridad', 'Pentesting', 'Seguridad Ofensiva'],
  },
  {
    id: 'alura-one-g8-programacion',
    title: 'Formación Principiante en Programación G8 - ONE',
    issuer: 'Alura Latam · Oracle Next Education',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: '372c70f9-076e-4502-8470-ae6c103dd72b',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/372c70f9-076e-4502-8470-ae6c103dd72b?lang',
    skills: ['Desarrollo Frontend', 'CSS', 'JavaScript'],
  },
  {
    id: 'alura-logica-js',
    title: 'Formación Lógica de programación con JavaScript',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: 'ed87f81f-6a52-48cf-9aa4-30bcf4b67603',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/ed87f81f-6a52-48cf-9aa4-30bcf4b67603?lang',
    skills: ['JavaScript', 'Lógica de Programación', 'Frontend'],
  },
  {
    id: 'alura-chatgpt',
    title: 'ChatGPT: optimizando la calidad de los resultados',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: '8010bc39-865a-43f7-be9e-4cef67fa2d50',
    credentialUrl: 'https://app.aluracursos.com/certificate/8010bc39-865a-43f7-be9e-4cef67fa2d50?lang',
    skills: ['Inteligencia Artificial', 'Prompt Engineering', 'ChatGPT'],
  },
  {
    id: 'alura-challenge-amigo-secreto',
    title: 'Practicando Lógica de Programación: Challenge Amigo secreto',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: '0730d4c3-b6d5-448f-9c85-78b9f756efc1',
    credentialUrl: 'https://app.aluracursos.com/certificate/0730d4c3-b6d5-448f-9c85-78b9f756efc1?lang',
    skills: ['JavaScript', 'Algoritmos', 'Desarrollo Frontend'],
    badge: 'Insignia',
  },
  {
    id: 'alura-git-github',
    title: 'Git y GitHub: repositorio, commit y versiones',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: 'a347363d-2d50-4c47-ae8b-4badae9680af',
    credentialUrl: 'https://app.aluracursos.com/certificate/a347363d-2d50-4c47-ae8b-4badae9680af?lang',
    skills: ['Git', 'GitHub', 'Control de Versiones'],
  },
  {
    id: 'alura-html-css-flexbox',
    title: 'HTML y CSS: Clases, Posicionamiento y Flexbox',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: 'fc504a42-096e-4971-a56d-6bbde806e57c',
    credentialUrl: 'https://app.aluracursos.com/certificate/fc504a42-096e-4971-a56d-6bbde806e57c?lang',
    skills: ['HTML5', 'CSS3', 'Flexbox'],
  },
  {
    id: 'alura-html-css-ambientes',
    title: 'HTML y CSS: ambientes de desarrollo, estructura de archivos y tags',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: '7e12af9a-46b2-4cb4-bae5-b5975551f47e',
    credentialUrl: 'https://app.aluracursos.com/certificate/7e12af9a-46b2-4cb4-bae5-b5975551f47e?lang',
    skills: ['HTML5', 'CSS3', 'Estructura Web'],
  },
  {
    id: 'alura-js-primeros-pasos',
    title: 'Lógica de programación: sumérgete en la programación con JavaScript',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Febrero 2025',
      en: 'February 2025',
    },
    credentialId: '749023e6-2bda-4fa8-b990-ccde15a691ae',
    credentialUrl: 'https://app.aluracursos.com/certificate/749023e6-2bda-4fa8-b990-ccde15a691ae?lang',
    skills: ['JavaScript', 'Desarrollo Frontend'],
  },
  {
    id: 'alura-js-funciones-listas',
    title: 'Lógica de programación: explorar funciones y listas',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: 'a18f2305-7a97-420d-bba0-2d7c8dcba9dd',
    credentialUrl: 'https://app.aluracursos.com/certificate/a18f2305-7a97-420d-bba0-2d7c8dcba9dd?lang',
    skills: ['JavaScript', 'Funciones', 'Listas'],
  },
  {
    id: 'alura-one-g8-personal',
    title: 'Formación Desarrollo Personal G8 - ONE',
    issuer: 'Alura Latam · Oracle Next Education',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: '296c8b7e-f50f-4346-b9d4-e29ec75c7299',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/296c8b7e-f50f-4346-b9d4-e29ec75c7299?lang',
    skills: ['Soft Skills', 'Productividad', 'Crecimiento Profesional'],
  },
  {
    id: 'alura-foco',
    title: 'Foco: Enfocarse trae más resultados para el día a día',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Marzo 2025',
      en: 'March 2025',
    },
    credentialId: 'dd6e3221-ecd8-41f8-beb5-bd4fc71fd205',
    credentialUrl: 'https://app.aluracursos.com/certificate/dd6e3221-ecd8-41f8-beb5-bd4fc71fd205?lang',
    skills: ['Enfoque', 'Productividad Personal'],
  },
  {
    id: 'alura-aprender-a-aprender',
    title: 'Aprender a aprender: técnicas para tu autodesarrollo',
    issuer: 'Alura Latam',
    issueDate: {
      es: 'Febrero 2025',
      en: 'February 2025',
    },
    credentialId: 'ed6d7d04-3854-4a86-aab8-6fafabac90aa',
    credentialUrl: 'https://app.aluracursos.com/certificate/ed6d7d04-3854-4a86-aab8-6fafabac90aa?lang',
    skills: ['Autodesarrollo', 'Técnicas de Aprendizaje'],
  },
]
