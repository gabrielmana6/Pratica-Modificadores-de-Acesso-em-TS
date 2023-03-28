class PessoaJuridica extends Pessoa{

    private _cnpj : string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento);
        nome = nome + ' - Jurídica';
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }
}