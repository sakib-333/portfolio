import Text from "../text";

interface Props {
  skill: {
    category: string;
    title: string;
    icon: string;
  };
}

function SkillCard({ skill }: Props) {
  const { title, icon } = skill;
  return (
    <div className="p-4 bg-primary/20 rounded-sm border-l-4 flex gap-4 items-center flex-grow h-full">
      <img src={icon} className="w-15 h-15 bg-primary/20 p-2 rounded-sm" alt="logo" />
      <Text textBase accentColor>{title}</Text>
    </div>
  );
}

export default SkillCard;
