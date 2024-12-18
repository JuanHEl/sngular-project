import { fireEvent, render, screen } from "@testing-library/react";
import { Series } from "../../src/utils/serie";

describe("Prueba de las series con números naturales", () => {
  let series;
  beforeEach(() => {
    series = new Series();
  });
  test("Primer test", () => {
    const result = series.getSerie(1);
    console.log(result);
    expect(result).toBe(-0.06666666666666667);
  });
  test("Segundo test", () => {
    const result = series.getSerie(2);
    console.log(result);
    expect(result).toBe(-0);
  });
  test("Tercer test", () => {
    const result = series.getSerie(3);
    console.log(result);
    expect(result).toBe(0.03896103896103896);
  });
  test("Cuarto test", () => {
    const result = series.getSerie(4);
    console.log(result);
    expect(result).toBe(0.11538461538461539);
  });
  test("Quinto test", () => {
    const result = series.getSerie(5);
    console.log(result);
    expect(result).toBe(0.17647058823529413);
  });
  test("Sexto test", () => {
    const result = series.getSerie(6);
    console.log(result);
    expect(result).toBe(0.27631578947368424);
  });
  test("Septimo test", () => {
    const result = series.getSerie(7);
    console.log(result);
    expect(result).toBe(0.34782608695652173);
  });
  test("Octavo test", () => {
    const result = series.getSerie(8);
    console.log(result);
    expect(result).toBe(0.3620689655172414);
  });
  test("Noveno test", () => {
    const result = series.getSerie(9);
    console.log(result);
    expect(result).toBe(0.1935483870967742);
  });
  test("Decimo test", () => {
    const result = series.getSerie(10);
    console.log(result);
    expect(result).toBe(Infinity);
  });
});
