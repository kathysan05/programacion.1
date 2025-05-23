function limpiar(){
    document.getElementById('numero1').value="";
    document.getElementById('numero2').value="";

    document.getElementById('resultado').value="";
    
}

function calcular(){

    let srtNumero1=document.getElementById(`numero1`).value;
    let srtNumero2=document.getElementById(`numero2`).value;

    document.getElementById(`resultado`).value=(parseInt(srtNumero1)+parseInt(srtNumero2));
}

function resta(){

    let srtNumero1=document.getElementById(`numero1`).value;
    let srtNumero2=document.getElementById(`numero2`).value;

    document.getElementById(`resultado`).value=(parseInt(srtNumero1)-parseInt(srtNumero2));
}

function multiplicar(){

    let srtNumero1=document.getElementById(`numero1`).value;
    let srtNumero2=document.getElementById(`numero2`).value;

    document.getElementById(`resultado`).value=(parseInt(srtNumero1)*parseInt(srtNumero2));
}

function dividir(){

    let srtNumero1=document.getElementById(`numero1`).value;
    let srtNumero2=document.getElementById(`numero2`).value;

    document.getElementById(`resultado`).value=(parseInt(srtNumero1)/parseInt(srtNumero2));
}



