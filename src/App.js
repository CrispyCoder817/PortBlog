import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from './Pages/Home';
import Blog from "./Pages/Blog";
import Stories from './Pages/Stories';
import './App.css';
import { gsap } from "gsap";

function App() {
  return (
    <div>
    <div className="darkness">
    <Router>
    <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/Blog' element={<Blog/>} exact/>
      <Route exact='/Stories' element={<Stories/>} exact/>
      </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
