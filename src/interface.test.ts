import { cachorro } from './interface.js';
import { pet } from './interface.js';

test('shows different classes that share the same interface', () => {
    expect(new cachorro('Rex', 'Macho')).toEqual({"animal": "cachorro","genero": "Macho","nome": "Rex"});
    expect(new pet('Papagaio', 'Apolo', 'Macho')).toEqual({"animal": "Papagaio","genero": "Macho","nome": "Apolo"});
});