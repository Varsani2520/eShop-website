// theme.js
import { createTheme } from "@mui/material/styles";

// Define color palette for dark mode
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90CAF9",
    },
    secondary: {
      main: "#0d1b2a", // Dark mode secondary color
    },
    background: {
      body: "#0d1b2a",
      text: "#ffffff",
      indicator: "#ffffff",
      icon: "#ffffff",
      button: "#2f80f0",
    },
    // icon: {
    //   color: "#277ed4",
    // },
  },
});

// Define color palette for light mode
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2", // Light mode primary color
    },
    secondary: {
      main: "#a4c8eb", // Light mode secondary color
    },
    background: {
      body: "#ffffff",
      text: "#000000",
      indicator: "#000000",
      icon: "#000000",
      button: "#2f80f0",
    },
    // icon: {
    //   color: "#277ed4",
    // },
  },
});

export { darkTheme, lightTheme };
