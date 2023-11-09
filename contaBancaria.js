class ContaBancaria {
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return console.log("Valor solicitado maior que o saldo");
        }else{
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor >500){
            return console.log("saque maximo de R$500,00");
        }else if(valor>this._saldo){
            return console.log("Valor solicitado maior que o saldo");
        }
        else{
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
}

const minhaConta = new ContaCorrente(1,211,true);
const contaUni = new ContaUniversitaria(2,233);