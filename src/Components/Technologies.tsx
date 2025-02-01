import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface TechnologiesProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Technologies = ({ setActvSec }: TechnologiesProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Technologies");
    }
  }, [inView, setActvSec]);

  return (
    <Element name="Technologies">
      <div
        ref={ref}
        className="w-full h-full p-4 min-h-screen border-2 border-black"
      >
        <h1>Technologies</h1>
      </div>
    </Element>
  );
};

export default Technologies;
