import {
  Code2, FileCode, FileText, Palette, FileType,
  Smartphone, LayoutGrid, Zap, Flame, GitBranch,
  Terminal, Container, Server, Network, TerminalSquare,
  Brain, Cpu, MessageSquare, Coffee, Database, Layers, Users,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills, type Skill } from '../data/skills'
import '../styles/sections.css'

const iconMap: Record<string, ReactNode> = {
  'code-2': <Code2 size={16} />,
  'file-code': <FileCode size={16} />,
  'file-text': <FileText size={16} />,
  'palette': <Palette size={16} />,
  'file-type': <FileType size={16} />,
  'smartphone': <Smartphone size={16} />,
  'layout-grid': <LayoutGrid size={16} />,
  'zap': <Zap size={16} />,
  'flame': <Flame size={16} />,
  'git-branch': <GitBranch size={16} />,
  'terminal': <Terminal size={16} />,
  'container': <Container size={16} />,
  'server': <Server size={16} />,
  'network': <Network size={16} />,
  'terminal-square': <TerminalSquare size={16} />,
  'brain': <Brain size={16} />,
  'cpu': <Cpu size={16} />,
  'message-square': <MessageSquare size={16} />,
  'coffee': <Coffee size={16} />,
  'database': <Database size={16} />,
  'layers': <Layers size={16} />,
  'users': <Users size={16} />,
}

const categoryIcons: Record<string, ReactNode> = {
  languages: <Code2 size={16} />,
  frameworks: <LayoutGrid size={16} />,
  infrastructure: <Server size={16} />,
  ai: <Brain size={16} />,
}

export function Skills() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  const categories = ['languages', 'frameworks', 'infrastructure', 'ai'] as const

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter(s => s.category === cat)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.skills.sectionTitle}</h2>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div key={cat} className={`card fade-in fade-in-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
              <h3 className="skill-category-title">
                {categoryIcons[cat]}
                {t.skills.categories[cat]}
              </h3>
              <div className="skill-list">
                {grouped[cat].map(skill => (
                  <div key={skill.name} className="skill-item">
                    {iconMap[skill.icon] || <Code2 size={16} />}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
