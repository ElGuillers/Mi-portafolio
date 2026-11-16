export type Language = 'es' | 'en'

export interface Translations {
  nav: {
    about: string
    skills: string
    projects: string
    labs: string
    education: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    title: string
    subtitle: string
    exploreProjects: string
    contactMe: string
    scrollDown: string
  }
  about: {
    sectionTitle: string
    paragraphs: string[]
  }
  skills: {
    sectionTitle: string
    categories: {
      languages: string
      frameworks: string
      infrastructure: string
      ai: string
    }
  }
  projects: {
    sectionTitle: string
    filterAll: string
    viewRepo: string
    viewDemo: string
    status: {
      development: string
      completed: string
      paused: string
    }
    features: string
    technologies: string
    emptyState: string
  }
  labs: {
    sectionTitle: string
    sectionDescription: string
    objective: string
    architecture: string
    technologies: string
    challenges: string
    solutions: string
    learnings: string
  }
  education: {
    sectionTitle: string
    status: string
    certifications: string
    viewCredential: string
    credentialId: string
    showAll: string
    showLess: string
  }
  experience: {
    sectionTitle: string
    placeholder: string
  }
  contact: {
    sectionTitle: string
    subtitle: string
    emailLabel: string
    locationLabel: string
    availability: string
  }
  footer: {
    builtWith: string
    rights: string
  }
  theme: {
    light: string
    dark: string
  }
  language: {
    es: string
    en: string
  }
  backToTop: string
}

const es: Translations = {
  nav: {
    about: 'Sobre mí',
    skills: 'Tecnologías',
    projects: 'Proyectos',
    labs: 'Laboratorios',
    education: 'Formación',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    title: 'Desarrollador de software apasionado por construir soluciones tecnológicas.',
    subtitle: 'Exploro, desarrollo e implemento soluciones que conectan software, infraestructura y tecnología.',
    exploreProjects: 'Explorar proyectos',
    contactMe: 'Contáctame',
    scrollDown: 'Desplázate para explorar',
  },
  about: {
    sectionTitle: 'Sobre mí',
    paragraphs: [
      'Soy graduado y egresado de la Universidad Católica de Oriente (UCO) en Rionegro, Antioquia. Mi formación académica me ha brindado bases sólidas en ingeniería de sistemas, desarrollo de software, lógica de programación y resolución de problemas.',
      'Trabajo con tecnologías como Python, Java, JavaScript, TypeScript, Spring Boot, FastAPI, Angular Material y React Native, tanto en el desarrollo frontend como backend. Me interesa especialmente la construcción de APIs, el soporte de infraestructura y la arquitectura de aplicaciones.',
      'Más allá del desarrollo, tengo un fuerte interés por la infraestructura tecnológica. Realizo laboratorios personales donde experimento con Linux, Docker, servidores autohospedados, automatización de procesos y herramientas de inteligencia artificial como Ollama y modelos de lenguaje locales.',
      'Me motiva combinar el desarrollo de software con la infraestructura, la automatización y la inteligencia artificial para crear soluciones prácticas y eficientes.',
    ],
  },
  skills: {
    sectionTitle: 'Tecnologías y habilidades',
    categories: {
      languages: 'Lenguajes y desarrollo',
      frameworks: 'Frameworks y herramientas',
      infrastructure: 'Infraestructura',
      ai: 'Inteligencia artificial',
    },
  },
  projects: {
    sectionTitle: 'Proyectos destacados',
    filterAll: 'Todos',
    viewRepo: 'Ver código',
    viewDemo: 'Ver ejecución',
    status: {
      development: 'En desarrollo',
      completed: 'Completado',
      paused: 'Pausado',
    },
    features: 'Funcionalidades',
    technologies: 'Tecnologías',
    emptyState: 'No hay proyectos en esta categoría todavía.',
  },
  labs: {
    sectionTitle: 'Laboratorios personales',
    sectionDescription: 'Experimentos técnicos y entornos de aprendizaje donde exploro tecnologías, resuelvo problemas y profundizo en áreas de interés.',
    objective: 'Objetivo',
    architecture: 'Arquitectura',
    technologies: 'Tecnologías',
    challenges: 'Desafíos',
    solutions: 'Soluciones',
    learnings: 'Aprendizajes',
  },
  education: {
    sectionTitle: 'Formación académica y certificaciones',
    status: 'Estado',
    certifications: 'Licencias y certificaciones',
    viewCredential: 'Ver credencial',
    credentialId: 'ID de credencial',
    showAll: 'Ver todas las certificaciones',
    showLess: 'Mostrar menos',
  },
  experience: {
    sectionTitle: 'Experiencia',
    placeholder: 'Sección disponible para documentar experiencia profesional, actividades de soporte técnico, despliegue de aplicaciones y desarrollo de soluciones.',
  },
  contact: {
    sectionTitle: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente o quieres conversar sobre tecnología? No dudes en contactarme.',
    emailLabel: 'Correo electrónico',
    locationLabel: 'Ubicación',
    availability: 'Disponible para oportunidades laborales y proyectos colaborativos.',
  },
  footer: {
    builtWith: 'Desarrollado con React, TypeScript y Vite.',
    rights: 'Todos los derechos reservados.',
  },
  theme: {
    light: 'Claro',
    dark: 'Oscuro',
  },
  language: {
    es: 'Español',
    en: 'English',
  },
  backToTop: 'Volver al inicio',
}

