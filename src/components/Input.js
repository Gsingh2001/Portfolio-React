import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/input.css';

const Navigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation('/project/organify')}>
            Let's Organify
          </span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation('/project/netflix')}>
            Netflix
          </span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation('/project/todo')}>
            To-Do
          </span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation('/project/resume')}>
            Resume
          </span>
        </label>
      </div>
    </div>
  );
};

export default Navigation;
