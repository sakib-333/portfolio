import ProjectCard from "@/components/project-card"
import Section from "@/components/section"
import SectionHeader from "@/components/section-header"
import projectsStack from "./projects"

function ProjectsSection() {
  return (
    <Section id="projects-section">
      <SectionHeader 
        heading="Projects"
        title="A showcase of my technical projects and applications, demonstrating my skills and expertise in various technologies."
      />
      <div className="pt-10">
        <div></div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsStack.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ProjectsSection