const en: Translations = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    labs: 'Labs',
    education: 'Education',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    title: 'Software developer passionate about building technology-driven solutions.',
    subtitle: 'I explore, develop and deploy solutions that bridge software, infrastructure and technology.',
    exploreProjects: 'Explore projects',
    contactMe: 'Get in touch',
    scrollDown: 'Scroll to explore',
  },
  about: {
    sectionTitle: 'About me',
    paragraphs: [
      'I am a graduate and alumnus of Universidad Católica de Oriente (UCO) in Rionegro, Antioquia. My academic background has provided me with a strong foundation in systems engineering, software development, programming logic, and problem-solving.',
      'I work with technologies such as Python, Java, JavaScript, TypeScript, Spring Boot, FastAPI, Angular Material and React Native across both frontend and backend development. I have a particular interest in API design, infrastructure support and application architecture.',
      "Beyond development, I have a deep interest in technology infrastructure. I run personal labs where I experiment with Linux, Docker, self-hosted services, process automation and AI tools like Ollama and local language models.",
      "I'm driven by the challenge of combining software development with infrastructure, automation and artificial intelligence to build practical, efficient solutions.",
    ],
  },
  skills: {
    sectionTitle: 'Skills & Technologies',
    categories: {
      languages: 'Languages & Development',
      frameworks: 'Frameworks & Tools',
      infrastructure: 'Infrastructure',
      ai: 'Artificial Intelligence',
    },
  },
  projects: {
    sectionTitle: 'Featured Projects',
    filterAll: 'All',
    viewRepo: 'View code',
    viewDemo: 'Live execution',
    status: {
      development: 'In development',
      completed: 'Completed',
      paused: 'Paused',
    },
    features: 'Features',
    technologies: 'Technologies',
    emptyState: 'No projects in this category yet.',
  },
  labs: {
    sectionTitle: 'Personal Labs',
    sectionDescription: 'Technical experiments and learning environments where I explore technologies, solve problems and dive deeper into areas of interest.',
    objective: 'Objective',
    architecture: 'Architecture',
    technologies: 'Technologies',
    challenges: 'Challenges',
    solutions: 'Solutions',
    learnings: 'Learnings',
  },
  education: {
    sectionTitle: 'Education & Certifications',
    status: 'Status',
    certifications: 'Licenses & Certifications',
    viewCredential: 'View credential',
    credentialId: 'Credential ID',
    showAll: 'View all certifications',
    showLess: 'Show less',
  },
  experience: {
    sectionTitle: 'Experience',
    placeholder: 'This section is available to document professional experience, technical support activities, application deployment and solution development.',
  },
  contact: {
    sectionTitle: 'Contact',
    subtitle: "Have a project in mind or want to talk about technology? Don't hesitate to reach out.",
    emailLabel: 'Email',
    locationLabel: 'Location',
    availability: 'Available for job opportunities and collaborative projects.',
  },
  footer: {
    builtWith: 'Built with React, TypeScript and Vite.',
    rights: 'All rights reserved.',
  },
  theme: {
    light: 'Light',
    dark: 'Dark',
  },
  language: {
    es: 'Español',
    en: 'English',
  },
  backToTop: 'Back to top',
}

export const translations: Record<Language, Translations> = { es, en }
