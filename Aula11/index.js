/*Aulas do 11 ao 18*/

const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');
const idade = prompt('Digite sua idade: ');
const sexo = prompt('Digite seu sexo: ');

console.log(`Olá, ${nome}! Seu sexo é ${sexo} e você tem ${idade} anos`);