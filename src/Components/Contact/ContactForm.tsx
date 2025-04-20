import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <form className="space-y-3">
      <input
        type="text"
        placeholder="Your name"
        required
        className="input w-full bg-color-5/50 shadow-none text-color-4"
      />
      <input
        type="text"
        placeholder="Your email"
        required
        className="input w-full bg-color-5/50 shadow-none text-color-4"
      />
      <textarea
        className="textarea w-full bg-color-5/50 shadow-none text-color-4"
        placeholder="Your message"
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
