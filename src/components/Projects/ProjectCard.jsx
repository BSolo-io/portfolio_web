import { useState } from 'react'
import './ProjectCard.css'
import Icon from '../Icons/Icon.jsx'

// One project card.
// Preview behaviour: desktop plays on hover/focus; touch devices play on the active (centred) slide.
// The video is only mounted while playing, so clips are never downloaded until needed.
function ProjectCard({ project, isActive, canHover, onInactiveClick }) {
  const [hovered, setHovered] = useState(false)
  const playing = canHover ? hovered : isActive
  const primaryUrl = project.liveUrl || project.codeUrl

  function handleCardClick() {
    if (!isActive) {
      onInactiveClick()
      return
    }
    window.open(primaryUrl, '_blank', 'noopener')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') handleCardClick()
  }

  return (
    <article
      className={`card${playing ? ' card--playing' : ''}${isActive ? ' card--active' : ''}`}
      style={{ '--hue': project.hue }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={isActive ? 0 : -1}
      role="link"
      aria-label={`${project.title}: open ${project.liveUrl ? 'live demo' : 'code'}`}
    >
      <div className="card__media">
        {project.image ? (
          <img
            className="card__image"
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="card__placeholder" aria-hidden="true">
            {project.title}
          </div>
        )}

        {playing && project.preview && (
          <video
            className="card__video"
            src={project.preview}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        )}

        <div className="card__overlay" aria-hidden="true">
          <span className="card__overlay-hint">
            <Icon name="external" size={18} />
            {project.liveUrl ? 'Open live demo' : 'View code'}
          </span>
        </div>

        {!project.preview && <span className="card__preview-badge">Preview</span>}
      </div>

      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__summary">{project.summary}</p>

        <ul className="card__tech" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="card__actions">
          {project.liveUrl && (
            <a
              className="btn btn--primary btn--sm"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              tabIndex={isActive ? 0 : -1}
            >
              <Icon name="external" size={16} />
              Live Demo
            </a>
          )}
          <a
            className="btn btn--ghost btn--sm"
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            tabIndex={isActive ? 0 : -1}
          >
            <Icon name="github" size={16} />
            Code
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
