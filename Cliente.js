// O nome de um arquivo que contem uma classe deve iniciar com letra maiúscula
// Criando uma classe e exportando, é necessário usar a cláusula "export"
export class Cliente {
    nome;
    #cpf;

    get cpf() {
        return this.#cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }
}

