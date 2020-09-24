var operandoa;
var operandob;
var operacion;


function init(){
    //variables
var resultado = document.getElementById("resultado");
var reset = document.getElementById("reset");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");

//eventos

uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();   
}

}
function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
        case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}
// -----------------rotar con botones----------
function rotate(value)
        {
        document.getElementById('landscape').style.webkitTransform="rotate(" + value + "deg)";
        // document.getElementById('landscape').style.msTransform="rotate(" + value + "deg)";
        // document.getElementById('landscape').style.transform="rotate(" + value + "deg)";
        }

// -----------------rotar con barra----------
function rotate2(value)
        {
        document.getElementById('landscape').style.webkitTransform="rotate(" + value + "deg)";
        document.getElementById('landscape').style.msTransform="rotate(" + value + "deg)";
        document.getElementById('landscape').style.transform="rotate(" + value + "deg)";
        document.getElementById('span1').innerHTML=value + "deg";
        }
// -----------rotar con un solo boton--------
// var girar = document.getElementById('btn-girar'),
//     landscape = document.getElementById('landscape'),
//     seguir = document.getElementById('bnt-girar'),
var angle = 0,
landscape = document.getElementById('landscape');
calculadora = document.getElementById('calculadora')

document.getElementById('btn-girar').onclick = function(){
    angle = (angle + 90) % 360;
    landscape.className = "rotate" + angle,
    calculadora.className = "rotate" + angle;
}       


// girar.addEventListener('click', function(){
//     landscape.classList.add('active');
// })
// seguir.addEventListener('click', function(){
//     landscape.classList.remove('active');
// })
       