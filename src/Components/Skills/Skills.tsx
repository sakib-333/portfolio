import useInViewSection from "../../Hooks/useInViewSection";

const Skills = () => {
  const ref = useInViewSection("skills");
  return (
    <div ref={ref} id="skills-section" className="min-h-screen text-white">
      <h1 className="text-4xl">Skills Component</h1>
    </div>
  );
};

export default Skills;
