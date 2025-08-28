
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

export default function AboutSection() {
  return (
    <Box id="about" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>About</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ lineHeight: 1.8 }}>
              I am a Computer Science undergraduate at SLIIT, passionate about blending AI technology,
              user interface design, and storytelling to create impactful digital experiences through software development.
              I enjoy working on projects that follow established guidelines and thrive in collaborative team environments.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Based in</Typography>
                <Typography variant="h6" gutterBottom>Colombo, Sri Lanka</Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Email</Typography>
                <Typography variant="h6" gutterBottom>nadilgamage@gmail.com</Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Links</Typography>
                <Typography><a href="https://www.linkedin.com/in/nadil-dulran" target="_blank" rel="noreferrer">LinkedIn</a></Typography>
                <Typography><a href="https://github.com/Nadil-Dulran" target="_blank" rel="noreferrer">GitHub</a></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
