function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = window.document.getElementById('txtano') //ano do formulário
    var res = document.querySelector('div#res')  //resultado do formulário

    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('Parece que você esqueceu de preencher alguns dados. 😅')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var faixa = ''
        var img = document.createElement('img') //cria tag de imagem
        img.setAttribute('id', 'foto')// como se fosse <img id="foto">

        if(fsex[0].checked){
            var genero = 'mulher'
            if(idade >= 0 && idade < 18){
                //menina
            var faixa = 'menina'
            img.setAttribute('src', 'https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else if(idade <18){
                //moça
            var faixa = 'moça'
            img.setAttribute('src', 'https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else if(idade <60){
                //adulta
            var faixa = 'adulta'
            img.setAttribute('src', 'https://images.pexels.com/photos/6585964/pexels-photo-6585964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else {
                //idosa
                var faixa = 'idosa'
                img.setAttribute('src', 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
        }else if (fsex[1].checked){
            var genero = 'homem'
            if(idade >= 0 && idade < 18){
                //menino
            var faixa = 'menino'
            img.setAttribute('src', 'https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else if(idade <18){
                //moço
            var faixa = 'moço'
            img.setAttribute('src', 'https://images.pexels.com/photos/4180108/pexels-photo-4180108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else if(idade <60){
                //adulto
            var faixa = 'adulto'
            img.setAttribute('src', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
            else {
                //idoso
                var faixa = 'idoso'
                img.setAttribute('src', 'https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            }
        }
        //res.style.textAlign = 'center'
        res.style.fontSize = '16px'
        res.style.color = 'rgba(63,94,251,1)'
        res.innerHTML = `<p>Você tem ${idade} anos, por isso é ${faixa}.</p>`
        //res.appendChild(img)
    }
}

//rodape
var rodape = window.document.getElementById('rodape')
var agora = new Date()
var ano = agora.getFullYear()
rodape.innerHTML = `&copy; ${ano} raysantori`
