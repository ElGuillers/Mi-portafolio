import { useState } from 'react'
import { GraduationCap, Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteConfig } from '../data/config'
import { certifications } from '../data/certifications'
import '../styles/rest.css'

export function Education() {
  const { t, language } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()
  const [showAll, setShowAll] = useState(false)

  const INITIAL_COUNT = 6
  const displayedCerts = showAll ? certifications : certifications.slice(0, INITIAL_COUNT)

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.education.sectionTitle}</h2>
        </div>

        <div className={`card education-card fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="education-institution">
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="education-name">{siteConfig.university}</h3>
              <p className="education-location">{siteConfig.universityLocation}</p>
            </div>
          </div>
          <p className="education-degree">{siteConfig.degree[language]}</p>
          <span className="status-badge completed">
            {t.education.status}: {siteConfig.degreeStatus[language]}
          </span>
        </div>

        {/* Certifications section */}
        <div className={`education-certs fade-in fade-in-delay-2 ${isVisible ? 'visible' : ''}`}>
          <div className="education-certs-header">
            <h3>
              <Award size={22} style={{ color: 'var(--accent-text)' }} />
              {t.education.certifications} ({certifications.length})
            </h3>
          </div>

          <div className="certs-grid">
            {displayedCerts.map(cert => (
              <div key={cert.id} className="cert-card">
                <div className="cert-top">
                  <span className="cert-issuer">{cert.issuer}</span>
                  {cert.badge && <span className="cert-badge">{cert.badge}</span>}
                </div>

                <h4 className="cert-title">{cert.title}</h4>

                <p className="cert-date">{cert.issueDate[language]}</p>

                {cert.credentialId && (
                  <p className="cert-id" title={cert.credentialId}>
                    {t.education.credentialId}: {cert.credentialId.slice(0, 16)}...
                  </p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="cert-skills">
                    {cert.skills.map(skill => (
                      <span key={skill} className="tag">{skill}</span>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    {t.education.viewCredential}
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {certifications.length > INITIAL_COUNT && (
            <div className="certs-toggle-wrap">
              <button
                className="btn btn-secondary"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    {t.education.showLess}
                    <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    {t.education.showAll} ({certifications.length})
                    <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
