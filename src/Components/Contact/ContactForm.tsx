import { SyntheticEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendMail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={formRef} className="space-y-3" onSubmit={handleSendMail}>
      <input
        type="text"
        name="senderName"
        placeholder="Your name"
        required
        className="input w-full bg-color-5/50 shadow-none text-color-4"
      />
      <input
        type="text"
        name="senderEmail"
        placeholder="Your email"
        required
        className="input w-full bg-color-5/50 shadow-none text-color-4"
      />
      <textarea
        className="textarea w-full bg-color-5/50 shadow-none text-color-4"
        placeholder="Your message"
        name="message"
        required
      ></textarea>
      <button className="px-5 py-2 font-bold text-color-4 cursor-pointer rounded-sm flex items-center justify-center gap-2 bg-color-2 w-full">
        <span>Send</span>
        <IoIosSend />
      </button>
    </form>
  );
};

export default ContactForm;
