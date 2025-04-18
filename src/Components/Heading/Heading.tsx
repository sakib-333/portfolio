interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h1>
      <div className="w-24 h-2 rounded-full bg-gradient-to-r from-color-2 to-color-3"></div>
    </div>
  );
};

export default Heading;
