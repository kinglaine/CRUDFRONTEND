import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/HomePage";
import Campuses from "../Pages/CampusPage";
import Students from "../Pages/StudentPage";
function App() {
  const [pageName, setPageName] = useState("");
  return (
    <Router>
      <div className="App">
        <h1>{pageName}</h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to = "/"><span>Home</span></Link>
            </li>
            <li>
              <Link to = "/Campuses"><span>Campuses</span></Link>
            </li>
            <li>
              <Link to = "/Students"><span>Students</span></Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home setPageName ={setPageName}></Home>}></Route>
          <Route path="/Campuses" element={<Campuses setPageName ={setPageName}></Campuses>}></Route>
          <Route path="/Students" element={<Students setPageName ={setPageName}></Students>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
