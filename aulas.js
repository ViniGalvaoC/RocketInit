//Aula funcoes 
const aluno = [
    {
        nome: "Pedro",
        sobreNome: "Leite",
        nota: 6,
        turma: "A",
    },
    {
        nome: "Vinicius",
        sobreNome: "Galvao",
        nota: 10,
        turma: "D",
    },
    {
        nome: "Marcos",
        sobreNome: "Zebra",
        nota: 7,
        turma: "J",
    }
];
function alunos(alunos,media){
    let aprovados = []

    for(let i=0;i<alunos.length;i++){
        let = {nome , sobreNome , nota} = alunos[i];

        if(nota >= media){
            aprovados.push(nome + " " +sobreNome);
        }
    }
    return aprovados;
}

//      console.log(alunos(aluno,3));


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: 'vinicius',
    idade: 23,
};

//      console.log(calculaIdade.apply(pessoa,[5]));
//      console.log(calculaIdade.call(pessoa,5));

//Aula map , set
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

const arrUnico = new Set(arr);

//      console.log(arrUnico);

function getAdmins(admin){
    let lista = [];

    for([key, value] of admin){
        if(value === 'admin'){        
            lista.push(key);
        }
    }
    return lista;
}
const admins = new Map();
admins.set('vinicius','admin');
admins.set('zebra','admin');
admins.set('paulo','admin');
admins.set('julio','worker');
admins.set('ana','cleaner');
//      console.log(getAdmins(admins));

//Aula de map , filter e reduce 
const array = [1,2,4,8,16,5,7];

//      console.log(array.map((item)=> item **2));

//      console.log(array.filter((item) => item %2 ==0));

function somaNums(arr){ //Sem valor inicial
    return arr.reduce(function(prevValue,currentValue){
        return prevValue + currentValue;
    })
}
function somaNums2(arr,prevValue){ //Com valor inicial
    return arr.reduce(function(prevValue,currentValue){
        return prevValue - currentValue;

    },prevValue)
}
//      console.log(somaNums(array));
//      console.log(somaNums2(array,50));

//Aula de try catch e erros

function tratErro(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os paramentros");

        if(typeof arr !== 'object') throw new TypeError("Envie um elemento do tipo array");

        if(typeof num !== 'number') throw new TypeError("Envie um elemento do tipo number");

        if(arr.length !== num) throw new RangeError("Tamanho do array invalido");

        return arr;

    }catch(erro){
        if(erro instanceof RangeError) {
            console.log("RANGE ERROR")
            console.log(erro.stack); 
        }else if(erro instanceof ReferenceError){
            console.log("REFERENCE ERROR")
            console.log(erro.stack); 
        }else{
            console.log("outro tipo de erro")
            console.log(erro.stack); 
        }
    }
}

//      console.log(tratErro([1,2,3,4,5],5));