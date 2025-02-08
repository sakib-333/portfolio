import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

interface ContactProps {
  setActvSec: React.Dispatch<React.SetStateAction<string>>;
}

const Contact = ({ setActvSec }: ContactProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActvSec("Contact");
    }
  }, [inView, setActvSec]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendEmail = (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      const ENV = import.meta.env;
      emailjs
        .sendForm(ENV.VITE_serviceID, ENV.VITE_templateID, formRef.current, {
          publicKey: ENV.VITE_publicKey,
        })
        .then(() => {
          setOpen(true);
          formRef.current?.reset();
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <Element name="Contact">
      <div
        ref={ref}
        className="w-full h-full flex flex-col items-center gap-4 sm:flex-row p-4 py-4 sm:py-6 md:py-8 lg:py-10"
      >
        <div
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="200"
          className="space-y-4 w-full"
        >
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
          <p>
            <LocalPhoneIcon /> <span>+8801955207333</span>
          </p>
        </div>
        <Box
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-once="false"
          data-aos-duration="200"
          data-aos-offset="100"
          component="form"
          ref={formRef}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          onSubmit={handleSendEmail}
        >
          <TextField
            required
            type="text"
            id="outlined-required-name"
            label="Your full name"
            name="senderName"
            placeholder="John Snow"
          />
          <TextField
            required
            type="email"
            id="outlined-required-email"
            label="Your email address"
            name="senderEmail"
            placeholder="snow@gmail.com"
          />
          <TextField
            required
            type="text"
            id="outlined-required-message"
            multiline
            name="message"
            minRows={5}
            label="Your message"
            placeholder="Hello! I would like to invite you, to work with us."
          />
          <Button
            type="submit"
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="center"
            variant="contained"
          >
            Send
          </Button>
        </Box>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Email sent!
          </Alert>
        </Snackbar>
      </div>
    </Element>
  );
};

export default Contact;
