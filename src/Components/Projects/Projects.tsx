import Heading from "../Heading/Heading";
import MyProjects from "./MyProjects";

const Projects = () => {
  return (
    <div id="projects" className="mt-20 pb-20 px-4 mx-auto">
      <Heading title="Projects" />
      <p className="max-w-2xl mt-4 mx-auto text-center text-color-4/80">
        A showcase of my technical projects and applications, demonstrating my
        skills and expertise in various technologies.
      </p>
      <div className="mt-16">
        <MyProjects />
      </div>
    </div>
  );
};

export default Projects;
