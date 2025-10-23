import Text from "../text";

interface Props {
     heading: string;
     title?: string;
}

function SectionHeader({ heading, title }: Props) {
  return (
    <div className="flex items-center justify-center pb-2">
     <div className="max-w-2xl w-full text-center flex flex-col items-center justify-center gap-2">
      <div className="max-w-max w-full flex flex-col space-y-2">
       {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{heading}</h2> */}
       <Text titleMd>{heading}</Text>
       <div className="w-full h-1 md:h-2 bg-primary rounded-4xl"></div>
      </div>
      <Text textBase accentColor>{title}</Text>
     </div>
    </div>
  )
}

export default SectionHeader