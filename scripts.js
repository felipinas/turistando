function openMenu() {
    //Abrir o menu no mobile

    document.getElementById('header').classList.toggle('open-menu')
    document.getElementById('list-menu').classList.toggle('list-menu-open')

    //Trocar a foto do menu pelo X

    var menu = document.getElementById('button-menu').src //"imagens/open-menu.svg"

    if (menu.indexOf("imagens/open-menu.svg") >= 0) {
        document.getElementById('button-menu').src = 'imagens/multiply.svg'
    } else {
        document.getElementById('button-menu').src = 'imagens/open-menu.svg'
    }
}

function openTexto(id) {
    var display = document.getElementById(`${id}`).style.display

    var botao = document.getElementsByClassName('button-mais')

    console.log(botao)

    if (display == 'none') {
        document.getElementById(`${id}`).style.display = 'block'
    } else {
        document.getElementById(`${id}`).style.display = 'none'
    }
  
}