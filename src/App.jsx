import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import MoreWork from './components/MoreWork/MoreWork.jsx'
import Contact from './components/Contact/Contact.jsx'
import VantaBackground from './components/VantaBackground/VantaBackground.jsx'

function App() {
  return (
    <>
      <VantaBackground />
      <main>
        <Hero />
        <About />
        <Projects />
        <MoreWork />
      </main>
      <Contact />
    </>
  )
}

export default App
