import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/HomePage";
import Campuses from "./Pages/CampusPage";
import Students from "./Pages/StudentPage";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Home</h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to = "/"><span>Home</span></Link>
            </li>
            <li>
              <Link to = "/Campuses"><span>Campuses</span></Link>
            </li>
            <li>
              <Link to = "/Students"><span>Campuses</span></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Campuses" element={<Campuses></Campuses>}></Route>
          <Route path="/Students" element={<Students></Students>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
