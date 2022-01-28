import React from "react";
import Checkbox from "./UI/Checkbox";

function Task() {
  return (
    <li className="task">
      <Checkbox />
      <span>10 minutes meditation</span>
    </li>
  );
}

export default Task;
