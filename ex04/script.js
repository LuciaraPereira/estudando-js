let numero = document.getElementById('tabuada');
let resultados = document.getElementById('exibindoTabuada');

function confirmar(){
    reiniciar()
    let numeroTabuada = numero.value;
    for (let i = 0; i <=10; i++){
        let conta = numeroTabuada*i;
        resultados.innerHTML += `${numeroTabuada} x ${i} = ${conta} <br>`    
    }
   numero.value = ''
}


function reiniciar(){
    resultados.innerHTML = ''
    
}