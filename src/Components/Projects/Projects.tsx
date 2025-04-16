import useInViewSection from "../../Hooks/useInViewSection";

const Projects = () => {
  const ref = useInViewSection("projects");
  return (
    <div ref={ref} id="projects-section" className="min-h-screen text-white">
      <h1 className="text-4xl">Projects Component</h1>
    </div>
  );
};

export default Projects;
