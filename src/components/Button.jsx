import React from 'react';

const Button = ({ text, customClasses }) => {
  const btnClasses = `btn ${customClasses}`;
  return (
    <div>
      <button className={btnClasses}>{text}</button>
    </div>
  );
};

export default Button;
