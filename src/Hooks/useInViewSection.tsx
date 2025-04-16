import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import useActvSection from "./useActvSection";
import { NavItem } from "../Interfaces/NavItem";

const useInViewSection = (currSection: NavItem) => {
  const { setActvSection } = useActvSection();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const actvSection = useInView(sectionRef, { amount: 0.5, once: false });

  useEffect(() => {
    if (actvSection) {
      setActvSection(currSection);
    }
  }, [actvSection, setActvSection]);

  return sectionRef;
};

export default useInViewSection;
