
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';

export default function HomeSection() {
  return (
    <Box id="home" className="section" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container className="container">
        <Typography variant="h2" gutterBottom>
          Nadil Dulran Gamage
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.8, mb: 3 }}>
          Computer Science Undergraduate • AI & UI Enthusiast
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="#projects" onClick={(e)=>{e.preventDefault(); document.querySelector('#projects').scrollIntoView({behavior:'smooth'});}}>
            View Projects
          </Button>
          <Button variant="outlined" href="mailto:nadilgamage@gmail.com">
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
