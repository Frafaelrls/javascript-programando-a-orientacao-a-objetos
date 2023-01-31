class Conta{
    #saldo;

    get saldo(){
        console.log('Acessando o método get');
        return this.#saldo;
    }

    set saldo(valor){
        if(valor > 0){
            console.log('Acessando o método set');
            this.#saldo = valor;
        }
    }

    constructor(numero){
        this.numero = numero;
        this.#saldo = 0; 
    }

}



const conta = new Conta(10);

conta.saldo = 100;
console.log(conta.saldo);
// conta.numero = 15;
// console.log(conta.numero);