function slice(lista : Array<number>) : Array<number> {
    const listinha = lista.slice(0, 2); 
    return listinha;
};

let list = [2,4,6,2,8,9,5];
console.log(slice(list));