import React from "react";
import PropTypes from "prop-types";
export const Serie = ({ n, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="number"
        onChange={onInputChange}
        value={n}
        placeholder="Numero n"
      />
    </form>
  );
};

Serie.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
