
import React from "react";
import ResponsiveAppBar from "../components/navbar";
import HomeSection from "../components/sections/homesection";
import AboutSection from "../components/sections/aboutsection";
import SkillsSection from "../components/sections/skillssection";
import ProjectSection from "../components/sections/projectsection";
import ContactSection from "../components/sections/contactsection";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ height: 64 }} /> {/* spacer for fixed app bar */}
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Box sx={{ py: 6, textAlign: 'center', opacity: 0.6 }}>© {new Date().getFullYear()} Nadil Dulran Gamage</Box>
    </Box>
  );
}
