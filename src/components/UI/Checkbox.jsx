import React from "react";

function Checkbox() {
  function toggleCheckboxByKey(event, checkbox) {
    if (event.key === "Enter") {
      checkbox.checked = !checkbox.checked;
    }
  }

  return (
    <label className="checkbox-wrapper">
      <input
        className="checkbox"
        type="checkbox"
        onKeyDown={(e) => toggleCheckboxByKey(e, e.target)}
      />
      <span className="border"></span>
      <span className="checkmark">
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
    </label>
  );
}

export default Checkbox;
