import useInViewSection from "../../Hooks/useInViewSection";
import Heading from "../Heading/Heading";
import MySkills from "./MySkills";

const Skills = () => {
  const ref = useInViewSection("skills");
  return (
    <div
      ref={ref}
      id="skills-section"
      className="mt-20 pb-20 px-4 min-h-screen mx-auto"
    >
      <Heading title="Skills" />
      <p className="max-w-2xl mt-4 mx-auto text-center text-color-4/80">
        A curated collection of my technical skills and proficiencies developed
        through education, personal projects, and hands-on experience.
      </p>
      <div className="mt-16">
        <MySkills />
      </div>
    </div>
  );
};

export default Skills;
