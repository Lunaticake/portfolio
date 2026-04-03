import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: any) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  if (formData.get('company')) {
    return;
  }

  if (isSending) return;

  const isNameEmpty = name === '';
  const isEmailEmpty = email === '';
  const isMessageEmpty = message === '';

  setNameError(isNameEmpty);
  setEmailError(isEmailEmpty);
  setMessageError(isMessageEmpty);

  if (isNameEmpty || isEmailEmpty || isMessageEmpty) return;

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    setEmailError(true);
    return;
  }

  setIsSending(true);

  const templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,   
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,  
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY!    
    )
    .then(
      () => {
        alert('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');

        const EMAIL_COOLDOWN_SECONDS = 5;
        setTimeout(() => {
          setIsSending(false);
        }, EMAIL_COOLDOWN_SECONDS * 1000);
      },
      (error) => {
        console.error(error);
        alert('Failed to send message.');
      }
    );
};

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1> 
          <p>Got a project in the works? I'd love to know more about it!</p>
          <p>
            Just use the contact form below or send me a message here: 
            <div className="social_icons">
              <a href="mailto:cedric.ferstl@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/>cedric.ferstl@gmail.com </a>
              <a href="https://www.linkedin.com/in/cedric-ferstl/" target="_blank" rel="noreferrer"><LinkedInIcon/>in/cedric-ferstl</a>
            </div>
            <div className="mobile_social_icons">
              <a href="mailto:cedric.ferstl@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/>cedric.ferstl@gmail.com </a>
              <a href="https://www.linkedin.com/in/cedric-ferstl/" target="_blank" rel="noreferrer"><LinkedInIcon/>in/cedric-ferstl</a>
            </div>
          </p>
          <Box
            ref={form}
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <input
              type="text"
              name="company"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email address" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={isSending}>
              {isSending ? "Sending..." : "Send"}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;