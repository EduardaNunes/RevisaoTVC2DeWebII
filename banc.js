class contaBancaria{
    #saldo;
    constructor(){
        this.#saldo = 0;
    }
    depositar(valor){
        if(valor > 0){
            saldo(valor);
        }else if(valor == 0){
            console.log("Não é possível depositar 0 Reais")
        }else{
            console.log("Não utilize valores negativos")
        }
    }
    sacar(valor){
        if(valor > 0){
            saldo(valor*-1);
        }else if(valor == 0){
            console.log("Não é possível sacar 0 Reais")
        }else{
            console.log("Não utilize valores negativos")
        }
    }
    set saldo(movimentacao) {

        this.#saldo += movimentacao;
    }
    get saldo() {
        console.log(`Saldo atual = ${this.#saldo}`);
    }
}

const contaDuda = new contaBancaria

contaDuda.saldo;
contaDuda.depositar(10);
contaDuda.saldo;
contaDuda.sacar(15);
contaDuda.saldo;

