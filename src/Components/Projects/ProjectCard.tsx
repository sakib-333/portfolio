import { FaGithub, FaRegEye } from "react-icons/fa";

type Project = {
  id: string;
  name: string;
  photo: string;
  description: string;
  language: string;
  library: string;
  framework: string;
  technologies: string[];
  liveLink: string;
  github: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-lg bg-color-5/50 hover:-translate-y-1 transition duration-200">
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-full h-full max-h-36 object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110"
          src={project.photo}
        />
      </div>
      <div className="p-3 flex flex-col space-y-2">
        <h1 className="text-white text-xl font-bold">{project.name}</h1>
        <p className="text-color-4/80 min-h-12">{project.description}</p>
        <div className="flex items-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 rounded-full text-color-4 bg-color-2/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <a
            className="text-color-4 text-xs flex items-center gap-1 hover:text-color-2"
            target="_blank"
            href={project.liveLink}
          >
            <FaRegEye /> <span>Live Link</span>
          </a>
          <a
            className="text-color-4 text-xs flex items-center gap-1 hover:text-color-2"
            target="_blank"
            href={project.github}
          >
            <FaGithub /> <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
