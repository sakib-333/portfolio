import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface ContactProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Contact = ({ setActvSec }: ContactProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Contact");
    }
  }, [inView, setActvSec]);

  return (
    <Element name="Contact">
      <div
        ref={ref}
        className="w-full h-full p-4 min-h-screen border-2 border-black"
      >
        <h1>Contact</h1>
      </div>
    </Element>
  );
};

export default Contact;
