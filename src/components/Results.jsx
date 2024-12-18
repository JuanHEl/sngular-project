import React from "react";

export const Results = ({ result }) => {
  return (
    <div className="div-results">
      <h2>El resultado es: </h2>
      <h3>{result}</h3>
    </div>
  );
};
