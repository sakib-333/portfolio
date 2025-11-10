import Text from "@/components/text"
import { GraduationCap } from "lucide-react";

interface Props {
        education: {
                indx: number;
                degree: string;
                institute: string;
                year: number;
        },
        length: number
}

function EducationCard({ education, length }: Props) {
        const { indx, degree, institute, year } = education;
  return (
        <div className={`flex items-stretch justify-center w-full gap-4 ${indx%2 && "lg:flex-row-reverse"}`}>
          {/* Left Card */}
          <div className="flex lg:hidden flex-col items-center">
            <div className={`w-0.5 flex-1 border-2`} style={{borderColor: indx ? "#ffffffe6":"#0a0a0a"}} />
            <div className="w-8 h-8 p-1 rounded-full border-2 border-primary flex items-center justify-center">
                <GraduationCap size={24} />
            </div>
            <div className={`w-0.5 flex-1 border-2`} style={{borderColor: indx === length-1 ? "#0a0a0a":"#ffffffe6"}} />
          </div> 

          <div className="flex-1 flex lg:justify-end py-2">
            <div className="p-4 bg-primary/20 rounded-sm space-y-2 w-full">
              <Text titleSm weight="bold">{degree}</Text>
              <Text textBase>{institute}</Text>
              <Text caption>{year}</Text>
            </div>
          </div>

          {/* Center Timeline */}
          <div className="hidden lg:flex flex-col items-center">
            {/* <div className="w-[2px] flex-1 border-2 border-background" /> */}
            <div className={`w-0.5 flex-1 border-2`} style={{borderColor: indx ? "#ffffffe6":"#081c13"}} />
            <div className="w-8 h-8 p-1 rounded-full border-2 border-primary flex items-center justify-center">
                <GraduationCap size={24} />
            </div>
            <div className={`w-0.5 flex-1 border-2`} style={{borderColor: indx === length-1 ? "#081c13":"#ffffffe6"}} />
          </div> 
          <div className="flex-none lg:flex-1" />
        </div>
  )
}

export default EducationCard