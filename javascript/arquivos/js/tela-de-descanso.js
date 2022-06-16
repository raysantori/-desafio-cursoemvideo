//main
function carregar(){
    var agora = new Date()

    var hr = window.document.getElementById('hr')
    var hora = ('0' + agora.getHours()).slice(-2);//deixa com duas casas
    var min = ('0' + agora.getMinutes()).slice(-2);//deixa com duas casas
    hr.innerHTML = `${hora}:${min}`

    var dia = window.document.getElementById('dia')
    var semana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var diaSem = agora.getDay ()
    var dias = ("0" + agora.getDate()).slice(-2);//deixa com duas casas
    var mes = agora.toLocaleString("pt-BR", { month: "long" });//mês por extenso
    var anos = agora.getFullYear ()
    dia.innerHTML = `${semana[diaSem]}, ${dias} de ${mes}`
    

    var imagem = window.document.getElementById('imagem')
    if(hora >= 6 && hora <18){
        //bom dia
        imagem.src = 'https://images3.alphacoders.com/115/thumb-1920-115587.jpg'
        document.body.style.background = '#ddd'
        document.body.style.color = '#1b1b1b'
    }else{
        //boa noite
        imagem.src = 'https://images4.alphacoders.com/114/thumb-1920-114138.jpg'
        document.body.style.background = '#1b1b1b'
        document.body.style.color = '#b1b0bc'
    }
}


//rodape
var rodape = window.document.getElementById('rodape')
var agora = new Date()
var ano = agora.getFullYear()
rodape.innerHTML = `&copy; ${ano} raysantori`
