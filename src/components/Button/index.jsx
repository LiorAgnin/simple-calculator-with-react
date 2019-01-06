import React from "react";
import "./styles.scss";

const isOperator = val => !isNaN(val) || val === "." || val === "=";

export default ({ handleClick, handleKeyDown, value, label }) => (
  <button
    className={`button ${isOperator(label) ? null : "operator"}`}
    onClick={() => handleClick(value)}
    onKeyUp={e => handleKeyDown(e.key)}
    data-value={value}
  >
    {label}
  </button>
);
