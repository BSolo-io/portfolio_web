import './Contact.css'
import Icon from '../Icons/Icon.jsx'
import { profile } from '../../data/profile.js'

const YEAR = new Date().getFullYear()

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="contact__title">Let’s talk</h2>
        <p className="contact__text">
          Open to software engineering roles. The fastest way to reach me is email.
        </p>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className="contact__socials" aria-label="Social links">
          {profile.socials.map((social) => (
            <li key={social.name}>
              <a
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
          <li>
            <a href={profile.resume} target="_blank" rel="noreferrer" aria-label="Resume" title="Resume">
              <Icon name="download" size={22} />
            </a>
          </li>
        </ul>

        <p className="contact__copy">
          © {YEAR} {profile.name} · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}

export default Contact
