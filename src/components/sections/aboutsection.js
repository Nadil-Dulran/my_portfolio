
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Link } from '@mui/material';


export default function AboutSection() {
  return (
    <Box id="about" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>About me</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ lineHeight: 2.0 }}>
              I am a Computer Science undergraduate at SLIIT, actively seeking opportunities to explore new technologies and gain
              hands-on experience. I am passionate about blending AI technology, user interface design, and storytelling to create
              impactful digital experiences through software development. I enjoy working on projects that follow established
              guidelines and principles with collaborative team environments to ensure successful project completion.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Based in</Typography>
                <Typography variant="h6" gutterBottom>Colombo, Sri Lanka</Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Email</Typography>
                <Typography variant="h6" gutterBottom>
                  <Link
                    href="mailto:nadilgamage@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    sx={{
                      color: '#ffffffff',
                      textDecorationColor: 'rgba(255,255,255,0.3)',
                      '&:hover': { color: '#ffffff', textDecorationColor: '#ffffff' },
                      '&:visited': { color: '#ffffffff' },
                    }}
                  >
                    nadilgamage@gmail.com
                  </Link>
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Links</Typography>
                <Typography>
                  <Link
                    href="https://github.com/Nadil-Dulran"
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    sx={{
                      color: '#90caf9',
                      textDecorationColor: 'rgba(255,255,255,0.3)',
                      '&:hover': { color: '#ffffff', textDecorationColor: '#ffffff' },
                      '&:visited': { color: '#90caf9' },
                    }}
                  >
                    GitHub
                  </Link>
                </Typography>
                <Typography>
                  <Link
                    href="https://www.linkedin.com/in/nadil-dulran"
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    sx={{
                      color: '#90caf9',
                      textDecorationColor: 'rgba(255,255,255,0.3)',
                      '&:hover': { color: '#ffffff', textDecorationColor: '#ffffff' },
                      '&:visited': { color: '#90caf9' },
                    }}
                  >
                    LinkedIn
                  </Link>
                </Typography>             
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
