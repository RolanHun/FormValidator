window.addEventListener("load",init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
    ID("kuld").addEventListener("click",validalas);
}
hiba = "";
function validalas() {
    var filter=/[A-Z]+[a-z]{2,}/;
    var urlapAdat="";
    if (!filter.test(ID("nev").value)){
        hiba+="A név nagy betűvel kezdődjön és legalább 3 karakter legyen! Legalább 3 karakter hosszú legyen a név!" + "<br>";
        ID("nev").style.border="3px solid red";
    }
    else {
        ID("nev").style.border="none";
        urlapAdat+="Név: " + (ID("nev").value) + "<br>";
    }
    if (!filter.test(ID("email").value)){
        hiba+="Adjon meg egy érvényes email címet!" + "<br>";
        ID("email").style.border="3px solid red";
    }
    else {
        ID("email").style.border="none";
        urlapAdat+="Email: " + (ID("email").value) + "<br>";
    }
    
    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML=hiba;
    $("aside section:nth-child(2) p")[0].innerHTML=urlapAdat;
}