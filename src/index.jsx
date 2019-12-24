import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Foobar({ message }) {
  return (
    <div>
      Hello World
      <span>{message}</span>
    </div>
  );
}

Foobar.propTypes = {
  message: PropTypes.string.isRequired
};
