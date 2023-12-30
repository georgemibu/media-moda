// Función para calcular la media de una lista de objetos con una propiedad numérica
function calcularMedia(lista) {
  const suma = lista.reduce((acumulador, objeto) => acumulador + objeto.valor, 0);
  return suma / lista.length;
}

// Función para calcular la moda de una lista de objetos con una propiedad numérica
function calcularModa(lista) {
  const frecuencias = {};

  lista.forEach(objeto => {
    const valor = objeto.valor;
    frecuencias[valor] = (frecuencias[valor] || 0) + 1;
  });

  let modaValor;
  let modaFrecuencia = 0;

  for (const valor in frecuencias) {
    if (frecuencias[valor] > modaFrecuencia) {
      modaValor = valor;
      modaFrecuencia = frecuencias[valor];
    }
  }

  return parseFloat(modaValor);
}

// Ejemplo de uso
const listaDeObjetos = [
  { valor: 10 },
  { valor: 20 },
  { valor: 10 },
  { valor: 30 },
  { valor: 20 },
];

const media = calcularMedia(listaDeObjetos);
const moda = calcularModa(listaDeObjetos);

console.log(`La media es: ${media}`);
console.log(`La moda es: ${moda}`);
