let cards = document.getElementById('cards');
let adulto, crianca, duracao = 0;
let campo, qntdCampo, rmv;

let itens = [
    {
        nome: 'Carne',
        medida: 'kg',
        qntd: 0,
    },
    {
        nome: 'Cerveja',
        medida: 'latas',
        qntd: 0,
    },
    {
        nome: 'Bebida',
        medida: 'garrafas',
        qntd: 0,
    }    
]

function adicionarCard(){
    card = "";

    for (let index = 0; index < itens.length; index++) {
        let elemento = itens[index];

        card += '<div class="card">';
        card += '<img class="img-card" '
        card += 'src="./assets/' + elemento.nome + '.png" '
        card += 'alt="Imagem de ' + elemento.nome + '">';

        card += '<div class="txt-card">'
        card += '<p class="title-card">';
        card += elemento.nome;
        card += '</p>';
        card += '<hr>';

        card += '<p class="qntd-card">';
        card += elemento.qntd + ' ' + elemento.medida ;
        card += '</p>';
        card += '</div>'

        card += '</div>';
    }

    cards.innerHTML = card;
}

function calculcarQntd(){
    adulto = parseInt(document.getElementById('adulto').value);
    crianca = parseInt(document.getElementById('crianca').value) / 2;
    duracao = parseInt(document.getElementById('duracao').value);

    let qntd = [];
    let carne, cerveja, bebida = 0;

    if(duracao < 6){
        carne = 200;
        cerveja = 500;
        bebida = 300;
    } else{
        carne = 450;
        cerveja = 1000;
        bebida = 500;
    }

    qntd[0] = Math.ceil(duracao * (carne * adulto + carne * crianca) / 1000);
    qntd[1] = Math.ceil(duracao * (cerveja * adulto) / 300);
    qntd[2] = Math.ceil(duracao * (bebida * adulto + bebida * crianca) / 2000);
    
    for (let index = 0; index < itens.length; index++) {
        itens[index].qntd = qntd[index];
    }
}

function calcular(){
    calculcarQntd();
    adicionarCard();
}

function adicionar(event){
    rmv = document.getElementById('rmv-' + event);
    campo = document.getElementById(event);
    qntdCampo = parseInt(campo.value);
    if(qntdCampo < 0){
        qntdCampo = 0;
    }else{
        rmv.style.visibility = 'visible';
        qntdCampo++
    }
    campo.value = qntdCampo;
}

function remover(event){
    
    campo = document.getElementById(event);
    qntdCampo = parseInt(campo.value);
    if(qntdCampo <= 1){
        exibirBotao(event, 'hidden');
        qntdCampo = 0;
    }else{
        exibirBotao(event, 'visible');
        qntdCampo--
    }
    campo.value = qntdCampo;
}

function exibirBotao(event, status){
    rmv = document.getElementById('rmv-' + event);
    rmv.style.visibility = status;
}