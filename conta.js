class contaBancaria{
    #saldo;
    #transacoes
    constructor(){
        this.#saldo = 0
        this.#transacoes = []
    }
    set saldo(novoSaldo) {

        this.#saldo = novoSaldo
    }
    get saldo() {
        return this.#saldo
    }
    set transacoes(novaTransacao){
        this.#transacoes.push(novaTransacao)
    }
    get transacoes(){
        return this.#transacoes
    }
    depositar(valor){
        if(valor > 0){
            let novoSaldo = this.saldo + valor
            this.saldo = novoSaldo;
            this.transacoes = valor;

            //console.log(`Depósito de ${valor} reais foi feito com sucesso`)
            //console.log(`Novo balanço = ${contaDuda.saldo}`)

        }else if(valor == 0){
            console.log("Não é possível depositar 0 Reais")
        }else{
            console.log("Não utilize valores negativos")
        }
    }
    sacar(valor){
        if(valor > 0){
            if(this.saldo - valor > 0){
                let novoSaldo = this.saldo - valor
                this.saldo = novoSaldo;
                this.transacoes = (valor*-1)
                
                //console.log(`Saque de ${valor} reais foi feito com sucesso`)
                //console.log(`Novo balanço = ${contaDuda.saldo}`)

            }else{
                console.log(`Saldo Insuficiente, Não é possível fazer o saque de ${valor} reais`)
            }
        }else if(valor == 0){
            console.log("Não é possível sacar 0 Reais")
        }else{
            console.log("Não utilize valores negativos")
        }
    }
    listarTransacoes(){
        console.log("------ Transações da ContaBancária ------")
        console.log(" ")
        this.transacoes.forEach(transacao => {
            if(transacao > 0){
                console.log(`- Depósito de ${transacao} reais`)
            }else{
                console.log(`- Saque de ${transacao*-1} reais`) 
            }
        });
        console.log(" ")
        console.log("------------- Balanço Atual -------------")
        console.log(" ")
        console.log(`- ${this.saldo} reais`)
        console.log(" ")
        console.log("-----------------------------------------")
    }
    verSaldo(){
        console.log("------------- Balanço Atual -------------")
        console.log(" ")
        console.log(`- ${this.saldo} reais`)
        console.log(" ")
        console.log("-----------------------------------------")
    }
}

const contaDuda = new contaBancaria

contaDuda.verSaldo()
contaDuda.depositar(10)
contaDuda.sacar(5)
contaDuda.depositar(20)
contaDuda.depositar(50)
contaDuda.sacar(25)
contaDuda.listarTransacoes()

