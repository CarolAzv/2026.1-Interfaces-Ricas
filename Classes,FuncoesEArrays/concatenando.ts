function concatenando(lista : Array<string>) : string {
    let frase = '';
    lista.forEach((elemento) => {
        frase = frase + elemento + ' ';
    });
    return frase;
};

let list = ['Arrays', 'com', 'TypeScript'];
console.log(concatenando(list));