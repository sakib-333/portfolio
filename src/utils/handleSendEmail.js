const handleSendEmail = (e) => {
  e.preventDefault();

  const form = e.target;

  const senderName = form.senderName.value;
  const senderEmail = form.senderEmail.value;
  const message = form.message.value;

  console.log({ senderName, senderEmail, message });
};

export default handleSendEmail;
