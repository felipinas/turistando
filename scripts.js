//funcao para menu hamburguer

function openMenu() {
    //Abrir o menu no mobile

    document.getElementById('header').classList.toggle('open-menu')

    //Trocar a foto do menu pelo X

    var menu = document.getElementById('button-menu').src //"imagens/open-menu.svg"

    if (menu.indexOf("imagens/icons/open-menu.svg") >= 0) {
        document.getElementById('button-menu').src = 'imagens/icons/multiply.svg'
    } else {
        document.getElementById('button-menu').src = 'imagens/icons/open-menu.svg'
    }
}

//funcao para abrir os textos dos lugares

function openTexto(id) {
    var display = document.getElementById(`${id}`).style.display


    if (display == 'none') {
        document.getElementById(`${id}`).style.display = 'block'
    } else {
        document.getElementById(`${id}`).style.display = 'none'
    }
  
}

//funcoes para a galeria 

var min = 1
var max = 3
var fi = min //imagem indice

function proxFoto(idFoto, pastaFoto) { 
    fi++
    if (fi > 3) {
        fi = min
    }
    document.getElementById(`${idFoto}`).src = `imagens/${pastaFoto}/${fi}.png`
}

function anteFoto(idFoto, pastaFoto) {
    fi--
    if (fi < 1) {
        fi = max
    }
    document.getElementById(`${idFoto}`).src = `imagens/${pastaFoto}/${fi}.png`
}