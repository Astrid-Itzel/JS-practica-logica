//?User profile
//Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
let userName = prompt ("¿Cuál es tu username?");
let age = prompt ("¿Cuántos años tienes?");
let movies = prompt ("¿Cuáles son tus 3 películas favoritas? Separalas con una coma");
let moviesArray = movies.split(",");
console.log(`${userName}, de ${age} años, qué casualidad, ¡${moviesArray[0]} también es una de mis películas favoritas!`);

//?Highest number
//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

let input = (prompt("Ingresa 10 números separados por una coma:"));
ArrayNumbers = input.split(",");// .split convierte el string en un array, convirtiendo cada número en un elemento del array.
if (ArrayNumbers.length != 10) {
    console.log (`Error. Por favor, ingresa 10 elementos`);
}else{
    ArrayNumbers = ArrayNumbers.map(num => parseInt(num)); //parseInt para convertir el string en números
    let MaxNum =  Math.max(...ArrayNumbers); //Math.max arroja el número máximo de de una lista de números, o de un array. ... Expande  un arrey en una lista. [] => ()
    console.log (`El número máximo es ${MaxNum}`); 
    }

//?Alarm
//Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

//Result example: "Time for bed after 10 seconds".

let timeRequested = parseInt(prompt("Ingresa la cantidad de segundos que deseas antes de que suene la alarma:"));
let message = ("¡Es hora!"); //parseInt porque necesitamos modificar string a números

setTimeout(() => {alert(message);}, timeRequested * 1000)

console.log(`La alarma sonará en ${timeRequested} segundos`);

//?Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

let text = prompt ("Ingresa una palabra o frase y descubre si es palíndromo:");
function Palindrome (phrase){
    let phraseLowerC = phrase.replace(/ /g,'').toLowerCase();
    let phraseReverse = phraseLowerC.split('').reverse().join(''); //el .split('') lo convertirá en array, pues el reverse sólo se usa con array y no string. Por otro lado, .join('') une todo nuevamente en un string
    if(phraseLowerC === phraseReverse){
        return true;
    }
    else{
        return false;
    }

}
console.log (Palindrome(text));
//console.log (Palindrome("Madam"));


//?Factorial
//Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

let inputFactorial = parseInt(prompt ("Ingresa un número entero para sacar su factorial"));
if (inputFactorial < 1 || !Number.isInteger(inputFactorial)){ //Number.isInteger es una función global para verificar si el valor es entero.
    console.log ("Error: debes ingresar un número entero y positivo. Intenta nuevamente.");
}else{
    let resultado = 1; //empezamos con 1 porque 1 es un elemento neutro para la multiplicación.
    for (let i=inputFactorial; i>0; i--){
      resultado = resultado * i;
    }    
    console.log (`El factorial de ${inputFactorial} es: ${resultado}`);
}


//?Flat array
//Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [ 4, 5,[6]]]];
let newArray = multiDimension.flat(Infinity); //el método flat aplana un array, usar infinity aplana todos los niveles de anidación.
console.log(newArray);

