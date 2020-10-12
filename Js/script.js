const calcular = function(){
    let nome = document.getElementById('nome').value
    let valor = document.getElementById('vh').value
    let ht = document.getElementById('ht').vulue
    let sb = 0
    
    if (valor.lenght == 0 || ht.lenght == 0 || nome.lenght == 0){
        $('#alert-erro').slideDown(400).delay(2000).slideUp(400)
    
    }else{
        sb = perseFloat(valor) * parseFloat(ht)

        document.getElementById('sb').value = sb
        document.getElementById('alert-erro').style.display = "none"
        document.getElementById('alert-sucesso').style.display = "block"
    }
}