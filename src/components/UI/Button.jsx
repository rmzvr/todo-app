import React from "react";

function Button({ children, className, ...attrs }) {
  return (
    <button className={`button ${className}`} {...attrs}>
      {children}
    </button>
  );
}

export default Button;
