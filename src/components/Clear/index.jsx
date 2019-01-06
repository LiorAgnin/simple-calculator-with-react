import React from "react";
import "./styles.scss";

export default ({ handleClick, label, value }) => (
  <button className="clear-btn" onClick={() => handleClick(value)}>
    {label}
  </button>
);
