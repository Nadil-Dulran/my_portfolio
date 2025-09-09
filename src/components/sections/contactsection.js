import React from 'react';
import {
  Box, Container, Typography, TextField, Button, Stack, Card, CardContent
} from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

export default function ContactSection() {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState('');
  const [snackSeverity, setSnackSeverity] = React.useState('success'); // 'success' | 'error'
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...Object.fromEntries(data) }),
    })
      .then(() => {
        setSnackMsg("Thanks! I’ll get back to you soon.");
        setSnackSeverity('success');
        setSnackOpen(true);
        form.reset();
      })
      .catch(() => {
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
            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* Netlify needs these */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="text" name="bot-field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <Stack spacing={2}>
                <TextField name="name" label="Your Name" required />
                <TextField name="email" label="Email" type="email" required />
                <TextField name="message" label="Message" required multiline minRows={4} />
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

      {/* Auto-dismiss alert */}
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
