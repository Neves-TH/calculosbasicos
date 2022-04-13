function somar(){
    var v1 = document.getElementById("soma1").value
    var v2 = document.getElementById("soma2").value
    var r = document.getElementById("somaresultado")
    var res = Number(v1) + Number(v2)
    r.innerText = res
}
function subtrair(){
    var s1 = document.getElementById("sub1").value
    var s2 = document.getElementById("sub2").value
    var r = document.getElementById("subresultado")
    var dif = Number(s1) - Number(s2)
    r.innerText = dif
}
function Multiplicar(){
    var s1 = document.getElementById("mult1").value
    var s2 = document.getElementById("mult2").value
    var r = document.getElementById("multresultado")
    var dif = Number(s1) * Number(s2)
    r.innerText = dif
}

function Divisão(){
    var s1 = document.getElementById("div1").value
    var s2 = document.getElementById("div2").value
    var r = document.getElementById("divresultado")
    var dif = Number(s1) / Number(s2)
    r.innerText = dif
}

function Radiciação(){
    var s1 = document.getElementById("rad1").value
    var r = document.getElementById("radresultado")
    var dif = Math.sqrt(Number(s1))
    r.innerText = dif
}