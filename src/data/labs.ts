// ============================================================
// LABORATORIOS PERSONALES — Documenta tus experimentos aquí
// ============================================================

export interface Lab {
  id: string
  name: string
  icon: string // Lucide icon name
  description: {
    es: string
    en: string
  }
  objective: {
    es: string
    en: string
  }
  architecture?: {
    es: string
    en: string
  }
  technologies: string[]
  challenges?: {
    es: string[]
    en: string[]
  }
  solutions?: {
    es: string[]
    en: string[]
  }
  learnings: {
    es: string[]
    en: string[]
  }
  image?: string // Ruta a la imagen (en /public/labs/)
  status: 'active' | 'paused' | 'archived'
}

export const labs: Lab[] = [
  {
    id: 'homelab',
    name: 'Homelab',
    icon: 'server',
    description: {
      es: 'Infraestructura personal basada en Linux y Docker para experimentar con servidores, servicios autohospedados y administración de sistemas.',
      en: 'Personal infrastructure based on Linux and Docker to experiment with servers, self-hosted services and system administration.',
    },
    objective: {
      es: 'Construir y mantener una infraestructura personal para aprender sobre administración de servidores, redes, contenedores y despliegue de servicios.',
      en: 'Build and maintain a personal infrastructure to learn about server administration, networking, containers and service deployment.',
    },
    architecture: {
      es: 'Servidor basado en Linux con múltiples contenedores Docker, gestión de redes internas y servicios accesibles de forma local.',
      en: 'Linux-based server with multiple Docker containers, internal network management and locally accessible services.',
    },
    technologies: ['Linux', 'Docker', 'Docker Compose', 'Bash', 'Networking'],
    challenges: {
      es: [
        'Configuración de redes internas entre contenedores',
        'Gestión de persistencia de datos',
        'Monitoreo de recursos del sistema',
      ],
      en: [
        'Internal network configuration between containers',
        'Data persistence management',
        'System resource monitoring',
      ],
    },
    solutions: {
      es: [
        'Implementación de redes Docker personalizadas',
        'Uso de volúmenes para persistencia de datos',
        'Scripts de monitoreo automatizados',
      ],
      en: [
        'Implementation of custom Docker networks',
        'Use of volumes for data persistence',
        'Automated monitoring scripts',
      ],
    },
    learnings: {
      es: [
        'Administración de servidores Linux',
        'Orquestación de contenedores Docker',
        'Gestión de redes y servicios',
        'Automatización con scripts Bash',
      ],
      en: [
        'Linux server administration',
        'Docker container orchestration',
        'Network and service management',
        'Bash scripting automation',
      ],
    },
    status: 'active',
  },
  {
    id: 'admin-panel',
    name: 'Panel de Administración',
    icon: 'layout-dashboard',
    description: {
      es: 'Backend desarrollado con FastAPI para monitorear recursos del sistema, gestionar servicios y visualizar métricas en tiempo real.',
      en: 'Backend built with FastAPI to monitor system resources, manage services and visualize real-time metrics.',
    },
    objective: {
      es: 'Desarrollar una API y panel de control para monitorear y administrar recursos de servidores de forma remota.',
      en: 'Develop an API and control panel to remotely monitor and manage server resources.',
    },
    technologies: ['Python', 'FastAPI', 'Docker', 'Linux'],
    learnings: {
      es: [
        'Desarrollo de APIs con FastAPI',
        'Monitoreo de recursos del sistema con Python',
        'Integración de backend con servicios de infraestructura',
      ],
      en: [
        'API development with FastAPI',
        'System resource monitoring with Python',
        'Backend integration with infrastructure services',
      ],
    },
    status: 'active',
  },
  {
    id: 'local-ai',
    name: 'IA Local',
    icon: 'brain',
    description: {
      es: 'Experimentación con Ollama y modelos de lenguaje locales para explorar capacidades de inteligencia artificial sin depender de servicios en la nube.',
      en: 'Experimentation with Ollama and local language models to explore AI capabilities without relying on cloud services.',
    },
    objective: {
      es: 'Explorar el despliegue y uso de modelos de inteligencia artificial de forma local, evaluando rendimiento, casos de uso y limitaciones.',
      en: 'Explore the deployment and use of AI models locally, evaluating performance, use cases and limitations.',
    },
    technologies: ['Ollama', 'Python', 'LLMs', 'Docker'],
    learnings: {
      es: [
        'Despliegue de modelos de lenguaje locales',
        'Integración de IA con aplicaciones propias',
        'Evaluación de rendimiento y requisitos de hardware',
        'Exploración de diferentes modelos y sus capacidades',
      ],
      en: [
        'Local language model deployment',
        'AI integration with custom applications',
        'Performance evaluation and hardware requirements',
        'Exploration of different models and their capabilities',
      ],
    },
    status: 'active',
  },
  {
    id: 'game-servers',
    name: 'Servidores de Videojuegos',
    icon: 'gamepad-2',
    description: {
      es: 'Configuración, administración y despliegue de servidores dedicados para videojuegos, incluyendo gestión de recursos y automatización.',
      en: 'Configuration, administration and deployment of dedicated game servers, including resource management and automation.',
    },
    objective: {
      es: 'Aprender sobre administración de servidores de juegos, gestión de recursos, networking y automatización de despliegues.',
      en: 'Learn about game server administration, resource management, networking and deployment automation.',
    },
    technologies: ['Linux', 'Docker', 'Bash', 'Networking'],
    learnings: {
      es: [
        'Administración de servidores dedicados',
        'Gestión de puertos y configuración de red',
        'Automatización de actualizaciones y backups',
        'Optimización de rendimiento',
      ],
      en: [
        'Dedicated server administration',
        'Port management and network configuration',
        'Update and backup automation',
        'Performance optimization',
      ],
    },
    status: 'active',
  },
  {
    id: 'automation',
    name: 'Automatización',
    icon: 'settings',
    description: {
      es: 'Automatización de procesos y administración de servicios utilizando scripts, cron jobs y herramientas de orquestación.',
      en: 'Process automation and service administration using scripts, cron jobs and orchestration tools.',
    },
    objective: {
      es: 'Automatizar tareas repetitivas, gestión de servicios y procesos de administración para mejorar la eficiencia operativa.',
      en: 'Automate repetitive tasks, service management and administration processes to improve operational efficiency.',
    },
    technologies: ['Bash', 'Python', 'Cron', 'Docker', 'Linux'],
    learnings: {
      es: [
        'Scripting avanzado en Bash y Python',
        'Programación de tareas con cron',
        'Gestión automatizada de servicios',
        'Monitoreo y alertas automatizadas',
      ],
      en: [
        'Advanced Bash and Python scripting',
        'Task scheduling with cron',
        'Automated service management',
        'Automated monitoring and alerts',
      ],
    },
    status: 'active',
  },
]
