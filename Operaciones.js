


function suma(){
var num1, num2, resul;
num1=prompt("Escribe un numero", "");
num2=prompt("Escribe otro numero", "");
resul=parseInt(num1)+parseInt(num2);
alert("La suma es "+resul);
}

function resta(){

    var num1, num2, resul;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    resul=parseInt(num1)-parseInt(num2);
    alert("La resta es "+resul);
    }

function divide(){
        var num1, num2, resul;
        num1=prompt("Escribe un numero", "");
        num2=prompt("Escribe otro numero", "");
        resul=parseInt(num1)/parseInt(num2);
        alert("La division es "+resul);
}

function multiplica(){
    var num1, num2, resul;
    num1=prompt("Escribe un numero", "");
    num2=prompt("Escribe otro numero", "");
    resul=parseInt(num1)*parseInt(num2);
    alert("La multiplicacion "+resul);
    }

function positivo(){

    var num1 ;
    num1=prompt("Escribe un numero", "");
    if(num1>0)
    alert("Es positivo")
    else
    alert("ES negativo")


}