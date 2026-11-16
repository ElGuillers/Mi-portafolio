// ============================================================
// TECNOLOGÍAS — Edita o agrega tecnologías aquí
// ============================================================

export interface Skill {
  name: string
  icon: string // Lucide icon name
  category: 'languages' | 'frameworks' | 'infrastructure' | 'ai'
}

export const skills: Skill[] = [
  // Lenguajes y desarrollo
  { name: 'Python', icon: 'code-2', category: 'languages' },
  { name: 'JavaScript', icon: 'file-code', category: 'languages' },
  { name: 'TypeScript', icon: 'file-type', category: 'languages' },
  { name: 'Java', icon: 'coffee', category: 'languages' },
  { name: 'PostgreSQL', icon: 'database', category: 'languages' },
  { name: 'HTML5', icon: 'file-text', category: 'languages' },
  { name: 'CSS3', icon: 'palette', category: 'languages' },

  // Frameworks y herramientas
  { name: 'Spring Boot', icon: 'layers', category: 'frameworks' },
  { name: 'FastAPI', icon: 'zap', category: 'frameworks' },
  { name: 'React Native', icon: 'smartphone', category: 'frameworks' },
  { name: 'Angular Material', icon: 'layout-grid', category: 'frameworks' },
  { name: 'Vite', icon: 'flame', category: 'frameworks' },
  { name: 'Git', icon: 'git-branch', category: 'frameworks' },

  // Infraestructura
  { name: 'Linux', icon: 'terminal', category: 'infrastructure' },
  { name: 'Docker', icon: 'container', category: 'infrastructure' },
  { name: 'Active Directory', icon: 'users', category: 'infrastructure' },
  { name: 'Servidores', icon: 'server', category: 'infrastructure' },
  { name: 'Redes', icon: 'network', category: 'infrastructure' },
  { name: 'Bash', icon: 'terminal-square', category: 'infrastructure' },

  // Inteligencia artificial
  { name: 'Ollama', icon: 'brain', category: 'ai' },
  { name: 'Modelos locales', icon: 'cpu', category: 'ai' },
  { name: 'LLMs', icon: 'message-square', category: 'ai' },
]
