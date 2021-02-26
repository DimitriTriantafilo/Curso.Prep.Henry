// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 // var palabra = array.from(palabra)
 // var caracteres = {};
 // var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];
 //var caracteres = {a: 0, b: 0, c:0, d:0, e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,ñ:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0} 

 var cadena = string.split("");
 var contador = {};

 cadena.forEach(function(letra){
   if (contador[letra] === undefined) {contador[letra] = 1}
   else {contador[letra] +=1 } 
  })
return contador
 
 }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí 
var hechoarray = str.split(" ") 


  function reverseString (str) {
    var splitstr = str.split("")
    var reversearray = splitstr.reverse()
    var joynarray = reversearray.join("")
    return joynarray
     }
var sumatoria = []
for ( i= 0; i< hechoarray.length; i++){
var nuevoarray = []
nuevoarray.push(hechoarray[i])
var casi = toString(nuevoarray[i])
reverseString(casi)

sumatoria.push(casi)
}
var vuelveastring = sumatoria.join("")

 //var espejo = []
 //var nuevostr = reverseString(str)
  //for (i = 0 ; i < nuevostr.length; i ++) {
    //espejo.push(nuevostr[i])
    //};
  //  var final = espejo.join("")
//return final;
return vuelveastring
  }


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var hechostring = numero.toString()
 function reverseString (str) {
var splitstr = str.split("")
var reversearray = splitstr.reverse()
var joynarray = reversearray.join("")
return joynarray
 }
  var reverso = reverseString(hechostring)

  if(hechostring === reverso){ return "Es capicua"}
  else {return "No es capicua"}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = []

  for (i = 0; i < cadena.length; i ++)  {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") { 
      array.push(cadena[i])
     }
     var nuevo = array.join("")
  }
 return nuevo
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var numbers = arr
  var nobo = []
  var casi = []
  var sorteado = nobo.sort(function(a, b) {
    return a - b;})
  for (i = 0 ; i < arr.length ; i ++) { 
    nobo.push(arr[i].length)
  }
  for (i = 0 ; i < sorteado.length ; i ++) {
    if (sorteado[i] === arr[i].length) {
      casi.push(arr[i])
    }
  


};
return casi
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

