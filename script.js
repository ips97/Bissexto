function calcular(){
    var bissexto = window.prompt("Qual é o valor de a?")
    var res = window.document.getElementById('res')
    
    //transforma em inteiros
    d = parseInt(bissexto)
    
    if ((d%4==0) || (d%100==0) || (d%400==0)){
        res.innerHTML = `<p> ${d} é um ano bissexto</p>`
    }
    else{
        res.innerHTML = `<p> ${d} não é um ano bissexto</p>`
    }
    
}