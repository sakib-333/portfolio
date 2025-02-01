import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface TechnologiesProps {
  theme: "light" | "dark";
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Technologies = ({ setActvSec, theme }: TechnologiesProps) => {
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
        className={`w-full h-full ${
          theme === "light" ? "bg-[#e0f2f1]" : "bg-[#263238]"
        } p-4 py-4 sm:py-6 md:py-8 lg:py-10`}
      >
        <h1 className="font-bold text-center text-[28px] sm:text-4xl md:text-5xl lg:text-6xl">
          Technologies I Know
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-4 sm:mt-5 md:mt-6 lg:mt-7">
          <div>
            <h2 className="text-xl md:text-[24px] lg:text-[28px]">Languages</h2>
            <ul
              className={`list-disc mt-4 sm:mt-5 md:mt-6 lg:mt-7 ${
                theme === "light" ? "text-[#4e4a4a]" : "text-[#d4d0d0]"
              }  space-y-4`}
            >
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-[24px] lg:text-[28px]">Libraries</h2>
            <ul
              className={`list-disc mt-4 sm:mt-5 md:mt-6 lg:mt-7 ${
                theme === "light" ? "text-[#4e4a4a]" : "text-[#d4d0d0]"
              }  space-y-4`}
            >
              <li>React.JS</li>
              <li>React Hook Form</li>
              <li>Motion Dev</li>
              <li>Material UI</li>
              <li>Daisy UI</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-[24px] lg:text-[28px]">
              Frameworks
            </h2>
            <ul
              className={`list-disc mt-4 sm:mt-5 md:mt-6 lg:mt-7 ${
                theme === "light" ? "text-[#4e4a4a]" : "text-[#d4d0d0]"
              }  space-y-4`}
            >
              <li>Express.JS</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl md:text-[24px] lg:text-[28px]">Databases</h2>
            <ul
              className={`list-disc mt-4 sm:mt-5 md:mt-6 lg:mt-7 ${
                theme === "light" ? "text-[#4e4a4a]" : "text-[#d4d0d0]"
              }  space-y-4`}
            >
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Technologies;
