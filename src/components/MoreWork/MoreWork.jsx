import './MoreWork.css'
import Icon from '../Icons/Icon.jsx'
import { profile } from '../../data/profile.js'

function MoreWork() {
  const github = profile.socials.find((s) => s.icon === 'github')

  return (
    <section id="more-work" className="more-work section">
      <div className="container more-work__inner">
        <h2 className="section__title">Want to see more?</h2>
        <p className="more-work__text">
          The carousel shows my favourites. Everything else, from experiments to school projects, is on GitHub.
        </p>
        <a className="btn btn--primary" href={github.url} target="_blank" rel="noreferrer">
          <Icon name="github" size={18} />
          Browse my GitHub
        </a>
      </div>
    </section>
  )
}

export default MoreWork
