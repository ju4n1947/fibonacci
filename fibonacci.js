function fibonacci(n) {
  let secuencia = [0, 1];

  for (let i = 2; i <= n; i++) {
    let siguiente = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguiente);
  }

  return secuencia; 
}

console.log(fibonacci(7)); 