/*Fazer um algoritmo para ajudar a bilheteria do metrô. O operador deve informar o tipo do bilhete
(unitário, duplo ou 10 viagens) e o valor pago pelo passageiro. O sistema deve mostrar, então, a
quantidade de bilhetes possíveis e o troco que o passageiro deve receber. Considere a seguinte
tabela de preço: Bilhete unitário 5,30 Bilhete duplo 10,60 Bilhete de 10 viagens 52,00 */

let valor_pago = document.getElementById('valor_pago');
let resultado_troco = document.getElementById('troco');
let resultado_qtd = document.getElementById('qtd_possivel');
let total_bilhete = document.getElementById('total_bilhetes')




function confirmar(){
    let tipo_bilhete = document.querySelector('input[name="tipo_bilhete"]:checked');
    
    console.log(tipo_bilhete.value);

    if(tipo_bilhete.value === "unitario"){
        let valor_tipo_bilhete = 5.30;
        let troco = valor_pago.value-valor_tipo_bilhete ;
        let quantidade = valor_pago.value / valor_tipo_bilhete;
        console.log(troco);
        resultado_troco.innerHTML += troco;
        resultado_qtd.innerHTML +=  Math.floor(quantidade);
        total_bilhete.innerHTML += 1
        
    } else if(tipo_bilhete.value === "duplo"){
        let valor_tipo_bilhete = 10.60;
        console.log(valor_tipo_bilhete)
    } else if(tipo_bilhete.value === "dezena"){
        let valor_tipo_bilhete = 52.00;
        console.log(valor_tipo_bilhete)
    } else if(tipo_bilhete.value === ''){
        console.log('Selecione um tipo de bilhete')
    }
    
    
}


