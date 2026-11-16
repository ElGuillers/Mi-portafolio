import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../data/config'
import '../styles/hero.css'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Terminal size={14} className="hero-badge-icon" aria-hidden="true" />
            <span className="hero-badge-dot" aria-hidden="true" />
            <span>{t.hero.greeting}</span>
          </div>

          <h1 className="hero-name">{siteConfig.name}</h1>

          <p className="hero-title">{t.hero.title}</p>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t.hero.exploreProjects}
              <ArrowDown size={16} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t.hero.contactMe}
            </a>

            <div className="hero-socials">
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-icon"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-icon"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="scroll-mouse" />
        <span>{t.hero.scrollDown}</span>
      </div>
    </section>
  )
}
