import { useContext } from "react";
import { SectionContext } from "../Provider/SectionContext";

const useActvSection = () => {
  const { actvSection, setActvSection } = useContext(SectionContext);

  return { actvSection, setActvSection };
};

export default useActvSection;
