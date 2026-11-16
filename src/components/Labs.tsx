import { useState } from 'react'
import {
  Server, LayoutDashboard, Brain, Gamepad2, Settings,
  ChevronDown, ChevronUp,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { labs } from '../data/labs'
import '../styles/labs.css'

const labIconMap: Record<string, ReactNode> = {
  'server': <Server size={20} />,
  'layout-dashboard': <LayoutDashboard size={20} />,
  'brain': <Brain size={20} />,
  'gamepad-2': <Gamepad2 size={20} />,
  'settings': <Settings size={20} />,
}

export function Labs() {
  const { t, language } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const statusLabel = (status: string) => {
    if (status === 'active') return language === 'es' ? 'Activo' : 'Active'
    if (status === 'paused') return language === 'es' ? 'Pausado' : 'Paused'
    return language === 'es' ? 'Archivado' : 'Archived'
  }

  return (
    <section className="section" id="labs" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.labs.sectionTitle}</h2>
        </div>
        <p className={`labs-description fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          {t.labs.sectionDescription}
        </p>

        <div className="labs-grid">
          {labs.map((lab, i) => {
            const isOpen = !!expanded[lab.id]
            return (
              <div
                key={lab.id}
                className={`card lab-card fade-in fade-in-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
              >
                {/* Header */}
                <div className="lab-card-header">
                  <div className="lab-card-icon">
                    {labIconMap[lab.icon] || <Server size={20} />}
                  </div>
                  <div className="lab-card-title-area">
                    <h3 className="lab-card-name">{lab.name}</h3>
                    <span className={`status-badge ${lab.status}`}>
                      {statusLabel(lab.status)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="lab-card-desc">{lab.description[language]}</p>

                {/* Technologies */}
                <div className="lab-tech-tags">
                  {lab.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                {/* Toggle details */}
                <button className="lab-toggle" onClick={() => toggle(lab.id)}>
                  {isOpen ? (
                    <>
                      {language === 'es' ? 'Ocultar detalles' : 'Hide details'}
                      <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      {language === 'es' ? 'Ver detalles' : 'View details'}
                      <ChevronDown size={14} />
                    </>
                  )}
                </button>

                {/* Expanded details */}
                {isOpen && (
                  <div className="lab-details">
                    <div className="lab-detail-section">
                      <h4>{t.labs.objective}</h4>
                      <p>{lab.objective[language]}</p>
                    </div>

                    {lab.architecture && (
                      <div className="lab-detail-section">
                        <h4>{t.labs.architecture}</h4>
                        <p>{lab.architecture[language]}</p>
                      </div>
                    )}

                    {lab.challenges && lab.challenges[language].length > 0 && (
                      <div className="lab-detail-section">
                        <h4>{t.labs.challenges}</h4>
                        <ul>
                          {lab.challenges[language].map((c, idx) => (
                            <li key={idx}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {lab.solutions && lab.solutions[language].length > 0 && (
                      <div className="lab-detail-section">
                        <h4>{t.labs.solutions}</h4>
                        <ul>
                          {lab.solutions[language].map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="lab-detail-section">
                      <h4>{t.labs.learnings}</h4>
                      <ul>
                        {lab.learnings[language].map((l, idx) => (
                          <li key={idx}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
