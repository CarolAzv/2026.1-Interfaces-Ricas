import { soPares } from './soPares.js';

test('filter the array to get only even numbers', () => {
    let list = [8,3,9,5,6,12];
    expect(soPares(list)).toEqual([8, 6, 12]);
});