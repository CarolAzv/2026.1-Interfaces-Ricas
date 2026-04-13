export const quadradoSimples = 
  (lista: Array<number>): Array<number> => 
    { let numeros = [];
        for (let i: number = 0; i < lista.length; i++) {
        numeros[i] = lista[i] * lista[i];
    }
    return numeros; }