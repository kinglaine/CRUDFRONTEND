import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/HomePage";
import Campuses from "./Pages/CampusPage";
import Students from "./Pages/StudentPage";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/Campuses">Campuses</Link>
            </li>
            <li>
              <Link to = "/Students">Students</Link>
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
