class PessoaFisica extends Pessoa{

    private _cpf : string;

    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        nome = nome + ' - Física';
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}