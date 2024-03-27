// 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

// Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", 
// "Hexágono" o "Polígono", según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.


let numerodelados = 0 // Ingresar el numero de Lados

if(numerodelados >= 0 && numerodelados < 1){
    console.log("Es un Circulo")
}
else if(numerodelados <=3 && numerodelados > 2){
    console.log("Es un Triangulo")
}
else if(numerodelados <= 4 && numerodelados > 3){
    console.log("Es un Cuadrado")
}
else if(numerodelados <= 5 && numerodelados > 4 ){
    console.log("Es un pentagono")
}
else if(numerodelados <= 6 && numerodelados > 5){
    console.log("Es un hexagono")
}
else if(numerodelados > 6){
    console.log("Es un Poligono")
}
else{
    console.log("El número de lados no es correcto.")
}

let LargoDeUnLado = 5 //Ingresar el Largo del lado de la figura Geometrica

let perimetro = LargoDeUnLado * numerodelados
let radio = 5 // Ingresar el radio del circulo
let perimetroCirculo= 2 * 3.14159 * radio

console.log("Y su Perimetro es " + perimetroCirculo) // Ingresar "perimetro" o "perimetroCirculo" dependiendo lo que se quiera calcular.


