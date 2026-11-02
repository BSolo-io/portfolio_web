import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Keyboard, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './Projects.css'
import ProjectCard from './ProjectCard.jsx'
import Icon from '../Icons/Icon.jsx'
import { projects } from '../../data/projects.js'

const MAX_PROJECTS = 15
const AUTOPLAY_MS = 3000 // how long each project stays centred
const SLIDE_MS = 1500 // how long the slide to the next project takes
const CLICK_SLIDE_MS = 700 // a bit quicker when someone clicks a side card

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// True on devices with a real hover (mouse/trackpad), false on touch screens.
function useCanHover() {
  const query = '(hover: hover) and (pointer: fine)'
  const [canHover, setCanHover] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e) => setCanHover(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return canHover
}

function Projects() {
  const [swiper, setSwiper] = useState(null)
  // The carousel rotates on its own unless the visitor pauses it
  // (or has asked their OS to reduce motion)
  const [playing, setPlaying] = useState(() => !prefersReducedMotion())
  const canHover = useCanHover()
  const shown = projects.slice(0, MAX_PROJECTS)

  function togglePlaying() {
    if (!swiper) return
    if (playing) swiper.autoplay.stop()
    else swiper.autoplay.start()
    setPlaying(!playing)
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
      </div>

      <Swiper
        className="projects__swiper"
        modules={[Autoplay, Pagination, Keyboard, A11y]}
        onSwiper={(instance) => {
          setSwiper(instance)
          if (!playing) instance.autoplay.stop()
        }}
        speed={SLIDE_MS}
        centeredSlides
        loop
        grabCursor
        keyboard={{ enabled: true }}
        // Play / pause is controlled with swiper.autoplay.start() / stop()
        autoplay={{
          delay: AUTOPLAY_MS,
          disableOnInteraction: false, // keep rotating after a swipe or click
          pauseOnMouseEnter: true, // hold still while someone looks at a card
        }}
        // Dots render in .projects__dots below the play button, not inside the slider
        pagination={{ el: '.projects__dots', clickable: true }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 24 },
        }}
      >
        {shown.map((project, index) => (
          <SwiperSlide key={project.title} className="projects__slide">
            {({ isActive }) => (
              <ProjectCard
                project={project}
                isActive={isActive}
                canHover={canHover}
                onInactiveClick={() => swiper?.slideToLoop(index, CLICK_SLIDE_MS)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="projects__controls">
        <button
          type="button"
          className="projects__play"
          onClick={togglePlaying}
          aria-label={playing ? 'Pause carousel' : 'Play carousel'}
          aria-pressed={!playing}
        >
          <Icon name={playing ? 'pause' : 'play'} size={18} />
        </button>
        <div className="projects__dots" />
      </div>
    </section>
  )
}

export default Projects
