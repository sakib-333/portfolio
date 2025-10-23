import { SquareCheck } from "lucide-react";
import Text from "../text";

interface Props {
     experiance: {
          id: string;
          companyLogo: string;
          companyName: string;
          companySite: string;
          position: string;
          duration: string;
          workedWith: string[];
     }
}

function ExperianceCard({ experiance}: Props) {
     const {companyLogo, companyName, companySite, position, duration, workedWith} = experiance;
  return (
    <div className="bg-primary/20 p-4 rounded-sm space-y-2">
     <div className="flex items-center space-x-2">
          <img src={companyLogo} className="rounded-full border w-15 h-15 p-1" alt="company-logo" />
          <div>
               <a href={companySite} target="_blank" rel="noopener noreferrer">
                    <Text titleSm className="hover:text-primary transition-colors duration-200">{companyName}</Text>
               </a>
               <Text textBase>{position}</Text>
               <Text caption accentColor>{duration}</Text>
          </div>
     </div>
     <ul className="space-y-2">
          {workedWith.map(work=> (
               <li className="flex items-start gap-1" key={work}>
                   <SquareCheck className="text-primary" /> <Text textBase accentColor>{work}</Text>
               </li>
          ))}
     </ul>
    </div>
  )
}

export default ExperianceCard