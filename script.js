var resp = document.getElementById('Respota')

function Subtracao(n1, n2){
    var menos = document.getElementById('menos')
    Number(n1)
    Number(n2)
    var result = n1 - n2
    resp.innerHTML = "<b>"+result+"</b>"
}
function Adicao(n1, n2){
    var mais = document.getElementById('mais')

    
    n1=Number(n1)
    n2=Number(n2)
    var result = n1 + n2
    resp.innerHTML = "<b>"+result+"</b>"
}

function Multiplicacao(n1, n2){
    var vezes = document.getElementById('vezes')

    Number(n1)
    Number(n2)
    var result = n1 * n2
    resp.innerHTML = "<b>"+result+"</b>"
}

function Divisao(n1, n2){
    var menos = document.getElementById('dividir')

    Number(n1)
    Number(n2)
    if(n2==0) var result= "Indeterminado"
    else
    var result = n1 / n2
    resp.innerHTML = "<b>"+result+"</b>"   
}

function anientermenos(){
    menos.style.background= 'yellow'
    menos.style.color= 'black'
}

function anientermais(){
    mais.style.background= 'yellow'
    mais.style.color= 'black'
}

function anientervezes(){
    vezes.style.background= 'yellow'
    vezes.style.color= 'black'
}

function anienterdividir(){
    dividir.style.background= 'yellow'
    dividir.style.color= 'black'
}

function animacaosair(){
    menos.style.background= 'black'
    menos.style.color= 'yellow'

    mais.style.background= 'black'
    mais.style.color= 'yellow'

    vezes.style.background= 'black'
    vezes.style.color= 'yellow'

    dividir.style.background= 'black'
    dividir.style.color= 'yellow'
    
}