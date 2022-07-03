
//1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.

var edad = prompt("Introduce tu edad"); if (Number(edad) == edad)
    if (edad > 18) {
        document.write("Puedes conducir");
    }
    else {
        alert("Introduce un numero válido");
    }

//2: Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

var suma = 0;
do {
    var numero = prompt("Introduce un numero")
    if (Number(numero) == numero) {
        numero = Number(numero); suma = suma + numero;
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
} while (numero != undefined); document.write(suma);

//3.	Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
var nombre1 = prompt("Nombre 1:");
var edad1 = Number(prompt("Edad 1:"));

var nombre2 = prompt("Nombre 2:");
var edad2 = Number(prompt("Edad 2:"));

var nombre3 = prompt("Nombre 3:");
var edad3 = Number(prompt("Edad 3:"));

if (maximo == edad1) {
    document.write("El mayor es: " + nombre1);
}
if (maximo == edad2) {
    document.write("El mayor es: " + nombre2);
}
if (maximo == edad3) {
    document.write("El mayor es: " + nombre3);
}

//4.	Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno.
var i = 0; var num;

var uno = 0; var dos = 0; var tres = 0;
do {
    num = Math.floor((Math.random() * 99) + 1);
    if ((num != uno) && (num != dos) && (num != 3)) {
        document.write(num + "<br>");
        i++;
        if (i == 1) {
            uno = num;
        }
        if (i == 2) {
            dos = num;
        }
        if (i == 3) {
            tres = num;
        }
    }
} while (i < 3);

//5.	Realiza un script que cuente el número de vocales que tiene un texto.

var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;	//Devuelve la longitud del string. cadena = cadena.toUpperCase(); //Devuelve el string en mayúsculas. var car;
var contador = 0; var i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);	//recupera el caracter i del string.
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) { 
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");

/*6.	Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“
    mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.*/
    
var cadena = prompt("Introduce un Texto que contenga paréntesis:");
//Longitud de la cadena
var numchar = cadena.length; var j;
var car;
var salida = ""; var copiar = false;
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);	//recupera el caracter i del string. if (car == ")") {
    if (car == "") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
        copiar = true;
    }
}  
document.write(salida);

//7.	Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
    
var cadena = prompt("Introduce un Texto:"); var numchar = cadena.length;
var j; var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);	//recupera el caracter i del string. salida = car + salida;
}
document.write(salida);
  
//8.	Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado.

var numero = Number(prompt("Introduce un número entre 1 y 100")); 
if((numero >= 1) && (numero <= 100)) {
    var x = 0; var y = 1; var z;
    document.write(x + "<br>");
    for (i = 0; i < (numero-1); i++) { 
        z = x + y;
        document.write(z + "<br>"); y = x;
        x = z;
    }
}
else {
    alert("Número erróneo");
}

//9.	Realiza un juego de Piedra Papel Tijera contra el Pc

var jugados = 0; var ganados = 0; var perdidos = 0; do {
var jugada = prompt("Escribe \"piedra\", \"papel\" o \"tijera\""); 
var aleatorio = Math.floor((Math.random() * 9) + 1);
var elige = "";
if (aleatorio <= 3) { 
    elige = "piedra";
}
else if (aleatorio <= 6) { 
    elige = "papel";
}
else {
    elige = "tijera";
}
    
if ((jugada == "piedra") && (elige == "piedra")) { 
    alert(jugada+"-"+elige+": Empate");
}
else if ((jugada == "piedra") && (elige == "papel")) { 
    alert(jugada+"-"+elige+": Gana PC");
    perdidos++;
}
else if ((jugada == "piedra") && (elige == "tijera")) { 
    alert(jugada+"-"+elige+": Gana Jugador"); 
    ganados++;
}
else if ((jugada == "papel") && (elige == "papel")) { 
    alert(jugada+"-"+elige+": Empate");
}
else if ((jugada == "papel") && (elige == "tijera")) { 
    alert(jugada+"-"+elige+": Gana PC"); perdidos++;
}
else if ((jugada == "papel") && (elige == "piedra")) { 
    alert(jugada+"-"+elige+": Gana Jugador"); ganados++;
}
else if ((jugada == "tijera") && (elige == "tijera")) { 
    alert(jugada+"-"+elige+": Empate");
}
else if ((jugada == "tijera") && (elige == "piedra")) { 
    alert(jugada+"-"+elige+": Gana PC");
    perdidos++;
}
else if ((jugada == "tijera") && (elige == "papel")) { 
    alert(jugada+"-"+elige+": Gana Jugador"); 
    ganados++;
}
jugados++;

} while (confirm("Jugar de nuevo"));
document.write("Partidas jugadas: "+jugados+"<br>"); 
document.write("Partidas ganadas: "+ganados+"<br>");
document.write("Partidas perdidas: "+perdidos+"<br>"); 
document.write("Partidas empatadas: "+(jugados-ganados-perdidos));
    
