// one euro is:
let valueInEuro = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una   funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = (cantidadEuro) => {
    // convertimos el valor a dolares
    let valueInDollar = cantidadEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

console.log(fromEuroToDollar(5))

// declaramos una   funcion con el mismo nombre "fromEuroToYen"
const fromEuroToYen = (cantidadYen) => {
    // convertimos el valor a Yenes
    let valueInYen = cantidadYen * 127.9;
    // retornamos el valor
    return valueInYen;
}

console.log(fromEuroToYen(2))


// declaramos una   funcion con el mismo nombre "fromEuroToYen"
const fromEuroToPound = (cantidadPound) => {
    // convertimos el valor a Yenes
    let valueInPound = cantidadPound * 0.8;
    // retornamos el valor
    return valueInPound;
}

console.log(fromEuroToPound(2))

//const fromDollarToYen = function(valueInDollar) {
    
  //  let valueInYen = valueInYen * 127.9;

    //return valueInYen;
//} 


// ---------'---------OTRA FUNCIÓN-----------------------

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };
