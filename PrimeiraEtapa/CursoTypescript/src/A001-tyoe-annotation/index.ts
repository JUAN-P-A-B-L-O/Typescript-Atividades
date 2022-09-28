/* eslint-disable */

let nome: string = `Juan Pablo`;


let numberArray: number[] =[];
numberArray.push(2);
numberArray.push(4);
numberArray.push(2+22);
console.log(numberArray);

let pessoa: {nome: string,idade: number,adulto?: boolean}={
    nome: `Juan`,
    idade: 20,
}

console.log(pessoa.idade)

function soma(x:number, y: number): number{
    return x+ y;
}

const resultado = soma(5,6);
console.log(resultado);

const soma2: (x:number, y:number) =>number = (x,y) => x+y;

const objectA = {
    cha: `a`,
    cha2: `as`
}

objectA.cha= `blala`;

////
