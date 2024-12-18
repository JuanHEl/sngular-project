export class Series {
  // Método que obtiene el resultado de la serie triangular
  getTriangular(n) {
    let numTriangular = 0;
    for (let i = 0; i <= n; i++) {
      numTriangular = numTriangular + n / 2;
    }
    return numTriangular;
  }

  //Método que obtiene el resultado de la serie de Fibonacci
  getFibonacci(n) {
    const arrayFibo = [0, 1];
    if (n < 2) return n;
    for (let i = 2; i <= n; i++) {
      arrayFibo.push(arrayFibo[i - 1] + arrayFibo[i - 2]);
    }
    return arrayFibo[n];
  }

  esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Método que obtiene el resultado del último número primo
  getPrimo(n) {
    const arrayPrimo = [2];
    for (let i = 3; arrayPrimo.length < n; i++) {
      if (this.esPrimo(i)) arrayPrimo.push(i);
    }
    return arrayPrimo[n - 1];
  }

  //   Método que devuelve el resultado de la operación de las series
  getSerie(n) {
    return (
      (3 * this.getFibonacci(n) - 3 * this.getTriangular(n - 1)) /
      ((n - 10) * this.getPrimo(n + 2))
    );
  }
}
