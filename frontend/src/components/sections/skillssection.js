
import React from 'react';
import { Box, Container, Typography, Grid, Chip, Stack, Card, CardContent } from '@mui/material';

const skills = {
  "Programming Languages": ["C/C++", "Java", "Python"],
  "Frameworks & Libraries": ["Next.js", "LangChain", "Ollama", "JavaScript", "Bootstrap"],
  "UI & Tools": ["Figma", "HCI Principles", "draw.io"],
  "Dev Tools": ["VS Code", "IntelliJ IDEA", "Jupyter", "GitHub"]
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
