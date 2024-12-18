import React from "react";
import { useSerie } from "./hooks/useSerie";
import { Results, Serie } from "./components";
import "./styles.css";

export const SerieApp = () => {
  const { n, onInputChange, onSubmit, result } = useSerie();
  return (
    <div>
      <h1>Series</h1>
      <Serie n={n} onInputChange={onInputChange} onSubmit={onSubmit} />
      {result && <Results result={result} />}
    </div>
  );
};
