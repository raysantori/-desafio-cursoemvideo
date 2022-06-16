function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML+=`Impossível contar!`
        //window.alert(`Preencha os dados corretamente.`)
    }else{
        res.innerHTML=`Contando: <br>`

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p==0){
            window.alert(`Passo inválido. Considerando passo 1.`)
            p=1
        }
        if(i<f){
            //crescente
           for (let c = i; c <= f; c +=p){
            res.innerHTML+=`${c} → `
        } 
        }else{
            //decrescente
            for(let c = i; c>= f; c-=p){
                res.innerHTML+=`${c} → `
            }
        }
        res.innerHTML+=`\u{1f3c1}`
    }
}

//rodape
var rodape = window.document.getElementById('rodape')
var agora = new Date()
var ano = agora.getFullYear()
rodape.innerHTML = `&copy; ${ano} raysantori`