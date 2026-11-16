import { useState } from 'react'
import { ExternalLink, Github, FolderCode } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects, projectCategories, type ProjectCategory } from '../data/projects'
import '../styles/projects.css'

export function Projects() {
  const { t, language } = useLanguage()
  const [ref, isVisible] = useScrollAnimation<HTMLElement>()
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all')

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  // Only show categories that have projects
  const activeCategories = Object.keys(projectCategories).filter(cat =>
    projects.some(p => p.category === cat)
  ) as ProjectCategory[]

  const statusLabel = (status: string) => {
    return t.projects.status[status as keyof typeof t.projects.status] || status
  }

  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    return `${import.meta.env.BASE_URL}${cleanPath}`
  }

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">{t.projects.sectionTitle}</h2>
        </div>

        {/* Filters */}
        {activeCategories.length > 1 && (
          <div className={`projects-filters fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {t.projects.filterAll}
            </button>
            {activeCategories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {projectCategories[cat][language]}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`card project-card fade-in fade-in-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
              >
                {/* Image */}
                <div className="project-card-image">
                  {project.image ? (
                    <img src={getImageUrl(project.image)} alt={project.name} loading="lazy" />
                  ) : (
                    <FolderCode size={40} className="placeholder-icon" />
                  )}
                </div>

                {/* Header */}
                <div className="project-card-header">
                  <h3 className="project-card-name">{project.name}</h3>
                  <span className={`status-badge ${project.status}`}>
                    {statusLabel(project.status)}
                  </span>
                </div>

                {/* Description */}
                <p className="project-card-desc">{project.description[language]}</p>

                {/* Features */}
                {project.features[language].length > 0 && (
                  <div className="project-card-features">
                    <h4>{t.projects.features}</h4>
                    <ul>
                      {project.features[language].map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="project-card-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                {/* Actions */}
                {(project.repoUrl || project.demoUrl) && (
                  <div className="project-card-actions">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github size={16} />
                        {t.projects.viewRepo}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={16} />
                        {t.projects.viewDemo}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="projects-empty">{t.projects.emptyState}</p>
        )}
      </div>
    </section>
  )
}
