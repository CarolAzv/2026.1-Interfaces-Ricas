import { concatenando } from './concatenando.js';

test('adds all words to a single string whit a space in between', () => {
    let list = ['Arrays', 'com', 'TypeScript'];
    expect(concatenando(list)).toBe('Arrays com TypeScript ');
});