
import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid, Avatar } from '@mui/material';

export default function HomeSection() {
  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box id="home" className="section" sx={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
      <Container className="container">
        <Grid container spacing={18} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" gutterBottom>
              Nadil Dulran Gamage
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, mb: 3 }}>
              Computer Science Undergraduate    • Tech Enthusiast
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                onClick={() => handleScrollTo('#projects')}
              >
                View Projects
              </Button>
              <Button variant="outlined" href="mailto:nadilgamage@gmail.com">
                Contact Me
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="Nadil profile photo"
              src="/Profile.jpeg" 
              sx={{
                width: { xs: 220, sm: 260, md: 300 },
                height: { xs: 220, sm: 260, md: 300 },
                //border: '2px solid rgba(255,255,255,0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                //filter: 'grayscale(100%)',
              }}
            >
              N
            </Avatar>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
