import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

interface FormData {
  senderName: string;
  senderEmail: string;
  message: string;
}

const Contact = ({ setActvSec }: ContactProps) => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActvSec("Contact");
    }
  }, [inView, setActvSec]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Element name="Contact">
      <div
        ref={ref}
        className="w-full h-full flex flex-col items-center gap-4 sm:flex-row p-4 py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <div className="space-y-4 w-full">
          <h1 className="max-w-[400px] w-full md:text-left font-bold text-[28px] sm:text-4xl md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p>Please fill up the form to send email.</p>
          <p>
            <LocationOnIcon /> <span>Gopalganj, Dhaka</span>
          </p>
          <p>
            <EmailIcon /> <span>sakib.cse.333@gmail.com</span>
          </p>
        </div>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            type="text"
            id="outlined-required-name"
            {...register("senderName", { required: true })}
            label="Your full name"
            placeholder="John Snow"
          />
          <TextField
            type="email"
            {...register("senderEmail", { required: true })}
            id="outlined-required-email"
            label="Your email address"
            placeholder="snow@gmail.com"
          />
          <TextField
            type="text"
            id="outlined-required-message"
            multiline
            minRows={5}
            label="Your message"
            {...register("message", { required: true })}
            placeholder="Hello! I would like to invite you, to work with us."
          />
          <Button variant="contained" type="submit" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </div>
    </Element>
  );
};

export default Contact;
