import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

interface EducationProps {
  theme: "light" | "dark";
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Education = ({ theme, setActvSec }: EducationProps) => {
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
        className={`w-full h-full ${
          theme === "light" ? "bg-[#e0f2f1]" : "bg-[#263238]"
        } p-4 py-4 sm:py-6 md:py-8 lg:py-10`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="200"
            className="max-w-[400px] w-full md:text-left font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            My Education
          </h1>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-once="false"
            data-aos-duration="200"
            className="hidden md:block"
          >
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ fontSize: "28px" }}>
                  <Typography variant="h5">
                    B.Sc in Computer Science and Engineering
                  </Typography>
                  <Typography variant="subtitle1">
                    Bangabandhu Sheikh Mujibur Rahman Science and Technology
                    University, Gopalganj-8100
                  </Typography>
                  <Typography variant="subtitle1">2024</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ fontSize: "28px" }}>
                  <Typography variant="h5">
                    Higher Secondary Certificate(HSC)
                  </Typography>
                  <Typography variant="subtitle1">
                    Haji Lalmia City University College, Gopalganj
                  </Typography>
                  <Typography variant="subtitle1">2017</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ fontSize: "28px" }}>
                  <Typography variant="h5">
                    Secondary School Certificate(SSC)
                  </Typography>
                  <Typography variant="subtitle1">
                    Kotalipara Public Institution
                  </Typography>
                  <Typography variant="subtitle1">2015</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className="md:hidden mt-4 sm:mt-5 md:mt-6 lg:mt-7 space-y-4">
            <div>
              <h1 className="text-xl">
                B.Sc in Computer Science and Engineering
              </h1>
              <p
                className={`text-[${
                  theme === "light" ? "#4e4a4a" : "#d4d0d0"
                }]`}
              >
                Bangabandhu Sheikh Mujibur Rahman Science and Technology
                University, Gopalganj-8100
              </p>
              <p>2024</p>
            </div>
            <div>
              <h1 className="text-xl">Higher Secondary Certificate(HSC)</h1>
              <p
                className={`text-[${
                  theme === "light" ? "#4e4a4a" : "#d4d0d0"
                }]`}
              >
                Haji Lalmia City University College, Gopalganj
              </p>
              <p>2017</p>
            </div>
            <div>
              <h1 className="text-xl">Secondary School Certificate(SSC)</h1>
              <p
                className={`text-[${
                  theme === "light" ? "#4e4a4a" : "#d4d0d0"
                }]`}
              >
                Kotalipara Public Institution
              </p>
              <p>2015</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
