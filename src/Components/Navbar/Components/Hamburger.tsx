import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navigation from "./Navigation";

const Hamburger = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  return (
    <div className="md:hidden">
      <button
        className="text-color-2 text-2xl duration-300 p-2 hover:bg-white/10 rounded-md"
        onClick={() => setIsShowing((c) => !c)}
      >
        {isShowing ? <IoClose /> : <GiHamburgerMenu />}
      </button>
      <ul
        className={`${
          isShowing ? "inline" : "hidden"
        } min-h-screen w-full fixed left-0 top-18 space-y-3 p-4 bg-color-1`}
      >
        <Navigation />
      </ul>
    </div>
  );
};

export default Hamburger;
