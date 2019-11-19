import React from "react";
import PropTypes from "prop-types";

export default function FooBar({ children, className }) {
  return <div className={className}>{children}</div>;
}

FooBar.defaultProps = {
  className: ""
};

FooBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
