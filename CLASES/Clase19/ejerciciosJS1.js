
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "cadena";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1985;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


/* function devolverString (str){
return (str); 
}
console.log(devolverString("Cadena de texto"))  */

/* FUNCION FLECHA   */
/* const devolverString = str => str;console.log(devolverString("Cadena de texto")); */

let suma = (x, y) => x+y
console.log(suma(10,10));


/* javascript */
/* let nombre = Number("32")
let Nombre = 44 */
/* let nombreCompleto ;
let nombre_completo;
const DATO ; */

/* 
function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
return x-y
}
console.log(resta(10,5)); */
/* console.log(resta(100,5)); */

/* funciones flecha */
const resta = (x, y) => x-y ; console.log(resta(10,5));

const multiplica = (x, y) => x*y ;console.log(multiplica(10,2));

const divide = (x, y) => x/y ; console.log(divide (21,7));

/* function sonIguales(x, y) {
  if (x===y){
    return true
  }else {
    false
  }
}
console.log(sonIguales (10,10));  */

const sonIguales= (x, y)=> x===y ;console.log(sonIguales (10,10));

const tienenMismaLongitud = (str1, str2) => str1.length===str2.length; console.log(tienenMismaLongitud("hola", "chauchis"));
/* INVOCAR A LA FUNCION */

const menosQueNoventa = num =>num < 90 ; console.log(menosQueNoventa(9));

 const mayorQueCincuenta=num =>  num>50 ;console.log(mayorQueCincuenta(50));

/* CONST */
/* let numero ;
 numero = 1
 numero = 15
console.log(numero);

const NOMBRE = "Juan"
NOMBRE = "PEPE" */

const obtenerResto = (x, y) => x%y ; console.log(obtenerResto(22,7));

const esPar =num => num%2===0 ; console.log(esPar(2));

/* const esImpar=num => num%2===1 ; console.log(esImpar(8)); */
const esImpar=num => num%2!=0 ; console.log(esImpar(7));

/* const  elevarAlCuadrado=num  =>  num**2 ; console.log(elevarAlCuadrado(2));
const  elevarAlCuadrado=num  =>  num*num ; console.log(elevarAlCuadrado(2));
 */
const  elevarAlCuadrado=num  => Math.pow(num,2) ; console.log(elevarAlCuadrado(2));

/* Math */
const elevarAlCubo = num=> Math.pow (num,3); console.log(elevarAlCubo(3));
const elevar = (num, exponent) => Math.pow(num,exponent) ; console.log(elevar(25,4));
const redondearNumero = num=> Math.round (num) ; console.log(redondearNumero(4.4));
const redondearHaciaArriba = num =>Math.ceil (num) ; console.log(redondearHaciaArriba(4.4));
const redondearHaciaabajo = num =>Math.floor (num) ; console.log(redondearHaciaabajo(9.9));

/* const numeroRandom = () => Math.round(Math.random () *10)  ;console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom());
console.log(numeroRandom()); */


  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
/* const esPositivo  =numero => { */
/*   if (numero>0){
    return "Es positivo"
  }else if (numero <0) {
    return "Es Negativo"
  }else {
return false
  } */



/* }
console.log(esPositivo(0)); */

/*   IF TERNARIO */
const esPositivo = numero => numero==0? false :numero >0?"Es Positivo" : "Es Negativo"

/*   IF TERNARIO */

console.log(esPositivo(0))

/* const agregarSimboloExclamacion = str => str + " " + "!" ; console.log(agregarSimboloExclamacion("Hola")); */

const agregarSimboloExclamacion = str => `${str} !` ; console.log(agregarSimboloExclamacion("Hola"));

const combinarNombres = (nombre, apellido)=> `Hola ${nombre} tu apellido es ${apellido}` ; console.log(combinarNombres("Bruce", "Wayne"));

const obtenerSaludo = nombre => `${nombre} ! ¿como estas?`; console.log(obtenerSaludo("Pedro"));
console.log(obtenerSaludo("Juana"));

const obtenerAreaRectangulo = (alto, ancho) => ancho*alto ; console.log(obtenerAreaRectangulo(4,4));


const retornarPerimetro = lado => lado * 4 ;console.log(retornarPerimetro(10));

const areaDelTriangulo = (base, altura) => base*altura /2; console.log(areaDelTriangulo(10,4));


const deEuroAdolar = euro => euro*1.2 ; console.log(deEuroAdolar(200));


const esVocal=letra=>{  letra = letra.toLowerCase()
  return letra.length!=1 ? "Dato Incorrecto" :  (letra == "a"||letra=="e"||letra == "i"||letra == "o"||letra == "u") ? `la letra ${letra} ES VOCAL` : `la letra ${letra} NO  es VOCAL`
}

console.log(esVocal("m"));

/* if (letra.length!=1){
  return "Dato Incorrecto"
}
else if (letra == "a"||letra=="e"||letra == "i"||letra == "o"||letra == "u")
{
return `la letra ${letra} ES VOCAL`
} 
else {
return `la letra ${letra} NO  es VOCAL`
} */


  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
