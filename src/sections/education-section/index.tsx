import Section from "@/components/section"
import SectionHeader from "@/components/section-header"
import EducationCard from "./EducationCard"

const educations = [
  {
    id: "education-1",
    degree: "B.Sc(Engg.) in Computer Science & Engineering",
    institute: "Gopalganj Science and Technology University",
    year: 2024,
    indx: 0,
  },
  {
    id: "education-2",
    degree: "Higher Secondary Certificate(HSC)",
    institute: "Haji Lalmia City University College, Gopalganj",
    year: 2017,
    indx: 1,
  },
  {
    id: "education-2",
    degree: "Secondary School Certificate(SSC)",
    institute: "Kotalipara Public Institution",
    year: 2015,
    indx: 2,
  },
]

function EducationSection() {
  return (
    <Section id="education-section">
      <SectionHeader 
        heading="Education"
        title="My academic background and educational qualifications that have shaped my skills and knowledge."
      />

      <div className="pt-10 flex flex-col items-center max-w-7xl mx-auto">
        {educations.map((edu) => (
          <EducationCard key={edu.id} education={edu} length={educations.length} />
        ))}
      </div>
    </Section>
  )
}

export default EducationSection
