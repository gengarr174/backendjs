/*
let persona = {
    nome: "jonas",
    sobrenome: "oliveira",
    idade: 19,
    peso: 63,
    altura: 1.68
};

let imc = persona.peso / persona.altura ** persona.altura;

function inform() {
    console.log("o usuario, " + persona.nome + " " + persona.sobrenome + ", " + "tem: " + persona.peso + persona.altura) + "," + "e seu IMC é:" + console.log(imc);
};

inform(persona);

let name = "jonas";
let idade = 19;
let altura = 1.68;
let estudante = true;
let peso = 64;

let dobroIda = idade * 2;
let metAlt = altura / 2;

function atv1() {
    console.log(`meu nome é ${name}, tenho ${idade} anos, minha altura é ${altura}`);
    console.log(`sou um estudante: ${estudante}`);
    console.log(`o dobro da minha idade é: ${dobroIda}`);
    console.log(`a metade de minha altura é ${metAlt}`);
    console.log("meu imc é: " + imc.toFixed());
};

atv1();
*/


/*
let resposta = confirm("voce é user?")
if(resposta) {
    alert("prossiga.");
} else {
        alert("retorne");
    };

const user = {
    name
};

user.name = prompt("qual seu nome?", "");
let saudacoes = `olá! ${user.name}`;
alert(saudacoes);
console.log(resposta, saudacoes);
*/


/*
let frase = "js is incrible";
let nome = "jonas";
let cidade = "ouro preto";
let nameLocal = nome + cidade;
let info = `olá meu nome é ${nome}.

            moro em ${cidade}`;
function methodss() {
    console.log(cidade.toUpperCase());
    console.log(nome.replace("jonas", "70N45"));
    console.log(nameLocal.length);
    console.log(info);
};
methodss();
*/

/*
let soma = () => {
    let num1 = Number(prompt("digite um numero", ""));
    let num2 = Number(prompt("digite outro", ""));
    console.log(num1 + num2);
};
soma();
*/


/*
let keys = {
    nome,
    altura,
    idade,
};

function indi(keys) {
    keys[0] = a
    keys[1] = b
    keys[2] = c
    a = String(prompt("qual seu nome?", ""));
    b = Number(prompt("qual sua altura?", ""));
    c = Number(prompt("qual sua idade?", ""));

    console.log(a, b, c);
};


indi();
*/


/*
let n1 = 5
let n2 = 10
let n3 = 6
let n4 = 7

media = (n1 + n2 + n3 +n4) / 4;
console.log(media);

if(media >= 7){
    console.log(`sua ${media} resultou em aprovacao`);
}else if(media > 5 && media < 7){
    console.log(`sua ${media} resultou em recuperacao`);
}else {
    console.log(`sua ${media} resultou em reprovacao`);
}

//function voto(idade) {
//    if ( idade >= 18 || idade <=69 )
*/


/*
let numero;
function numb(numero) {
    if ( numero >= 1 ) return `o numero ${numero} é positivo`;
    if ( numero < 0 ) return `o numero ${numero} é negativo`;
    return `o numero ${numero} é zero`;
};

function situation(media) {
    if ( media >= 7 ) return `a nota ${media} resultou em aprovacao`;
    if ( media > 5 ) return `a nota ${media} resulta em recuperacao`;
    return `a nota ${media} resultou em reprovacao`;
};

function grupo(numero) {
    if ( numero % 2 === 0 ) return `${numero} é par`;
    return `${numero} é impar`;
};
console.log(numb(2));
console.log(situation(6));
console.log(grupo(3));



//
let isagi = () => {
    let meta = {

    }
}
//
*/




/*
function blackOps() {
    let num1 = Number(prompt("digite um numero", ""));
    let num2 = Number(prompt("digite outro numero", ""));
    let operacion = ['subtracao', 'adicao', 'multiplicacao', 'divisao']
    let ope = Number(prompt(`qual operacion voce deseja fazer? ${operacion}`));
        switch(ope) {
        case 1:
            alert(num1 - num2);
            break;
        case 2:
            alert(num1 + num2);
            break;
        case 3:
            alert(num1 * num2);
            break;
        case 4:
            alert(num1 / num2);
            break;
        default:
            console.log('a');      
    };
};
blackOps();
*/

/*
let nome = prompt("qual seu nome?", "");

let saudac = function() {
    console.log(`yo, ${nome}!`);
};
saudac();
*/

function criarContador(n) {
    let valor = 0;
    return function() {
        //valor += n;
        //console.log(valor)
        return valor += n;
    }
}

let ac1 = criarContador(2);
let ac2 = criarContador(5);
// ac1();
// ac1();
// ac1();
// ac2();
// ac2();
console.log(ac1());
console.log(ac1());
console.log(ac1());
console.log(ac2());
console.log(ac2());


function criarFiltro() {
    
}


total = 20;

let i = (function() {
    return total = 10 + 2;
})();

i(1, 3);