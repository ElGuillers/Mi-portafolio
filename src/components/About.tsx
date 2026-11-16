import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export function About() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.about.sectionTitle}</h2>
        </div>
        <div className="about-content">
          {t.about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`about-text fade-in fade-in-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
