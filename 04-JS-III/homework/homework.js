// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
for (i = 0 ; i < array.length; i++) {array [i]++}
return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var nuevostring = palabras [0]
  for (i = 1; i < palabras.length; i++) {nuevostring = nuevostring + " " + (palabras[i] )}
  return nuevostring
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento))  {return true}
  else {return false} 
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var array = 0
  for (i=0 ; i < numeros.length; i++) {array = array + numeros[i]}
  return array
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumanotas = 0
  
  for (i=0 ; i < resultadosTest.length ; i++ ) {sumanotas = sumanotas + resultadosTest[i]}
  return (sumanotas / resultadosTest.length)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros [0]
  for (i=0 ; i < numeros.length ; i++) {
    if ( numeros[i] > maximo) {
      maximo = numeros[i]}}
return maximo
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  if (arguments.length ===0) {
    return 0;}
  else if (arguments.length === 1) 
  {return arguments[0];}
  else {
    var sumatoria = 1;
    for ( var i = 0 ; i < arguments.length ; i++) {sumatoria = sumatoria * arguments[i];}}
  return sumatoria;
  

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var cantidad = 0
  for (i=0 ; i < arreglo.length; i++){
    if (arreglo[i] >= 19) {cantidad = cantidad + 1;}   
  }
return cantidad
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
   
    if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";}
      else  {
        return "Es dia Laboral";}
    

} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nastring = n.toString();
  if (nastring[0] === "9") {return true}
  else {return false}
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var primerElemento = arreglo[0]
  for (i=1 ; i < arreglo.length; i++) {
    if (primerElemento !== arreglo[i]) {return false}
   }
   return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = []
for (i = 0 ; i < array.length ; i ++) {
  if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
    nuevoarray.push(array[i])}
  }
  if (nuevoarray. length !== 3) {return "No se encontraron los meses pedidos"}
 return nuevoarray
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevito = []
  for (i = 0 ; i < array.length ; i++) {if (array[i] > 100) {nuevito.push(array[i])}}
  return nuevito
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var sumatoria = [];
  var num = numero;
  var nota = false
  for (var i = 0 ; i < 10 ; i++ )  {
    num = num + 2;
    if (num === i ) {
      break;}
      else {sumatoria.push(num);}
     
  }
  if (i === num) {
    return "Se interrumpió la ejecución"}
  else {
    return sumatoria}

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var num = numero
  var array = [];
  for (i = 0 ; i < 10 ; i++ ) {
    if (i === 5) {
      continue;
    }
    num = num + 2;
    array.push(num)
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
