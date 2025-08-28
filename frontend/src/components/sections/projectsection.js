
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  { title: "Smart Garbage IoT System", desc: "Team project (1st year): IoT-based smart garbage management.", link: null },
  { title: "Clinic Operations Web App", desc: "Team project (2nd year): Streamlined clinic operations for dental professionals.", link: null },
  { title: "Smart Apartment Management", desc: "Team project (2nd year): Web & mobile front-end for apartment management.", link: null },
  { title: "FuelGo UI/UX", desc: "Individual: Prototype for a mobile app to locate filling stations, order fuel, and track status.", link: null },
  { title: "AI Agent for Restaurant Reviews", desc: "Individual: Built with LLMs to analyze and summarize reviews.", link: null },
  { title: "Personalized Local AI Chatbot", desc: "Individual: On-device chatbot using Ollama.", link: null }
];

export default function ProjectSection() {
  return (
    <Box id="projects" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.title} item xs={12} md={4}>
              <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>{p.title}</Typography>
                  <Typography sx={{ opacity: 0.9 }}>{p.desc}</Typography>
                </CardContent>
                <CardActions>
                  {p.link ? <Button href={p.link} target="_blank">View</Button> : <Button disabled>Coming Soon</Button>}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
