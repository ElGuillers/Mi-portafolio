import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteConfig } from '../data/config'

export function Contact() {
  const { t } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()

  const contactItems = [
    ...(siteConfig.email
      ? [{
          icon: <Mail size={18} />,
          label: t.contact.emailLabel,
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
        }]
      : []),
    ...(siteConfig.github
      ? [{
          icon: <Github size={18} />,
          label: 'GitHub',
          value: siteConfig.github.replace('https://github.com/', '@'),
          href: siteConfig.github,
        }]
      : []),
    ...(siteConfig.linkedin
      ? [{
          icon: <Linkedin size={18} />,
          label: 'LinkedIn',
          value: siteConfig.name,
          href: siteConfig.linkedin,
        }]
      : []),
    {
      icon: <MapPin size={18} />,
      label: t.contact.locationLabel,
      value: siteConfig.location,
      href: undefined,
    },
  ]

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.contact.sectionTitle}</h2>
        </div>

        <div className="contact-content">
          <p className={`contact-subtitle fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
            {t.contact.subtitle}
          </p>

          <div className={`contact-links fade-in fade-in-delay-2 ${isVisible ? 'visible' : ''}`}>
            {contactItems.map((item, i) => {
              const Tag = item.href ? 'a' : 'div'
              const linkProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith('mailto:') ? undefined : '_blank' as const,
                    rel: item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer',
                  }
                : {}

              return (
                <Tag key={i} className="contact-item" {...linkProps}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <p className="contact-item-label">{item.label}</p>
                    <p className="contact-item-value">{item.value}</p>
                  </div>
                </Tag>
              )
            })}
          </div>

          <p className={`contact-availability fade-in fade-in-delay-3 ${isVisible ? 'visible' : ''}`}>
            {t.contact.availability}
          </p>
        </div>
      </div>
    </section>
  )
}
