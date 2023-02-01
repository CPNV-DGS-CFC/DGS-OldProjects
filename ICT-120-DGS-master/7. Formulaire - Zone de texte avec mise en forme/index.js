

function InsertText() {

    var textinsere = prompt("Texte à insérer :");

    document.getElementById("txtarea").value+="[<b>" + textinsere + "</b>]";


}

function InsertText1() {

    var textinsere = prompt("Texte à insérer :");

    document.getElementById("txtarea").value+="[<i>" + textinsere + "</i>]";


}

function InsertText2() {

    var textinsere = prompt("Texte à insérer :");

    document.getElementById("txtarea").value+="[<u>" + textinsere + "</u>]";


}