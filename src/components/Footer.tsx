import { useLanguage } from '../hooks/useLanguage'
import { siteConfig } from '../data/config'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} {siteConfig.shortName}. {t.footer.rights}
        </p>
        <p className="footer-built">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
