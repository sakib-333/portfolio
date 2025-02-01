import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface EducationProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Education = ({ setActvSec }: EducationProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Education");
    }
  }, [inView, setActvSec]);

  return (
    <Element name="Education">
      <div
        ref={ref}
        className="w-full h-full p-4 min-h-screen border-2 border-black"
      >
        <h1>Education</h1>
      </div>
    </Element>
  );
};

export default Education;
