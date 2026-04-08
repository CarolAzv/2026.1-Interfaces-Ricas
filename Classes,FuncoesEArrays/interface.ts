interface RegistarPet{
    animal: string;
    nome: string;
    genero: string;
}

class cachorro implements RegistarPet{
    animal: string;
    nome: string;
    genero: string;

    constructor(nome: string, genero: string){
        this.animal = 'cachorro';
        this.nome = nome;
        this.genero = genero;
    }
}

class pet implements RegistarPet{
    animal: string;
    nome: string;
    genero: string;

    constructor(animal: string, nome: string, genero: string){
        this.animal = animal;
        this.nome = nome;
        this.genero = genero;
    }


}

console.log(new cachorro('Rex', 'Macho'));
console.log(new pet('Papagaio', 'Apolo', 'Macho'));