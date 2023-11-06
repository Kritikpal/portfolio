
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import About from './components/About/About.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
