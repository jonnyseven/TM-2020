var arrayNumbers = [];


function adicionarNumero(){
   var numero = document.getElementById("numbersId").value;

   arrayNumbers.push(parseInt(numero));


   document.getElementById("numerosAdicionados").innerText= arrayNumbers.toString();
   console.log(arrayNumbers);
}

function calcularNumero() {


    var maiorNumero = Math.max.apply(Math,arrayNumbers);
    if(arrayNumbers.length>5){
    alert(maiorNumero);
    }

}