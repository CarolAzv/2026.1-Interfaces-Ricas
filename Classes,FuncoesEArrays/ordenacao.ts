function ordenacao(lista : Array<string>) : string {
    lista.sort();
    return lista.join(' ');
};

let list = ['carro', 'boneco', 'ave', 'lapis'];
console.log(ordenacao(list));