let btn_start = document.querySelector("#teia");
let spider = document.querySelector("#spider_descendo");
let cena1 = document.querySelector("#cena1");
let cena2 = document.querySelector("#cena2");
let cena3 = document.querySelector("#cena3");
let audio = document.querySelector("audio");
let quadros = [cena3, cena1, cena2];

var i = 0;
btn_start.addEventListener("mouseover", Cair);
btn_start.addEventListener("mouseleave", Subir);
window.addEventListener("load", CarregarAnima);
window.addEventListener("load",CarregarPage)

function Cair() {
  spider.style.top = "0%";
}
function Subir() {
  spider.style.top = "-50%";
}

//funcionamento do spider aparecer







function Anima() {
    if (i < quadros.length) {
        switch (i) {
            case 0:
            case 1:
            case 2:
                quadros[i].style.opacity = "1";
                audio.play();
                break;
        }

        i++;
        setTimeout(Anima, 3000);
    }
}

function CarregarAnima() {

    setTimeout(Anima, 3000);
   
}




function CarregarPage(){

    setTimeout(NovaPage,7000)
   



}

function NovaPage(){
    window.document = URL('./loading.html');
}