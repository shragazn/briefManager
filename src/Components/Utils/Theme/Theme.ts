import { createTheme } from "@mui/material";
import { DefaultTheme } from "styled-components";

export const MUITheme = createTheme({
  palette: {
    common: { black: "#303646", white: "#ffffff" },
    primary: { main: "#8E94E5", contrastText: "#ffffff" },
    secondary: { main: "#303646", contrastText: "#ffffff" },
    success: { main: "#0FD7AE", contrastText: "#ffffff" },
    error: { main: "#E21241", contrastText: "#ffffff" },
    warning: { main: "#F2996F", contrastText: "#ffffff" },
    background: { default: "#E2E5ED", paper: "#ffffff" },
  },
});

const theme: DefaultTheme = {
  colors: {
    background: {
      paper: "#ffffff",
      main: "#E2E5ED",
      sub: "#1D1C20",
    },
    icon: {
      main: "#E2E5ED",
      container: "#303646",
    },
    text: {
      primary: "#303646",
      secondary: "#BBBBBB",
    },

    //      buttons     //
    primary: {
      main: "#8E94E5",
      text: "#ffffff",
    },
    user: {
      main: "#303646",
      text: "#ffffff",
    },
    sucssess: {
      main: "#0FD7AE",
      text: "#ffffff",
    },
    error: {
      main: "#E21241",
      text: "#ffffff",
    },
    warning: {
      main: "#F2996F",
      text: "#ffffff",
    },
    secondary: {
      main: "#36B0E8",
      text: "#ffffff",
    },
  },
  font: {
    h1: { family: "rubik", size: "25px", weight: "bold" },
    h2: { family: "rubik", size: "20px", weight: "bold" },
    h3: { family: "rubik", size: "16px", weight: "bold" },
    main: { family: "rubik", size: "16px", weight: "regular" },
  },
};
export { theme };
