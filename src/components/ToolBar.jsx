import React from "react";
import ToggleSwitch from "./Toggle";

const ToolBar = (props) => {
  return (
    <span className="tool-bar">
      <div>
        <i className="fas fa-paint-brush"></i>

        <ToggleSwitch handleOnClick={props.toggleMode} id={props.id} />
      </div>
      <label className="tool-bar-score">
        Generation {props.generation | 0}
      </label>
      <div>
        <button className="death-button" onClick={props.cleanLife}>
          <i className="fas fa-skull"></i>
        </button>
        <button className="random-button" onClick={props.randomLife}>
          <i className="fas fa-random"></i>
        </button>
      </div>
    </span>
  );
};

export default ToolBar;
