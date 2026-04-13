import { quadrado } from './quadrado2.js';

test('calculate the square of each element of the array', () => {
    let list = [3,5,7,3,8,9,1];
    expect(quadrado(list)).toStrictEqual([9, 25, 49, 9, 64, 81, 1]);
});