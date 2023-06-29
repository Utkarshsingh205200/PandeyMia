import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Courses from "./Components/Courses";
import Header from "./Essentials/Header";
import Footer from "./Essentials/Footer";
import Linkss from "./Components/Linkss"
import About from "./Components/About"
import Contact from "./Components/Contact"
import AddCourse from "./Components/AddCourse";
import Login from './Components/Login';
import Register from './Components/Register';


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="Wrap">
        <Header />
          <div className="Content container">
            <div className="Links">
              <Linkss/>
            </div>
            <div className="Contentss">
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/Courses" Component={Courses} exact />
                <Route path="/About" Component={About} exact />
                <Route path="/AddCourse" Component={AddCourse} exact/>
                <Route path="/Contact" Component={Contact} exact/>
                <Route path='/login' Component={Login}></Route>
                <Route path='/Register' Component={Register}></Route>
              </Routes>
            </div>
          </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
