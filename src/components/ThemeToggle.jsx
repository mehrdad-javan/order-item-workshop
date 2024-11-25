import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, toggleMode }) => {
  return (
    <div className="container mb-4">
      <button
        className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
        onClick={toggleMode}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />} {isDarkMode ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeToggle;
