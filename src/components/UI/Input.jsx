import React from "react";

function Input({ placeholder, ...attrs }) {
  return <input className="input" {...attrs} placeholder={placeholder} />;
}

export default Input;
