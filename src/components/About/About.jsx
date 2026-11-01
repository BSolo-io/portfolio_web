import './About.css'
import { story } from '../../data/profile.js'

// The story scrolls inside the "art window" of a music-player frame.
// The frame (public/player-frame.svg) has a transparent hole; the story box sits
// behind it, lined up with the hole, so the frame's rounded edges mask it.
function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="player">
          <div
            className="player__window"
            tabIndex={0}
            role="region"
            aria-label="My story (scrollable)"
          >
            <h2 className="player__title">How I got here</h2>
            {story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <img className="player__frame" src="/player-frame.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default About
