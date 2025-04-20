import { IconType } from "react-icons";

type Contact = {
  id: string;
  method: string;
  contact: string;
  icon: IconType;
};

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 text-4xl text-color-4 w-fit rounded-md bg-color-2/20">
        <contact.icon />
      </div>
      <div>
        <p className="text-xl font-bold text-color-4">{contact.method}</p>
        <p className="text-color-4/80">{contact.contact}</p>
      </div>
    </div>
  );
};

export default ContactCard;
