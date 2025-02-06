/* Construa um programa que leia vários números inteiros e mostre qual foi o maior e o menor
valor fornecido. Para cada valor digitado, deve ser solicitado ao usuário que ele digite se ele
deseja continuar entrando com valores.
OBS: Não se esqueça de validar a resposta do usuário, pois ele só pode responder “S” ou “N”. */

let numbers = [];

function verificar(){

    let resp 
   do{ 
    let numero = document.getElementById('numero');
    numbers.push(numero.value);

    console.log(numbers)

    limparNumber()
   
    let resp = prompt('Digite "S" para continuar ou "N" para parar')

    if(resp === 'n'){
        let resultado = document.getElementById('resultado')
        resultado.innerHTML="foi n"
    }
    resp++
    } while (resp === 'S' || resp === 's');

   
    
}

function listandoNumbers(){
    
}

function limparNumber(){
    numero.value=''
}