import { Briefcase, ExternalLink } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experiences } from '../data/experience'

export function Experience() {
  const { t, language } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section className="section" id="experience" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.experience.sectionTitle}</h2>
        </div>

        {experiences.length === 0 ? (
          <div className={`card experience-placeholder fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
            <Briefcase size={32} style={{ color: 'var(--text-tertiary)', marginBottom: 16 }} />
            <p>{t.experience.placeholder}</p>
          </div>
        ) : (
          <div className="experience-timeline">
            {experiences.map((exp, i) => {
              const locationStr = exp.location
                ? typeof exp.location === 'string'
                  ? exp.location
                  : exp.location[language]
                : ''

              return (
                <div
                  key={exp.id}
                  className={`experience-item fade-in fade-in-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
                >
                  <h3 className="experience-role">{exp.role[language]}</h3>

                  <div className="experience-company">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-company-link"
                      >
                        {exp.company}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}

                    {exp.employmentType && (
                      <span className="experience-meta">· {exp.employmentType[language]}</span>
                    )}

                    {locationStr && (
                      <span className="experience-meta">· {locationStr}</span>
                    )}
                  </div>

                  <p className="experience-period">{exp.period[language]}</p>

                  {exp.summary && (
                    <p className="experience-summary">{exp.summary[language]}</p>
                  )}

                  <ul className="experience-description">
                    {exp.description[language].map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="experience-tech">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
