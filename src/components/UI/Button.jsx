import React from "react";

function Button({ children, className = "", handleClick, ...attrs }) {
  return (
    <button onClick={handleClick} className={`button ${className}`} {...attrs}>
      {children}
    </button>
  );
}

export default Button;
