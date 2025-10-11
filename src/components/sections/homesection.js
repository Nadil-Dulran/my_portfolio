
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
        {/* Use Grid with no wrap at md+ to keep avatar and name on one row across browsers */}
        <Grid
          container
          alignItems="center"
          columnSpacing={{ xs: 0, sm: 4, md: 6 }}
          rowSpacing={{ xs: 6, sm: 6, md: 0 }}
          sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}
        >
          <Grid item xs={12} md={7} sx={{ minWidth: 0 }}>
            <Typography variant="h2" gutterBottom sx={{ lineHeight: 1.1 }}>
              Nadil Dulran Gamage
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, mb: 3 }}>
              Computer Science Undergraduate • Tech Enthusiast
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
              imgProps={{ loading: 'eager', decoding: 'async' }}
              sx={{
                width: { xs: 220, sm: 260, md: 300 },
                height: { xs: 220, sm: 260, md: 300 },
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                flexShrink: 0,
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
