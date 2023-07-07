import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "../Pages/HomePage";
import Campuses from "../Pages/CampusPage";
import Students from "../Pages/StudentPage";
import SingleCampusViewComponent from "../components/campusComponents/SingleCampusViewComponent";
import AddCampusForm from "../components/Forms/AddCampusForm";
import EditCampusForm from "../components/Forms/EditCampusForm";
function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Campuses" element={<Campuses></Campuses>}></Route>
          <Route path="/campuses/addCampus" element={<AddCampusForm></AddCampusForm>}></Route>
          <Route path="/Students" element={<Students></Students>}></Route>
          <Route path="/campusView/:campusName" element={<SingleCampusViewComponent></SingleCampusViewComponent>}></Route>
          <Route path="/campuses/EditCampus/:campusName" element={<EditCampusForm></EditCampusForm>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
