import useInViewSection from "../../Hooks/useInViewSection";

const Contact = () => {
  const ref = useInViewSection("contact");
  return (
    <div ref={ref} id="contact-section" className="min-h-screen text-white">
      <h1 className="text-4xl">Contact Component</h1>
    </div>
  );
};

export default Contact;
