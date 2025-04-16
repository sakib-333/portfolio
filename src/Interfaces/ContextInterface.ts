import { NavItem } from "./NavItem";

export interface ContextInterface {
  actvSection: NavItem;
  setActvSection: (section: NavItem) => void;
}
