import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import handleSendEmail from "../utils/handleSendEmail";

const Contact = () => {
  return (
    <Box sx={{ marginTop: "3rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            paddingTop: { xs: "2rem" },
            paddingLeft: { md: "2rem" },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              fontWeight: "bold",
              color: "green",
            }}
          >
            Get in touch
          </Typography>
          <Typography variant="p">
            Please fill up the form to send email.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon />
            <Typography variant="p">Gopalganj, Dhaka</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MailIcon />
            <Typography variant="p">sakib.cse.333@gmail.com</Typography>
          </Box>
        </Box>
        <Box
          sx={{ flex: 1, paddingLeft: { md: "1rem" }, borderLeft: { md: 2 } }}
        >
          <Box
            component="form"
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
              name="senderName"
              id="outlined-required-name"
              label="Your full name"
              placeholder="John Snow"
            />
            <TextField
              required
              type="email"
              name="senderEmail"
              id="outlined-required-email"
              label="Your email address"
              placeholder="snow@gmail.com"
            />
            <TextField
              required
              type="text"
              name="message"
              id="outlined-required-message"
              multiline
              minRows={5}
              label="Your message"
              placeholder="Hello! I would like to invite you, to work with us."
            />
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
