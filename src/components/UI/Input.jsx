import React from "react";

function Input({ className, placeholder, handleChange, handleKey, ...attrs }) {
  return (
    <input
      type="text"
      className={`input ${className}`}
      {...attrs}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          handleKey();
        }
      }}
    />
  );
}

export default Input;
