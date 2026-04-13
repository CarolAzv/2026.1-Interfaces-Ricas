export interface RegistarPet{
    animal: string;
    nome: string;
    genero: string;
}

export class cachorro implements RegistarPet{
    animal: string;
    nome: string;
    genero: string;

    constructor(nome: string, genero: string){
        this.animal = 'cachorro';
        this.nome = nome;
        this.genero = genero;
    }
}

export class pet implements RegistarPet{
    animal: string;
    nome: string;
    genero: string;

    constructor(animal: string, nome: string, genero: string){
        this.animal = animal;
        this.nome = nome;
        this.genero = genero;
    }


}