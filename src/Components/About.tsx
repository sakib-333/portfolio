import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface AboutProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const About = ({ setActvSec }: AboutProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("About");
    }
  }, [inView, setActvSec]);

  return (
    <Element name="About">
      <div
        ref={ref}
        className="w-full h-full pt-20 px-4 min-h-screen border-2 border-black"
      >
        <h1>About</h1>
      </div>
    </Element>
  );
};

export default About;
