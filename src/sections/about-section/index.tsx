import AboutCard from "@/components/about-card"
import Section from "@/components/section"
import SectionHeader from "@/components/section-header"
import Text from "@/components/text"
import { Book, BrainCircuit, Code, GraduationCap } from "lucide-react"


const aboutData = [
  {
    id: "about-1",
    icon: <Code className="text-primary size-9 p-1 rounded-sm bg-primary/30" />,
    label: "Problem Solver",
    text: "Approaching complex coding challenges with analytical thinking and persistence."
  },
  {
    id: "about-2",
    icon: <Book className="text-primary size-9 p-1 rounded-sm bg-primary/30" />,
    label: "Continuous Learner",
    text: "Passionate about staying updated with the latest technologies and best practices."
  },
  {
    id: "about-3",
    icon: <BrainCircuit className="text-primary size-9 p-1 rounded-sm bg-primary/30" />,
    label: "Creative Thinker",
    text: "Finding innovative solutions by thinking outside the box."
  },
  {
    id: "about-4",
    icon: <GraduationCap className="text-primary size-9 p-1 rounded-sm bg-primary/30" />,
    label: "Academic Focus",
    text: "Achived B.Sc (Engg.) degree in Computer Science & Engineering."
  }
]

function AboutSection() {
  return (
    <Section id="about-section">
      <SectionHeader 
        heading="About Me"
        title="Motivated frontend developer with a strong track record of successfully completing various projects. Proficient in"
      />
      <div className="grid lg:grid-cols-2 gap-4 pt-10">
        <div className="w-full p-4 bg-primary/20 rounded-sm">
          <Text titleSm weight="bold">Who am I</Text>
          <Text textBase accentColor align="justify">As a Frontend Developer with a background in Computer Science & Engineering &#40;CSE&#41;, 
            I have proper knowledge in web development and conversational English skills under my belt. 
            I have completed my B.Sc &#40;Engg.&#41; degree from Gopalganj Science and Technology University in 2024. 
            Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers 
            and expand my knowledge even more!
          </Text>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {
            aboutData.map(about => (
              <AboutCard key={about.id} {...about} />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default AboutSection