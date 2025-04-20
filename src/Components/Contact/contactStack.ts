import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const contactStack = [
  {
    id: "contact-1",
    method: "Email",
    contact: "sakib.cse.333@gmail.com",
    icon: MdEmail,
  },
  {
    id: "contact-2",
    method: "Phone",
    contact: "+8801955-207333",
    icon: IoCallSharp,
  },
  {
    id: "contact-3",
    method: "Location",
    contact: "Gopalganj, Dhaka",
    icon: MdLocationPin,
  },
];

export default contactStack;
