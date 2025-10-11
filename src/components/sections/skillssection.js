
import React from 'react';
import { Box, Container, Typography, Grid, Chip, Stack, Card, CardContent } from '@mui/material';

const skills = {
  "Programming Languages": ["C/C++", "Java", "Python"],
  "Web Development": ["Next.js", "Node.js", "JavaScript", "TypeScript", ".NET Stack", "REST APIs", "HTML", "CSS"],
  "Databases": ["MySQL", "Azure SQL", "PostgreSQL"],
  "AI & LLM Tools": ["LangChain", "Ollama"],
  "Development Tools & Version Control": ["VS Code", "IntelliJ IDEA", "Jupyter", "GitHub (Branching/Actions)", "GitLab (CI/CD)"],
  "Other Skills": ["Agile Methodologies (Project Management)", "Microsoft Azure/AWS (VMs, Storage, Databases, Web App Deployment)", "Docker (Containerization)", "Unit Testing", "UI/UX Design", "Figma", "Linux"],
};

export default function SkillsSection() {
  return (
    <Box id="skills" className="section">
      <Container className="container">
        <Typography variant="h4" gutterBottom>Skills</Typography>
        <Grid container spacing={3}>
          {Object.entries(skills).map(([cat, items]) => (
            <Grid item xs={12} md={6} key={cat}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>{cat}</Typography>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {items.map(s => <Chip key={s} label={s} variant="outlined" />)}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
