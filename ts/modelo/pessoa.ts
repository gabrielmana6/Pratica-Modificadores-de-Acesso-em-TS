class Pessoa{
    private _nome: string;
    private _idade: number;
    private dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this.dataNascimento = dataNascimento;
    }

}