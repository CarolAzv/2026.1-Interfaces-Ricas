export const concatenando = 
  (lista : Array<string>) : string => 
    { let frase = '';
    lista.forEach((elemento) => {
        frase = frase + elemento + ' ';
    });
    return frase; }