import useActvSection from "../../../Hooks/useActvSection";
import { NavItem } from "../../../Interfaces/NavItem";

const navItems: NavItem[] = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

const Navigation = () => {
  const { actvSection } = useActvSection();

  return navItems.map((navItem) => (
    <li key={navItem} className="hover:scale-105 duration-100 max-w-max">
      <a
        href={`#${navItem}-section`}
        className={`capitalize transition-colors duration-300 py-0.5 ${
          actvSection === navItem
            ? "text-color-2 border-b-2 border-color-2"
            : "text-color-4"
        }`}
      >
        {navItem}
      </a>
    </li>
  ));
};

export default Navigation;
