// theme.js
import { createTheme } from "@mui/material/styles";

// Define color palette for dark mode
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11283d",
    },
    secondary: {
      main: "#1b3145", // Dark mode secondary color
    },
    background: {
      card: "#041c32",
      text: "#ffffff",
      icon: "#ffffff", //white icon
      button: "#0277fa",
      c1: "#fff",
      c2: "#fff",
      headline: "#fff",
    },
  },
});

// Define color palette for light mode
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff", // Light mode primary color
    },
    secondary: {
      main: "#ffffff", // Light mode secondary color
    },
    background: {
      card: "#a4c8eb",
      text: "#000000",
      icon: "#2a78d4",
      button: "#0277fa",
      c1: "#333",
      c2: "#666",
      headline: "#2a78d4",
    },
  },
});

export { darkTheme, lightTheme };
