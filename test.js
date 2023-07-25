
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    test("4 euros son 4.8 dolares estado unidenses", () => {

        expect(fromEuroToDollar(4)).toBe(4.8); //1 euro son 1.2 dolares, entonces 4 euros deberian ser = (4 * 1.2) dolares
    });
    
    // hago mi comparacion (la prueba)
    


// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});