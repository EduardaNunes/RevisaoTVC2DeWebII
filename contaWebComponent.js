export default class contaBancaria extends HTMLElement{
    #saldo
    #transacoes
    #shadow
    constructor(){
        super() // chama o constructor do HTMLElements que é de onde estamos HERDANDO a estrutura do web component
        this.#saldo = 0
        this.#transacoes = []
        // Esse é o Shadow DOM. É utilizado para evitar conflitos de estilo css quando usamos o mesmo nome para classes e ids
        // dessa forma o nosso componente tem suas instancias isoladas e livres de interferencias externas
        this.#shadow = this.attachShadow({mode: "closed"}) // Perguntar sobre open e closed (ShadowRoot)
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
    #render(){ // método privado utilizado para desenhar o componente (estrutura html + estilo css)
        this.#shadow.innerHTML = "<style> </style>"
        const container = document.createElement("pre")
        container.innerText = this.#transacoes.join("\n")
        this.#shadow.appendChild(container)
        
    }
    depositar(valor){
        if(valor > 0){
            let novoSaldo = this.saldo + valor
            this.saldo = novoSaldo
            this.transacoes = valor
            this.#render()
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
                this.#render()

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

// Custom Elements é uma API
customElements.define("conta-bancaria", contaBancaria) // registra o nome do novo elemento e qual classe vai ser responsável pela estrutura

