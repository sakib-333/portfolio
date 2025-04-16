import Hamburger from "./Components/Hamburger";
import Navigation from "./Components/Navigation";

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between max-w-6xl w-full bg-color-1 fixed  mx-auto">
      <div>
        <a href="#home-section" className="flex items-center gap-1.5">
          <img className="w-10 h-10" src="/favicon.png" alt="logo" />
          <h1 className="text-2xl font-bold gradient-text bg-clip-text text-transparent bg-linear-to-r from-cyan-500 to-blue-500">
            Sakib
          </h1>
        </a>
      </div>

      <div className="relative transition-all duration-300">
        <ul className="hidden md:flex items-center gap-5">
          <Navigation />
        </ul>
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
