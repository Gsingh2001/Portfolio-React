import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Organify from './components/project/Organify';
import Netflix from './components/project/Netflix';
import Resume from './components/project/Resume';
import Todo from './components/project/Todo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/home" element={<Home />} />
        </Route>
    
        
        <Route path="/project" element={<Project />}>
          <Route path="organify" element={<Organify />} />
          <Route path="Netflix" element={<Netflix />} />
          <Route path="Resume" element={<Resume />} />
          <Route path="Todo" element={<Todo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
