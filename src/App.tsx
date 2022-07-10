import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/Utils/Theme/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  faChartSimple,
  faHouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const navLinks = [
    { link: "/", icon: faHouse },
    { link: "/add", icon: faPlus },
    { link: "/manage", icon: faChartSimple },
  ];
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Nav links={navLinks} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
