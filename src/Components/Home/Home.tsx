import { IoMdDownload } from "react-icons/io";
import useInViewSection from "../../Hooks/useInViewSection";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const ref = useInViewSection("home");
  return (
    <div ref={ref} id="home-section" className="px-4 max-w-6xl">
      <div className="w-full flex flex-col justify-center md:flex-row items-center md:justify-between gap-12">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <div className="flex items-center justify-center md:items-start flex-wrap md:flex-col gap-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            <h1 className="text-white">Hello, I'm</h1>
            <span className="gradient-text bg-clip-text text-transparent bg-linear-to-r from-color-2 to-color-3">
              Sakibur Rahman
            </span>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-color-4">
            Frontend Developer
          </h1>
          <p className="text-color-4/80 text-justify">
            Motivated frontend developer with a strong track record of
            successfully completing various projects. Proficient in various
            programming languages and technologies, including C, C++, and web
            development technologies (HTML, CSS, JavaScript). Strong
            problem-solving abilities and a solid understanding of frontend
            development principles. Committed to continuous learning and
            delivering high-quality solutions. Ready to contribute expertise to
            new challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/frontend_developer.pdf"
              download
              className="bg-color-2 btn-primary text-color-4"
            >
              <IoMdDownload />
              <span>Resume</span>
            </a>
            <a
              href="#contact-section"
              className="border border-color-4 btn-primary text-color-4"
            >
              <MdEmail />
              <span>Contact</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
            <div className="w-full h-full bg-gradient-to-br from-color-2 to-color-3 rounded-full">
              <img
                className="p-2 w-full h-full rounded-full object-cover"
                src="/sakib.png"
                alt="profile-photo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
