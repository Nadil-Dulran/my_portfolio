
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./pages/homepage";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffffff" },
    background: { default: "#000000", paper: "#0a0a0a" },
    text: { primary: "#ffffff", secondary: "#bdbdbd" }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(","),
    h2: { fontWeight: 700, letterSpacing: "0.02em" },
    h4: { fontWeight: 600, letterSpacing: "0.01em" }
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 14 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 20 } } }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
