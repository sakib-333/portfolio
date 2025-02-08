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
        className="w-full h-full px-4 py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <h1
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="200"
          className="font-bold text-center text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          About
        </h1>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once="false"
          data-aos-duration="200"
          className="space-y-4 md:space-y-8 lg:space-y-12 text-xl text-justify mt-4 sm:mt-5 md:mt-6 lg:mt-7"
        >
          <p>
            I am <strong>Sakibur Rahman</strong>, a passionate{" "}
            <strong>front-end</strong> web developer from Bangladesh. In 2024 I
            had successfully completed my <strong>B.Sc&#40;Engg&#41;</strong>{" "}
            from Bangabandhu Sheikh Mujibur Rahman Science and Technology
            University, Gopalganj. My major was Computer Science and Engineering{" "}
            <strong>&#40;CSE&#41;.</strong> Currently, I am open to work to
            anywhere in Bangladesh as well as in abroad through onsite or
            remote.
          </p>
          <p>
            After admitting in the university, my programming journey had
            started as I was a Computer Science student.{" "}
            <strong>C Programming</strong> highly motivated me to dive deep into
            the programming. I really love programming and taking real world
            challenges.
          </p>
          <p>
            I like to spend time with my friends playing cards, chess, and
            carrom. Personally I am a kind, honest, and peaceful person.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
