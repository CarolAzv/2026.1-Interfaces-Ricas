export const ordenacao = 
  (lista : Array<string>) : string => 
    { lista.sort();
    return lista.join(' '); }