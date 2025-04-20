import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-black">
      <div className="max-w-6xl px-4 pt-8 mx-auto text-color-4 flex items-center justify-between">
        <p className="text-xs">&copy; 2025</p>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://github.com/sakib-333"
              className="hover:text-color-2 transition-all duration-200"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sakibur-rahman"
              target="_blank"
              className="hover:text-color-2 transition-all duration-200"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/sakib071"
              target="_blank"
              className="hover:text-color-2 transition-all duration-200"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/sakib_333x"
              target="_blank"
              className="hover:text-color-2 transition-all duration-200"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
