import React, { useEffect } from 'react';
import { NavLink, Outlet, Route, useNavigate } from 'react-router-dom';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import Input from '../components/Input';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Project() {


  return (
    <div>
      <Nav2 />
      <header className="ex-header">
        <div className="container">
         <Input/>
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
