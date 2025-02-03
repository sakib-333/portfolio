import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element, Link } from "react-scroll";
import coding from "../assets/codding.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Typewriter } from "react-simple-typewriter";
import { Link as MuiLink } from "@mui/material";

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
        <div className="w-full flex flex-col-reverse justify-center items-center sm:flex-row">
          <div className="w-full sm:flex-1 flex flex-col space-y-4 items-center sm:items-start ">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Hi there!
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              I'm Sakibur Rahman
            </h1>
            <div className="w-full flex flex-col items-center sm:items-start gap-1 md:flex-row">
              <p className="max-w-[178px] w-full">Highly passionate about</p>
              <p className="h-4 w-full text-center sm:text-left text-[#ff9800]">
                <Typewriter
                  words={[
                    "web development.",
                    "react development.",
                    "problem solving.",
                  ]}
                  loop={true}
                  typeSpeed={5}
                  delaySpeed={700}
                  deleteSpeed={5}
                />
              </p>
            </div>
            <div className="flex flex-col w-full items-center md:flex-row sm:items-start gap-3">
              <MuiLink
                href={"/sakib_resume.pdf"}
                sx={{ maxWidth: "270px", width: "100%" }}
                download={"sakib_resume"}
              >
                <Button
                  startIcon={<ArrowDownwardIcon />}
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "10px", md: "14px" },
                    fontWeight: "400",
                  }}
                  color="success"
                >
                  Download resume
                </Button>
              </MuiLink>
              <Link
                to={"Contact"}
                style={{ maxWidth: "275px", width: "100%" }}
                smooth={true}
                duration={500}
              >
                <Button
                  startIcon={<ContactMailIcon />}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "10px", md: "14px" },
                    fontWeight: "400",
                  }}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md w-full">
            <Lottie animationData={coding} loop={true} />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
