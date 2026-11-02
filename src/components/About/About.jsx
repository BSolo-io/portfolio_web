import { useRef, useState } from 'react'
import './About.css'
import PlayerFrame from './PlayerFrame.jsx'
import { story } from '../../data/profile.js'

const SWIPE_MIN_PX = 50

// The story plays like an MP3 player: each question is one "track".
// The player's back / next buttons (or a swipe, or the arrow keys) switch tracks,
// the new page slides in from the side, and the progress bar moves one step per track.
function About() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const windowRef = useRef(null)
  const touchStart = useRef(null)

  const last = story.length - 1
  const track = story[index]
  const canPrev = index > 0
  const canNext = index < last
  const progress = last > 0 ? index / last : 1

  function goTo(newIndex) {
    if (newIndex < 0 || newIndex > last || newIndex === index) return
    setDirection(newIndex > index ? 'next' : 'prev')
    setIndex(newIndex)
    if (windowRef.current) windowRef.current.scrollTop = 0
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowRight') goTo(index + 1)
    if (event.key === 'ArrowLeft') goTo(index - 1)
  }

  function handleTouchStart(event) {
    const t = event.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  function handleTouchEnd(event) {
    if (!touchStart.current) return
    const t = event.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    // Only count mostly-horizontal swipes, so scrolling the text still works
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return
    goTo(dx < 0 ? index + 1 : index - 1)
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="player">
          <div
            ref={windowRef}
            className="player__window"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={`My story, part ${index + 1} of ${story.length}`}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* key forces a fresh element per track, which replays the slide-in animation */}
            <article
              key={track.id}
              className={`track track--from-${direction === 'next' ? 'right' : 'left'}`}
              aria-live="polite"
            >
              <p className="track__number">
                {index + 1} / {story.length}
              </p>
              <h2 className="track__question">{track.question}</h2>
              {track.body.map((paragraph, i) => (
                <p key={i} className="track__text">
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          <PlayerFrame
            className="player__frame"
            progress={progress}
            canPrev={canPrev}
            canNext={canNext}
          />

          {/* Invisible buttons sitting exactly over the frame's back / next arrows */}
          <button
            type="button"
            className="player__btn player__btn--prev"
            onClick={() => goTo(index - 1)}
            disabled={!canPrev}
            aria-label="Previous question"
          />
          <button
            type="button"
            className="player__btn player__btn--next"
            onClick={() => goTo(index + 1)}
            disabled={!canNext}
            aria-label="Next question"
          />
        </div>
      </div>
    </section>
  )
}

export default About
