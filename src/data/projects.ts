// ============================================================
// PROYECTOS DESTACADOS — Proyectos reales de Guillermo Gil
// ============================================================

export type ProjectStatus = 'development' | 'completed' | 'paused'
export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'infrastructure' | 'ai' | 'mobile'

export interface Project {
  id: string
  name: string
  description: {
    es: string
    en: string
  }
  image?: string // Ruta a la imagen (en /public/projects/)
  category: ProjectCategory
  technologies: string[]
  features: {
    es: string[]
    en: string[]
  }
  status: ProjectStatus
  repoUrl?: string
  demoUrl?: string // Enlace a la ejecución / demo en vivo
}

// Categorías para filtros (con traducciones)
export const projectCategories: Record<ProjectCategory, { es: string; en: string }> = {
  fullstack: { es: 'Full Stack', en: 'Full Stack' },
  frontend: { es: 'Frontend', en: 'Frontend' },
  backend: { es: 'Backend', en: 'Backend' },
  infrastructure: { es: 'Infraestructura', en: 'Infrastructure' },
  ai: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
  mobile: { es: 'Móvil', en: 'Mobile' },
}

export const projects: Project[] = [
  {
    id: 'satisfactory-planner',
    name: 'FICSIT Production Planner & Calculator',
    description: {
      es: 'Calculadora y planificador de producción industrial para Satisfactory 1.0/1.2. Modela matemáticamente cadenas de manufactura, balance de splitters, ratios de consumo eléctrico y planos interactivos en 2D.',
      en: 'Industrial production planner and calculator for Satisfactory 1.0/1.2. Mathematically models manufacturing chains, splitter balancing, power consumption ratios, and interactive 2D blueprints.',
    },
    image: '/projects/satisfactory-planner.jpg',
    category: 'frontend',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Algoritmos BFS', 'Modelado Matemático'],
    features: {
      es: [
        'Cálculo exacto de flujo de materiales y overclocking mediante fórmulas exponenciales',
        'Generador de planos aéreos 2D interactivos para centrales eléctricas (carbón, combustible y nuclear)',
        'Algoritmo BFS optimizado con memoización para navegación fluida a 60 FPS',
        'Catálogo visual FICSIT con soporte 100% offline y assets integrados',
      ],
      en: [
        'Exact material flow and overclocking calculations using exponential formulas',
        'Interactive 2D aerial blueprint generator for power plants (coal, fuel, and nuclear)',
        'Optimized BFS algorithm with memoization for smooth 60 FPS navigation',
        'FICSIT visual catalog with 100% offline support and embedded assets',
      ],
    },
    status: 'completed',
    repoUrl: 'https://github.com/ElGuillers/Satisfactory-Planning',
    demoUrl: 'https://satisfactory-planning.vercel.app/', // <-- INSERTA AQUÍ EL LINK DE EJECUCIÓN (ej: 'https://tu-demo.vercel.app')
  },
  {
    id: 'financial-app',
    name: 'FinancialApp — Progressive Web App',
    description: {
      es: 'Aplicación web progresiva (PWA) para gestión y análisis de finanzas personales. Incorpora visualizaciones interactivas de ingresos, gastos y presupuestos con Recharts y arquitectura basada en componentes React.',
      en: 'Progressive Web App (PWA) for personal finance management and analysis. Features interactive income, expense, and budget visualizations using Recharts and React component-based architecture.',
    },
    image: '/projects/financial-app.jpg',
    category: 'frontend',
    technologies: ['React', 'JavaScript', 'Vite', 'Recharts', 'PWA', 'Lucide Icons'],
    features: {
      es: [
        'Dashboard analítico con gráficos interactivos de balance y tendencias',
        'Compatibilidad PWA para instalación nativa en dispositivos móviles y de escritorio',
        'Gestión global de estado mediante React Context API',
        'Diseño responsive adaptado a múltiples resoluciones de pantalla',
      ],
      en: [
        'Analytical dashboard with interactive balance and trend charts',
        'PWA compatibility for native-like installation on mobile and desktop',
        'Global state management using React Context API',
        'Responsive design tailored for multiple screen resolutions',
      ],
    },
    status: 'completed',
    repoUrl: 'https://github.com/ElGuillers/FinancialApp',
    demoUrl: 'https://financial-app-henna-alpha.vercel.app/', // <-- INSERTA AQUÍ EL LINK DE EJECUCIÓN (ej: 'https://tu-financial-app.vercel.app')
  },
  {
    id: 'fourier-image-audio',
    name: 'Procesamiento de Señales & Transformada de Fourier',
    description: {
      es: 'Proyecto de matemáticas aplicadas e ingeniería que convierte imágenes bidimensionales en señales de audio espectrales y las reconstruye utilizando la Transformada Rápida de Fourier (FFT) en Python.',
      en: 'Applied mathematics and engineering project that converts 2D images into spectral audio signals and reconstructs them using Fast Fourier Transform (FFT) in Python.',
    },
    image: '/projects/fourier-image-audio.jpg',
    category: 'backend',
    technologies: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Transformada de Fourier (FFT)'],
    features: {
      es: [
        'Conversión bidireccional entre matrices de píxeles y frecuencias sonoras espectrales',
        'Implementación de algoritmos de Transformada de Fourier (FFT e IFFT)',
        'Interfaz gráfica interactiva para visualización de espectrogramas y señales',
        'Análisis de pérdida de señal y fidelidad en la reconstrucción',
      ],
      en: [
        'Bidirectional conversion between pixel matrices and spectral sound frequencies',
        'Implementation of Fourier Transform algorithms (FFT and IFFT)',
        'Interactive GUI for spectrogram and signal visualization',
        'Analysis of signal loss and reconstruction fidelity',
      ],
    },
    status: 'completed',
    repoUrl: 'https://github.com/ElGuillers/Especiales-trabajo-final',
    demoUrl: '', // <-- INSERTA AQUÍ EL LINK DE EJECUCIÓN (ej: Google Colab, notebook o demo web)
  },
  {
    id: 'colombiapoly',
    name: 'Colombiapoly — Motor de Juego en Java',
    description: {
      es: 'Juego de estrategia por turnos inspirado en Monopoly adaptado a regiones de Colombia, desarrollado en Java puro con énfasis en Programación Orientada a Objetos (POO), patrones de diseño y lógica financiera.',
      en: 'Turn-based strategy game inspired by Monopoly adapted to regions of Colombia, built in pure Java emphasizing Object-Oriented Programming (OOP), design patterns, and financial game logic.',
    },
    image: '/projects/colombiapoly.jpg',
    category: 'backend',
    technologies: ['Java', 'POO', 'Patrones de Diseño', 'Lógica de Turnos'],
    features: {
      es: [
        'Diseño modular basado en principios SOLID y encapsulamiento',
        'Sistema de transacciones, adquisición de propiedades y bancarrota',
        'Motor de turnos y eventos aleatorios contextualizados',
      ],
      en: [
        'Modular design based on SOLID principles and encapsulation',
        'Transaction, property acquisition, and bankruptcy system',
        'Turn engine and contextualized random events',
      ],
    },
    status: 'completed',
    repoUrl: 'https://github.com/ElGuillers/Colombiapoly',
    demoUrl: '', // <-- INSERTA AQUÍ EL LINK DE EJECUCIÓN (ej: web build, video o demo ejecutable)
  },
]
