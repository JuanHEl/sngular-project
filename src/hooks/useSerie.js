import { useState } from "react";
import { Series } from "../utils/serie";

export const useSerie = () => {
  const [n, setN] = useState(0);
  const [result, setResult] = useState();
  const series = new Series();

  const onInputChange = ({ target }) => setN(target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (n < 1) return;

    setResult(series.getSerie(Number(n)));
    setN(0);
  };

  return { n, onInputChange, onSubmit, result };
};
