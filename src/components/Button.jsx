// File: Button.jsx
// Description: Reusable button component
// Author: Aniket
// Created: June 2025
import React from 'react';
const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition-all ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
