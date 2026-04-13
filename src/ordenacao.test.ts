import { ordenacao } from './ordenacao.js';

test('sort the array by alphabetical order', () => {
    let list = ['carro', 'boneco', 'ave', 'lapis'];
    expect(ordenacao(list)).toBe('ave boneco carro lapis');
});