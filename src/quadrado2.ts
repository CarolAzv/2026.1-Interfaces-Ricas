export const quadrado = 
 (lista : Array<number>) : Array<number> => 
    { let num: Array<number> = []
        lista.forEach((elemento) => {
            num.push(elemento * elemento);
        });
    return num; }