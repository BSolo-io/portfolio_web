import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Projects.css'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../../data/projects.js'

const MAX_PROJECTS = 15

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
  const canHover = useCanHover()
  const shown = projects.slice(0, MAX_PROJECTS)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
      </div>

      <Swiper
        className="projects__swiper"
        modules={[Navigation, Pagination, Keyboard, A11y]}
        onSwiper={setSwiper}
        centeredSlides
        loop
        grabCursor
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
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
                onInactiveClick={() => swiper?.slideToLoop(index)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Projects
