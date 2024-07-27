var apellido = "Pérez";
var porcentaje;

var persona = {
    nombre: "Osman", //valor texto con comillas
    apellido: apellido,
    edad: 34,       //valor numerico sin comillas
    activo: false, //valor booleano sin comillas
    departamento: null, //esta propiedad no tiene un valor específico, pero existe.
}

console.log(persona);
console.log("Salario", persona.salario); //ejemplo valor undefined
console.log("Porcentaje", porcentaje); //ejemplo valor undefined


// var n1 = prompt("Ingrese el primer numero")
// var n2 = prompt("Ingrese el segundo numero")

// console.log(n1,n2, n1+n2); //Al recibir valores por el promt, los trató como letras
// console.log("Ejemplo con conversión", Number(n1),Number (n2), Number (n1)+ Number(n2)); //Al recibir valores por el promt, convertimos (casting) el valor para realizar la adición o suma 
// console.log("Ejemplo con conversión con error", Number(n1),Number (n2), Number (n1)+ Number(n1 + n2)); // Error común, esto no resuelve la garantía de hacer la adición


console.log("Jose"+" "+"Martinez"); //Ejemplo de concatenación
console.log(5 + 8 + 9); //Ejemplo de adición o suma (sin comillas)
console.log(5 + "8" + 9); //Ejemplo de concatenación (junta todo)
console.log(5 + 8 + "9"); //Ejemplo de suma + concatenación (suma primero y despues concatena)

console.log("Number", Number(15.5));
console.log("ParseInt", parseInt(15.5));
console.log("ParseFloat", parseFloat(15.55555));

console.log("Conversión a String", String(10)); //convertir un valor numérico a String(caracter)

console.log("Conversión a booleano", Boolean("Javascript"));
console.log("Conversión a booleano", Boolean("true"));
console.log("Conversión a booleano con error", Boolean("false"));
console.log("Conversión a booleano con cadena vacía", Boolean(""));
console.log("Conversión a booleano con cero", Boolean(0));
console.log("Conversión a booleano con con 1", Boolean(1));



console.log("Comparación número con letra no estricta", 5 == "5"); //iguala solo el valor
console.log("Comparación número con letra estricta", 5 === "5"); //compara los tipos de dato y valor
console.log("Comparación número con número estricta", 5 === 5); //compara valor y tipo de dato, es verdadero por que ambos son 5 y ambos son numeros
console.log("Comparación letra con letra no estricta", "5" === "5"); //ambos lados de la igualdad tiene mismo valor y mismo tipo de dato



// var num = new Number(15)
// console.log(num);