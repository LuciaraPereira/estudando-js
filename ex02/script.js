/*alert('olá')
confirm('confirme')
prompt('Seu nome:')
let nome = prompt('Digite seu nome:')
alert('Olá '+nome)*/

/*Faça o algoritmo para calcular o valor monetário do
desconto (D), sendo que o preço do produto (PR) é fornecido pelo usuário e o desconto tambem.
Apresentar o valor do desconto. */

let preco =  document.getElementById('preco');
let desconto = document.getElementById('desconto');
let resultado = document.querySelector('.resultado');


function calcularDesconto(){
    let valorPreco = Number(preco.value);
    let valorDesconto = Number(desconto.value);
    let calculoDesconto = valorPreco * (valorDesconto/100);
    let precoFinalDesconto = valorPreco - calculoDesconto;
   resultado.innerHTML = `O desconto é de R$${calculoDesconto} e o valor do produto com desconto fica R$${precoFinalDesconto}` 
}

