export const soPares = 
  (lista : Array<number>) : Array<number> => 
    { const pares =lista.filter((elemento) => (elemento % 2 === 0));
    return pares; }