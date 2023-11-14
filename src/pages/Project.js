import React, { useEffect } from 'react';
import { NavLink, Outlet, Route, useNavigate } from 'react-router-dom';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';



function Project() {


  return (
    <div>
      <Nav2 />
      <header className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 Project-Heading">
              Project Details
            </div>
            <div className="radio-inputs">
              <label className="radio">
                <NavLink className="name" to="/project/organify">
                  Let's Organify
                </NavLink>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <NavLink className="name" to="/project/netflix">
                  Netflix
                </NavLink>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <NavLink className="name" to="/project/todo">
                  To-Do
                </NavLink>
              </label>
              <label className="radio">
                <input type="radio" name="radio" />
                <NavLink className="name" to="/project/resume">
                  Resume
                </NavLink>
              </label>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
      
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Project;
