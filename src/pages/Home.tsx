import Hero from "../components/sections/Hero"
import Credibility from "../components/sections/Credibility"
import Expertise from "../components/sections/Expertise"
import ProjectsPreview from "../components/sections/ProjectsPreview"
import TechStack from "../components/sections/Techstack"
import Philosophy from "../components/sections/Philosophy"
import ContactCTA from "../components/sections/ContactCTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Expertise />
      <ProjectsPreview />
      <TechStack />
      <Philosophy />
      <ContactCTA />
    </>
  )
}