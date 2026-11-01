import './About.css'
import { story } from '../../data/profile.js'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <h2 className="section__title">How I got here</h2>
        <div className="about__story">
          {story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