//10.	Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto

function masIva(precio, iva){ 
    iva = iva || 21
    var coniva = (precio + precio*iva/100); 
    return coniva;
}
var precio = Number(prompt("Introduce un precio")); 
var iva = Number(prompt("Introduce el iva"));
if(iva > 0){
    var resultado = masIva(precio, iva);
}
else{
    var resultado = masIva(precio);
}
document.write("Precio sin iva: " + precio); 
document.write("<br>Precio más Iva: " + resultado);

//13.	Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.

function funcion ( año ) { 
    let tiempo = new Date();
    let añoActual = tiempo.getFullYear(); 
    if ( año < añoActual ) {
        if ( año > 0 ) { 
            document.write(añoActual - año);
        }
    }
    else {
        document.write("Año ingresado invalido");
    }
}
funcion (2000);

//16.	Programa una función que dado un arreglo de elementos, elimine los duplicados: entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).


function funcion(A) { 
    let B = [];
    for (let i = 0; i < A.length; i++) { 
        let cont = 0;
        for (let j = i; j < A.length; j++) { 
            if (A[i] == A[j]) {
                cont++;
            }
        }
        if (cont == 1) { 
            B.push(A[i]);
        }
    }
    return B;
}
let A = [5, 25, 10, "s", 5, "a", "a"];
let resultado = funcion(A); document.write(resultado);
    
//17.	Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero con los números pares y en el segundo con los números impares.


function funcion(A) {
    let numeros = { numerosPares: [], numerosImpares: [] }; 
    for (let i = 0; i < A.length; i++) {
     
        if (A[i] % 2 == 0) {
        
            numeros.numerosPares.push(A[i]);
        
        } else { 
            numeros.numerosImpares.push(A[i]);
        }
    
    }
    return numeros;
}
    
let B = [1, 5 , 10 , 15 , 20 , 25, 30];

let numeros = funcion(B);

document.write(numeros.numerosPares + " " + numeros.numerosImpares);
    

/*18.	Ayuda al Elfo a listar los regalos. Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer .
¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta) Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo
_playstation, que significa que está tachado y no se tiene que contar. Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
*/

const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
    const arrCarta = letter.split(" "); 
    return arrCarta.filter((regalo) => { 
        let value = regalo.startsWith("_")
        if (value !== true && regalo !=="") 
            return regalo !== value
        })
            .reduce((contador, regalo) => { contador[regalo] = (contador[regalo] || 0) + 1; 
            return contador
        }, {});
}

const regalos = listGifts(carta) 
console.log(regalos)

/*19.	Buscando en el almacen: Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada. Vamos a crear una función que recibe dos parámetros: un objeto que define el almacén y 
el producto que buscamos. La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:*/

function iterate(obj) {
    let res = [];
    for (let property in obj) {
      const child = obj[property];
      if (typeof child === 'object') {
        res = [...res, ...iterate(child)]
      }
      res.push(child);
    }
    return res;
  }
  
  function contains(store, product) {
    return iterate(store).some((item) => item === product)
  }
  
  
  const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
  
  console.log(contains(almacen, 'camiseta'));
  console.log(contains(otroAlmacen, 'gameboy'));


  /*20.	En busca del reno perdido. ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, 
  Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno. Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno. Lo malo: la lista está desordenada y podría faltar el último... Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:*/
  
  function missingReindeer(ids) {
    let idsOrdenados = ids;
    for ( let i = 0 ; i < idsOrdenados.length; i++ ) {
        for ( let j = i+1; j < idsOrdenados.length; j++ ) {
          if( idsOrdenados[i] > idsOrdenados[j] ){
            let aux = idsOrdenados[i];
            idsOrdenados[i] = idsOrdenados[j];
            idsOrdenados[j] = aux;
          }
        }
    }
    let k, salida;
    for ( k = 0 ; k < idsOrdenados.length - 1; k++ ){
      if ( (idsOrdenados[k + 1] - idsOrdenados[k]) != 1 ) {
        salida = idsOrdenados[k] + 1;
        break;
      }
    }
    if ( k == idsOrdenados.length - 1 ) {
      salida = idsOrdenados.length;
    }
    return salida;
  }
  
  console.log(missingReindeer([0, 2, 3]))
  console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]))
  console.log(missingReindeer([0, 1]))
  console.log(missingReindeer([3, 0, 1]))
  console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) 
  console.log(missingReindeer([0])) 