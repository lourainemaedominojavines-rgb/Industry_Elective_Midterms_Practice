import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import SkillSection from './components/SkillSection'
import Hero from './components/Hero'


export default function App() {
  return (
    <>
    <div className = "bg-white min-h-screen text-stone-900">

      <Navbar />
      <Hero />

      <main>
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
      
    </div>
    </>
  )
}