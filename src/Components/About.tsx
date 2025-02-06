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
        className="w-full h-full pt-20 px-4 pb-4 sm:pb-6 md:pb-8 lg:pb-10 min-h-screen"
      >
        <h1>This is About Section.</h1>
      </div>
    </Element>
  );
};

export default About;
