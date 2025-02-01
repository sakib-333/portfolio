import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface ProjectsProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Projects = ({ setActvSec }: ProjectsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Projects");
    }
  }, [inView, setActvSec]);
  return (
    <Element name="Projects">
      <div
        ref={ref}
        className="w-full h-full p-4 min-h-screen border-2 border-black"
      >
        <h1>Projects</h1>
      </div>
    </Element>
  );
};

export default Projects;
