import useInViewSection from "../../Hooks/useInViewSection";
import Heading from "../Heading/Heading";
import contactStack from "./contactStack";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  const ref = useInViewSection("contact");
  return (
    <div
      ref={ref}
      id="contact-section"
      className="min-h-screen mt-20 pb-20 px-4 mx-auto"
    >
      <Heading title="Contact" />
      <p className="max-w-2xl mt-4 mx-auto text-center text-color-4/80">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between gap-3.5">
          {contactStack.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
