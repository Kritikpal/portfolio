import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import ContactMePage from "./components/ContactMe/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/home" Component={Home} />
        <Route path="/contact" Component={ContactMePage} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
