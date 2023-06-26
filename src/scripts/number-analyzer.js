let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        num.value =''
    }else{
        window.alert('Valor inválido ou já encontrado')
    }
    num.value =''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finaliazar.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += (valores[pos])
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/ tot
        res.style.fontSize = '16px'
        res.style.color = 'rgba(63,94,251,1)'
        res.innerHTML=``
        res.innerHTML+=`<p>Ao todo, temos ${tot} valores.</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML+=`<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML+=`<p>A média dos valores é ${media}.</p>`
    }
}