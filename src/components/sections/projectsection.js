
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  { title: "RahasChat-Secure Real Time Messaging App", desc: "Built a private real time messaging application with user authentication, online status, text/image messaging, and responsive UI. Implemented Socket.io for instant communication, media uploads with Cloudinary, and a conversation media gallery. Handled deployment end-to-end, optimized client/server builds, and deployed the full-stack app on Render.", link: "https://github.com/Nadil-Dulran/rahas" },
  { title: "AquaClash-Swimming Tournament Management System", desc: "Web application for inter-university swimming tournaments with admin controls, player registration, and real-time leaderboards. Handled DevOps: containerized with Docker, set up CI/CD pipelines via GitHub Actions, and deployed to Azure for automated builds and deployment.", link: "https://github.com/Nadil-Dulran/stms-group-project" },
  { title: "NEMRA-Smart Apartment Management System", desc: "Designed and Developed a mobile and web-based system to streamline apartment management with features like billing, complaints, notices, marketplace, and parking reservations. Collaborated in a team of four members using Agile (Scrum) with Jira to ensure iterative development, effective communication, and adaptive planning.", link: "https://github.com/Nadil-Dulran/se-group-project-group_12_nemra-apartment_management_system" },
  { title: "Dental Clinic Management System", desc: "Developed a modern web application to streamline clinic operations including patient records, appointment scheduling, billing, and inventory management for a dental clinic. Implemented automated notifications, invoice tracking, and low-stock alerts to improve operational efficiency and patient care.", link: "https://github.com/Nadil-Dulran/dental-clinic-management-system" },
  { title: "FormLang++, Domain-Specific Language tailored for generating HTML forms", desc: "Built a domain-specific language (DSL) to generate HTML forms automatically. Implemented syntax analysis, validation rules, and dropdown support for form customization.", link: "https://github.com/Nadil-Dulran/DSL-HTML-Form-Generator-with-Lex-and-Yacc" },
  { title: "Distributed Messaging System", desc: "Designed and implemented a fault tolerant messaging system with replication and failure handling while ensuring message consistency and improving system reliability.", link: null },
  { title: "Smart Garbage System", desc: "Developed an IoT-based prototype using ESP32 microcontroller with ultrasonic sensors and motor-controlled mechanisms. (Automated garbage transfers process)", link: null },
  { title: "AI Agent for Restaurant Reviews", desc: "Built a simple AI agent to analyze and generate summarized reviews to find a best suitable pizza restaurants using Large Language Models (LLMs).", link: "https://github.com/Nadil-Dulran/AI-Agent-for-Reviews" },
  { title: "Local AI Chat Bot", desc: "Developed a personalized AI chatbot powered by locally running LLMs with Ollama and Integrated LangChain to enable conversational workflows without relying on external APIs or subscriptions.", link: "https://github.com/Nadil-Dulran/Local-AI-Chat_Bot" },
  { title: "FuelGo-Mobile App Prototype for Fuel", desc: "Designed a mobile application to improve fuel station efficiency and customer convenience, featuring GPS-based station finder, fuel ordering, and online payment integration.", link: "https://github.com/Nadil-Dulran/FuelGo-Mobile-App-Design" }

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
                  {p.link ? <Button href={p.link} target="_blank">View</Button> : <Button></Button>}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
