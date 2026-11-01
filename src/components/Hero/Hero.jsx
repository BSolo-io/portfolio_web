import './Hero.css'
import Icon from '../Icons/Icon.jsx'
import { profile } from '../../data/profile.js'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__eyebrow">{profile.role} · {profile.location}</p>
          <h1 className="hero__name">{profile.name}</h1>

          <ul className="hero__socials" aria-label="Social links">
            {profile.socials.map((social) => (
              <li key={social.name}>
                <a
                  className="hero__social"
                  href={social.url}
                  target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <Icon name={social.icon} size={22} />
                </a>
              </li>
            ))}
          </ul>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View projects</a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
              <Icon name="download" size={18} />
              Resume
            </a>
          </div>
        </div>

        <div className="hero__photo-wrap">
          {profile.photo ? (
            <img className="hero__photo" src={profile.photo} alt={profile.name} />
          ) : (
            <div className="hero__photo hero__photo--placeholder" aria-hidden="true">
              {initials(profile.name)}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
