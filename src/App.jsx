import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import MoreWork from './components/MoreWork/MoreWork.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <>
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
