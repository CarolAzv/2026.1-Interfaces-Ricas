import { slice } from './slice.js';

test('slice the array to get the first two elements', () => {
    let list = [2,4,6,2,8,9,5];
    expect(slice(list)).toEqual([2, 4]);
});