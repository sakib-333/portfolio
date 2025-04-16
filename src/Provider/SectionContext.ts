import { createContext } from "react";
import { ContextInterface } from "../Interfaces/ContextInterface";

const ContextValue: ContextInterface = {
  actvSection: "home",
  setActvSection: () => {},
};

export const SectionContext = createContext(ContextValue);
