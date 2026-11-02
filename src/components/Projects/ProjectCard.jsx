import { useState } from 'react'
import './ProjectCard.css'
import Icon from '../Icons/Icon.jsx'

const MAX_TECH = 4
const MAX_HIGHLIGHTS = 2

// One project card. Data comes from src/data/projects.json (via projects.js).
// Preview behaviour: desktop plays on hover/focus; touch devices play on the
// active (centred) slide. GIFs and videos are only loaded while playing, so the
// page stays fast.
function ProjectCard({ project, isActive, canHover, onInactiveClick }) {
  const [hovered, setHovered] = useState(false)
  const [mediaFailed, setMediaFailed] = useState(false)
  const playing = canHover ? hovered : isActive

  const { title, tagline, highlights, tech, status, year, media, links } = project
  const primaryUrl = links.demo || links.repo
  const hasMotion = media && !mediaFailed && (media.type === 'gif' || media.type === 'video')

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
      aria-label={`${title}: open ${links.demo ? 'live demo' : 'code'}`}
    >
      <div className="card__media">
        <CardMedia media={media} title={title} playing={playing} onError={() => setMediaFailed(true)} failed={mediaFailed} />

        <div className="card__overlay" aria-hidden="true">
          <span className="card__overlay-hint">
            <Icon name="external" size={18} />
            {links.demo ? 'Open live demo' : 'View code'}
          </span>
        </div>

        {status === 'in-progress' && <span className="card__status">In progress</span>}
        {hasMotion && (
          <span className="card__preview-badge">
            <Icon name="play" size={10} />
            Preview
          </span>
        )}
      </div>

      <div className="card__body">
        <div className="card__heading">
          <h3 className="card__title">{title}</h3>
          {year && <span className="card__year">{year}</span>}
        </div>

        {tagline && <p className="card__summary">{tagline}</p>}

        {highlights.length > 0 && (
          <ul className="card__highlights">
            {highlights.slice(0, MAX_HIGHLIGHTS).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <ul className="card__tech" aria-label="Technologies">
            {tech.slice(0, MAX_TECH).map((t) => (
              <li key={t}>{t}</li>
            ))}
            {tech.length > MAX_TECH && <li>+{tech.length - MAX_TECH}</li>}
          </ul>
        )}

        <div className="card__actions">
          {links.demo && (
            <a
              className="btn btn--primary btn--sm"
              href={links.demo}
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
            href={links.repo}
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

// Still image / poster when idle; the GIF or video only while playing.
// If the file is missing, the coloured placeholder stays.
function CardMedia({ media, title, playing, onError, failed }) {
  const placeholder = (
    <div className="card__placeholder" aria-hidden="true">
      {title}
    </div>
  )
  if (!media || failed) return placeholder

  if (media.type === 'image') {
    return <img className="card__image" src={media.src} alt={media.alt} loading="lazy" decoding="async" onError={onError} />
  }

  const still = media.poster ? (
    <img className="card__image" src={media.poster} alt={media.alt} loading="lazy" decoding="async" />
  ) : (
    placeholder
  )

  if (!playing) return still

  return (
    <>
      {still}
      {media.type === 'video' ? (
        <video className="card__video" src={media.src} autoPlay muted loop playsInline aria-hidden="true" onError={onError} />
      ) : (
        <img className="card__video" src={media.src} alt={media.alt} onError={onError} />
      )}
    </>
  )
}

export default ProjectCard
