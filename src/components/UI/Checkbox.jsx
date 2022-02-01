import React, { useEffect, useState } from "react";

function Checkbox({ className, handleChange, isCompleted }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(isCompleted);
  }, [isCompleted]);

  return (
    <label className={`checkbox-wrapper ${className}`}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
          handleChange();
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            setIsChecked(!isChecked);
            handleChange();
          }
        }}
      />
      <span className={`checkmark ${isChecked ? "checked" : ""}`}>
        <svg
          className="checkmark__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </span>
      <span className="border"></span>
    </label>
  );
}

export default Checkbox;
