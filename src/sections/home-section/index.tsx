import Section from "@/components/section";
import Text from "@/components/text";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

interface Props {
     handleScroll: (sectionId: string) => void
}

function HomeSection({ handleScroll }: Props) {

  return (
    <Section
      id="home-section"
      className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-8 md:gap-12"
    >
      <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left space-y-4">
        <Text titleLg className="tracking-wider">
          Hello, I'm <br className="hidden md:block" />
          <span className="text-primary">Sakibur Rahman</span>
        </Text>

        <Text titleMd>Frontend Developer</Text>

        <Text textBase accentColor align="justify">
          Motivated frontend developer with a strong track record of successfully
          completing various projects. Proficient in various programming languages
          and technologies, including C, C++, and web development technologies
          &#40;HTML, CSS, JavaScript, TypeScript, and React&#41;. Strong
          problem-solving abilities and a solid understanding of frontend
          development principles. Committed to continuous learning and delivering
          high-quality solutions. Ready to contribute expertise to new challenges.
        </Text>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
          <a href="/resume_frontend_developer.pdf" download>
            <Button className="cursor-pointer">
                <Download />
                Resume
            </Button>
          </a>
          <Button className="cursor-pointer" variant="outline" onClick={() => handleScroll("contact-section")}>
            <Mail />
            Contact
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px]">

          <div className="absolute inset-0 outline-4 outline-primary rounded-[999px] overflow-hidden md:right-2">
            <img
              className="w-full h-full object-cover"
              src="/sakib.png"
              alt="Sakibur Rahman"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HomeSection;
