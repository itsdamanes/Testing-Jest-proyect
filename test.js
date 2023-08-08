
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    test("4 euros son 4.8 dolares estado unidenses", () => {
        let USD = fromEuroToDollar(4)
        expect(USD).toBe(4.8); //1 euro son 1.2 dolares, entonces 4 euros deberian ser = (4 * 1.2) dolares
    });




    const { fromEuroToYen } = require('./app.js');

    test("4 euros son 4.8 dolares estado unidenses", () => {
        let JYP = fromEuroToYen(4)
        expect(JYP).toBe(511.6); //1 euro son 127.9 yenes, entonces 4 euros deberian ser = (4 * 127.9) dolares
    });
    
    // hago mi comparacion (la prueba)
    
    const { fromEuroToPound } = require('./app.js');

    test("4 euros son 3.2 pounds britanicos", () => {
        let GBP = fromEuroToPound(4)
        expect(GBP).toBe(3.2); //1 euro son 127.9 yenes, entonces 4 euros deberian ser = (4 * 127.9) dolares
    });

// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});