import { useState, useEffect } from 'react'
import { Sun, Moon, Languages } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import { siteConfig } from '../data/config'
import '../styles/navbar.css'

const SECTION_IDS = ['about', 'skills', 'projects', 'labs', 'education', 'experience', 'contact']

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'labs', label: t.nav.labs },
    { id: 'education', label: t.nav.education },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {siteConfig.shortName}<span>.</span>
        </a>

        {/* Horizontal Navigation Links */}
        <ul className="navbar-links">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls: Language & Theme */}
        <div className="navbar-controls">
          <button
            className="btn-icon"
            onClick={toggleLanguage}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a español'}
            title={language === 'es' ? 'English' : 'Español'}
          >
            <Languages size={18} />
          </button>

          <button
            className="btn-icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
            title={theme === 'dark' ? t.theme.light : t.theme.dark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
