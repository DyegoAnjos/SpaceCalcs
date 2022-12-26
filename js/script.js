var resp = document.getElementById('Respota')

function operacao(n1,n2,id){
    n1=Number(n1)
    n2=Number(n2)

    if(id === 1){
        var result = n1 - n2
    }
    if(id === 2){
        var result = n1 + n2
    }
    if(id === 3){
        var result = n1 * n2
    }
    if(id === 4){
        if(n2==0) 
            var result= "Indeterminado"
        else
            var result = n1 / n2
    }

    resp.innerHTML = "<strong>"+result+"</strong>"
}