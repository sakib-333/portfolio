import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import SkillCard from "@/components/skill-card";
import skills, { additionalSkills } from "./skills";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeXml, LayoutGrid, LayoutPanelLeft, Wrench } from "lucide-react";
import Text from "@/components/text";

const buttons = [
  {
    title: "All",
    icon: <CodeXml />
  },
  {
    title: "Languages",
    icon: <CodeXml />
  },
  {
    title: "Frontend",
    icon: <LayoutGrid />
  },
  {
    title: "Backend",
    icon: <LayoutGrid />
  },
  {
    title: "DBMS",
    icon: <LayoutPanelLeft />
  },
  {
    title: "Tools",
    icon: <Wrench />
  },
]

function SkillsSection() {
  const [active, setActive] = useState<string>("all");
  const handleActive = (category: string) => setActive(category)

  return (
    <Section id="skills-section">
      <SectionHeader
        heading="Skills"
        title="A curated collection of my technical skills and proficiencies developed through education, personal projects, and hands-on experience."
      />
      <div className="pt-10 space-y-4">
        <div className="max-w-5xl w-full mx-auto flex gap-10 flex-wrap justify-center">
            {
              buttons.map(btn => (
                <Button key={btn.title} variant={btn.title.toLowerCase() === active ? "default" : "outline"}
                  onClick={() => handleActive(btn.title.toLowerCase())}
                  className="border"
                >
                  {btn.icon}
                {btn.title}</Button>
              ))
            }
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          {
            skills.filter((s => {
              if (active === "all") {
                return s
              }
              return s.category === active
            })).map(skill => (
              <SkillCard key={skill.title} skill={skill} />
            ))
          }
        </div>
        <div className="py-8 px-4 bg-primary/20 rounded-sm space-y-8">
            <Text titleSm align="center">Additional Skills</Text>
            <div className="flex gap-4 justify-center flex-wrap">
              {additionalSkills.map(s => (
                <Text key={s} textBase accentColor className="px-5 py-1 w-max rounded-full bg-primary/30">{s}</Text>
              ))}
            </div>
        </div>
      </div>
    </Section>
  );
}

export default SkillsSection;
