import { useEffect, useState } from "react";
import projectsStack from "./projectsStack";
import ProjectCard from "./ProjectCard";

const categories = [
  "All Projects",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML & CSS",
];

const MyProjects = () => {
  const [actvCategry, setActvCategry] = useState("All Projects");
  const [projects, setProjects] = useState(projectsStack);

  useEffect(() => {
    if (actvCategry === "All Projects") {
      setProjects(projectsStack);
    } else {
      setProjects(() =>
        projectsStack.filter(
          (project) =>
            project.language == actvCategry ||
            project.library == actvCategry ||
            project.framework == actvCategry
        )
      );
    }
  }, [actvCategry]);

  return (
    <div className="w-full">
      <div className="flex gap-5 justify-center flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn-primary text-color-4 ${
              actvCategry === category ? "bg-color-2" : "bg-color-5/50"
            }`}
            onClick={() => setActvCategry(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
