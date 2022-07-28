import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIProvider } from "@mui/material";
import { MUITheme, theme } from "./Components/Utils/Theme/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  faChartSimple,
  faHouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { MainContainer } from "./Components/Main/StyledComponents";

function App() {
  const navLinks = [
    { path: "/", icon: faHouse, page: <Main /> },
    { path: "/add", icon: faPlus, page: <></> },
    { path: "/manage", icon: faChartSimple, page: <></> },
  ];
  return (
    <div className="App">
      <MUIProvider theme={MUITheme}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              {navLinks.map((link) => (
                <Route
                  path={link.path}
                  element={<MainContainer>{link.page}</MainContainer>}
                  key={link.path}
                />
              ))}
            </Routes>
            <Nav links={navLinks} />
          </Router>
        </ThemeProvider>
      </MUIProvider>
    </div>
  );
}

export default App;
