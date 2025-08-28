
import React from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Card, CardContent } from '@mui/material';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    alert(`Thanks, ${name}! I will reach out to ${email} soon.\n\nMessage:\n${message}`);
    e.currentTarget.reset();
  };

  return (
    <Box id="contact" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <Card variant="outlined">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField name="name" label="Your Name" required />
                <TextField name="email" label="Email" type="email" required />
                <TextField name="message" label="Message" required multiline minRows={4} />
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained">Send</Button>
                  <Button variant="outlined" href="mailto:nadilgamage@gmail.com">Email</Button>
                </Stack>
              </Stack>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
