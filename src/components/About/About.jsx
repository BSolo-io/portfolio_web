import { useRef, useState } from 'react'
import './About.css'
import PlayerFrame from './PlayerFrame.jsx'
import { story } from '../../data/profile.js'

// The story scrolls inside the "art window" of a music-player frame.
// The frame has a transparent hole; the story box sits behind it, lined up with
// the hole. As the story scrolls, the player's progress bar follows along.
function About() {
  const [progress, setProgress] = useState(0)
  const frameRequest = useRef(0)

  function handleScroll(event) {
    const el = event.currentTarget
    // Update at most once per animation frame to keep scrolling smooth
    cancelAnimationFrame(frameRequest.current)
    frameRequest.current = requestAnimationFrame(() => {
      const scrollable = el.scrollHeight - el.clientHeight
      setProgress(scrollable > 0 ? el.scrollTop / scrollable : 1)
    })
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="player">
          <div
            className="player__window"
            tabIndex={0}
            role="region"
            aria-label="My story (scrollable)"
            onScroll={handleScroll}
          >
            <h2 className="player__title">How I got here</h2>
            {story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <PlayerFrame className="player__frame" progress={progress} />
        </div>
      </div>
    </section>
  )
}

export default About
