import { useEffect, useState } from "react"
import NavbarSimple from "./components/navbar"
import AboutSection from "./sections/about-section"
import ContactSection from "./sections/contact-section"
import EducationSection from "./sections/education-section"
import ExperianceSection from "./sections/experiance-section"
import HomeSection from "./sections/home-section"
import ProjectsSection from "./sections/projects-section"
import SkillsSection from "./sections/skills-section"
import Footer from "./components/footer"
import { Button } from "./components/ui/button"
import { ArrowUp } from "lucide-react"

function App() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home-section");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleClose = () => setOpen(false)

  const handleToggle = () => setOpen(c => !c)

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (open) {
      handleClose()
    }

    element?.scrollIntoView({behavior: 'smooth', })
  }

  useEffect(()=> {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sec = section as HTMLElement;

        if (window.scrollY + 400 >= sec.offsetTop) {
          setActiveSection(sec.id)
        }
      })
      setShowScrollTop(window.scrollY > window.innerHeight-200);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 767) {
        handleClose()
      }
    }


    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <div className="container px-5 mx-auto relative">
        <NavbarSimple 
          open = {open}
          handleScroll = {handleScroll}
          handleToggle = {handleToggle}
          activeSection = {activeSection} 
        /> 
        <div className="overflow-hidden">
          <HomeSection 
            handleScroll = {handleScroll}
          />
          
          <AboutSection />
          <ExperianceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer handleScroll = {handleScroll} />
        </div>
        { showScrollTop && (
            <div className="z-1000 right-5 bottom-5 fixed">
            <Button variant="outline" size={"icon"} onClick={() => handleScroll("home-section")}>
              <ArrowUp />
            </Button>
            </div>
          )
        }
    </div>
  )
}


export default App
