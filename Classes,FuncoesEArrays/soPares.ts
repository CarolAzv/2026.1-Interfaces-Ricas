function soPares(lista : Array<number>) : Array<number> {
    const pares =lista.filter((elemento) => (elemento % 2 === 0));
    return pares;
};

let list = [8,3,9,5,6,12];
console.log(soPares(list));