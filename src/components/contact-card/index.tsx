import Text from "../text"
import type React from "react";

interface Props {
     contact: {
          id: string;
          title: string;
          value: string;
          icon: React.ReactNode;
     }
}

function ContactCard({ contact }: Props) {
  return (
    <div className="flex items-stretch gap-2">
     <div className="p-3 bg-primary/20 rounded-sm flex items-center justify-center">
          {contact.icon}
     </div>
     <div className=""> 
          <Text titleSm weight="bold">{contact.title}</Text>
          <Text textBase accentColor>{contact.value}</Text>
     </div>
    </div>
  )
}

export default ContactCard