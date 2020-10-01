import React from 'react';

const Button = ({ name, className, onClick }) => (
  <>
    <button
      type="button"
      className={`btn--${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  </>
);

export default Button;
