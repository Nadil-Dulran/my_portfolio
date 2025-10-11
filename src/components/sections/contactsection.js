import React from 'react';
import {
  Box, Container, Typography, TextField, Button, Stack, Card, CardContent
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState('');
  const [snackSeverity, setSnackSeverity] = React.useState('success');
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;

    emailjs
      .sendForm(
        'service_portfolio',   // Service ID
        'template_portfolio',  // Template ID
        form,
        'Weq2vHwtxfYq_JFhJ'    // Public Key
      )
      .then(() => {
        setSnackMsg("Thanks! I’ll get back to you soon.");
        setSnackSeverity('success');
        setSnackOpen(true);
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setSnackMsg('Something went wrong. Please try again.');
        setSnackSeverity('error');
        setSnackOpen(true);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Box id="contact" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <Card variant="outlined">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField name="name" label="Your Name " required />
                <TextField name="email" label="Email " type="email" required />
                <TextField name="message" label="Message " required multiline minRows={4} />
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send'}
                  </Button>
                  <Button variant="outlined" href="mailto:nadilgamage@gmail.com">Email</Button>
                </Stack>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={snackOpen}
        autoHideDuration={5000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={snackSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
