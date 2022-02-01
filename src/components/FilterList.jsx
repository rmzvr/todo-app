import React from "react";
import Button from "./UI/Button";

function FilterList({ activeButton, setActiveButton }) {
  const buttons = ["All", "Active", "Completed"];

  return (
    <ul className="filters">
      {buttons.map((button) => (
        <li
          key={button}
          className={activeButton === button ? "filter active" : "filter"}
        >
          <Button
            type="button"
            handleClick={() => {
              setActiveButton(button);
            }}
          >
            {button}
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default FilterList;
