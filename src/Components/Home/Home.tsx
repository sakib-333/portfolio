import useInViewSection from "../../Hooks/useInViewSection";

const Home = () => {
  const ref = useInViewSection("home");
  return (
    <div ref={ref} id="home-section" className="min-h-screen text-white">
      <h1 className="text-4xl">Home Component</h1>
    </div>
  );
};

export default Home;
