let input = document.querySelector("#entrada");//vinculamos el input
let input2 = document.querySelector ("#mensaje");
let btnenc = document.querySelector("#btn-enc");
let btndes = document.querySelector ("#btn-des");
let btncopy = document.querySelector ("#btn-copy");



function encriptar(){
   
    var mensaje = input.value; //valor del texto
    //expresiones regulares REGEX
    var msjEnc = mensaje.replace(/e/gi,'enter').replace(/i/gi,'imes').replace(/a/gi,'ai').replace(/o/gi,'ober').replace(/u/gi,'ufat');
    input2.value=msjEnc;
    input.value = "";
}


function desencriptar(){
    
    var mensaje = input.value; //valor del texto
    //expresiones regulares REGEX
    
    var msjDes = mensaje.replace(/enter/gi,'e').replace(/imes/gi,'i').replace(/ai/gi,'a').replace(/ober/gi,'o').replace(/ufat/gi,'u');
    
    input2.value=msjDes;
    input.value = "";
}

function copiar(){
   let txt = input2.value;
    navigator.clipboard.writeText(txt);//función de copiar, navigator(herramienta del navegador) clipboar(portapapeles) writeText(texto) el texto pasado como parametro en portapapeles
    input2.value = "";// la comillas sirven para blanquear el input que es la caja 
}



btnenc.addEventListener("click",encriptar);//simplificado btnenc.onClick=encriptar;
btndes.addEventListener("click",desencriptar);
btncopy.addEventListener("click",copiar);







/*
gato--> gaitober 

`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`

**Requisitos:**
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

Por ejemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`
*/

