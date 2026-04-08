let mat = ["hidrogenio", "helio", "litio", "berilio"];
mat.forEach( (elemento) => (console.log(elemento)) );

let mat2 = ["hidrogenio", "helio", "litio", "berilio"];
console.log(mat2.map( (elemento) => (elemento.length) ) );

let mat3 = ["hidrogenio", "helio", "litio", "berilio"];
console.log(mat3.filter( (elemento) => (elemento.length > 5) ) );

let mat4 = ["hidrogenio", "helio", "litio", "berilio"];
console.log(mat4.find( (elemento) => (elemento.length > 5) ) );
let mat4_1 = ["hidrogenio", "helio", "litio", "berilio"];
console.log(mat4_1.find( (elemento) => (elemento.length === 5) ) );
let mat4_2 = ["hidrogenio", "helio", "litio", "berilio"];
console.log(mat4_2.find( (elemento) => (elemento.length < 5) ) );

let mat5 = ["hidrogenio", "helioo", "litio", "berilio"];
console.log(mat5.every( (elemento) => (elemento.length > 5) ) );
let mat5_1 = ["hidrogenio", "helioo", "litioo", "berilio"];
console.log(mat5_1.every( (elemento) => (elemento.length > 5) ) );
let mat5_2 = ["hidrogenio", "helioo", "litio", "berilio"];
console.log(mat5_2.some( (elemento) => (elemento.length > 9) ) );