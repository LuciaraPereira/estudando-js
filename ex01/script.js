/*Faça o algoritmo (diagrama de blocos e português estruturado) para calcular a área (AREA) e o
perímetro (P) de uma sala, sendo que os comprimentos (L e C) são fornecidos pelo usuário. Apresente
a área e o perímetro depois de calculados.*/

let largura = document.getElementById('largura');
let comprimento = document.getElementById('comprimento');
let resultado = document.getElementById('resultado');


function calcular(){
    let l = largura.value;
    let c = comprimento.value
    let area = l * c;
    let perimetro = (l*2)+ (c*2);
    resultado.innerHTML=`A área é: ${area} e o perimetro é: ${perimetro}`;
}



