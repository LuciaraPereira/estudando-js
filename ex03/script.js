/* Construa um programa que leia vários números inteiros e mostre qual foi o maior e o menor
valor fornecido. Para cada valor digitado, deve ser solicitado ao usuário que ele digite se ele
deseja continuar entrando com valores.
OBS: Não se esqueça de validar a resposta do usuário, pois ele só pode responder “S” ou “N”. */

let numbers = [];
let resultado = document.getElementById('resultado')
let numero = document.getElementById('numero');

function verificar(){
  
    let resp = ''
   do{ 
    if(numero.value === ''){
        alert('Por favor, digite um número')
    } else{
        numbers.push(parseInt(numero.value));
        let resp = prompt('Digite "S" para continuar ou "N" para parar')
        limparNumber()
        listandoNumeros()
        if(resp === 'N' || resp === 'n'){
            verificarTamanho()
            break
        }
    }
    } while (resp === 'S' || resp === 's');    
}

function limparNumber(){
    numero.value=''
}

function verificarTamanho(){
    let maior = numbers[0]
    let menor = numbers[0]

    for(let i = 1; i < numbers.length; i++ )
    if(numbers[i] > maior){
        maior = numbers[i]
       
    } else if(numbers[i] < menor){
        menor= numbers[i]
    }
    resultado.innerHTML = `O maior número é: ${maior} e o menor é: ${menor}`
}

function listandoNumeros(){
    let lista = document.getElementById('listaNumeros')
    let adiciona = document.createElement("li")
    adiciona.innerHTML= numbers[numbers.length - 1]
    lista.appendChild(adiciona)
}


