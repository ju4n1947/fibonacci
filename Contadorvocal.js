function contador_vocales(texto) {
  let contador = 0;
  let vocales = ['a', 'e', 'i', 'o', 'u'];     

  for (let letra of texto.toLowerCase()) {  
    if (vocales.includes(letra)) {           
      contador++;                         
    }
  }

  return contador;                              
}

console.log(contador_vocales("juancho"));       