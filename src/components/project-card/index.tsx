import { Github, Tv } from "lucide-react";
import Text from "../text";

interface Props {
  project: {
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
}

function ProjectCard({ project }: Props) {
  return (
    <div className="w-full h-max rounded-sm">
     <img src={project.photo} className="w-full h-[150px] rounded-t-sm" alt="project-image" />
     <div className="bg-primary/20">
      <div className="p-4 bg-primary/20 rounded-b-sm space-y-2">
       <Text textBase weight="bold">{project.name}</Text>
       <Text caption accentColor align="justify" className="line-clamp-2">{project.description}</Text>
       <div className="flex justify-start gap-2 flex-wrap">
        {
          project.technologies.map(tech => (
               <Text key={tech} align="center" className="text-[10px] bg-primary rounded-full py-0.5 px-3">{tech}</Text>
          ))
        }
       </div>
       <div className="flex justify-between gap-4">
          <a href={project.github} target="_blank" className="flex items-center gap-1 group">
               <Github size={16} className="text-primary group-hover:text-card transition-colors duration-200" /> 
               <span className="text-[10px] text-primary group-hover:text-card transition-colors duration-200">Github</span>
          </a>
          <a href={project.liveLink} target="_blank" className="flex items-center gap-1 group">
               <Tv size={16} className="text-primary group-hover:text-card transition-colors duration-200" /> 
               <span className="text-[10px] text-primary group-hover:text-card transition-colors duration-200">Live</span>
          </a>
       </div>
      </div>
     </div>
    </div>
  )
}

export default ProjectCard