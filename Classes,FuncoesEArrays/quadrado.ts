function quadradoSimples(lista: Array<number>): Array<number> {
    for (let i: number = 0; i < lista.length; i++) {
        lista[i] = lista[i] * lista[i];
    }
    return lista;
};

function quadrado (lista : Array<number>) : Array<number> {
    lista.forEach((elemento) => {
        elemento = elemento * elemento;
    });
    return lista;
};

let list = [3,5,7,3,8,9,1];
console.log(quadradoSimples(list));
console.log(quadrado(list));