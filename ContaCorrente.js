import { Cliente } from "./Cliente.js";
// O nome de um arquivo que contem uma classe deve iniciar com letra maiúscula
// Criando uma classe e exportando, é necessário usar a cláusula "export"
export class ContaCorrente {
    // Atributo estático, usando a cláusula static para definimos um atributo como um atributo da classe
    // para acessar usaremos nomeDaClasse.nomeDoAtributo
    static numeroDeContas = 0;
    agencia;
    // Atributo privado. Caso seja necessário imprimir com o console.log será necessário criarmos um assessor do tipo get 
    _cliente;
    _saldo = 0;
    // Assessor do tipo set, devemos nomear usando o nome do atributo sem a #
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    // Assessor do tipo get
    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }
    
    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    // this faz referência ao objeto da classe (semelhante ao self no python)
    // declaração do método da classe 
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        // Modelos de declaração para retornar caso verdadeiro
        // Valido apenas para momentos que temos apenas uma linha
        // Nome dessa declaração: early return 
        if (valor <= 0) return;
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}