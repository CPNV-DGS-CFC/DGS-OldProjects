<!--Auteur: David Gomes -->
<!--Titre: Examen ICT-105 -->
<!--date: 15.11.2019-->

<!--Version:1.0-->

function SaveForm() {

    document.getElementById("LastName1").value = document.getElementById("LastName2").value;


}
/*
function ttdonnees() {
    var txt = document.tonformulaire.txtFirstName.value;

    document.getElementById('txtFirstName2').innerHTML = txt;
}
*/

function Rouge() {
    let p = document.getElementById("InvalideCourt");
    p.removeAttribute("hidden");
    document.getElementById("InvalideCourt").style.backgroundColor = "red";
    // removeAttribute("hidden");

    if (document.getElementById("InvalideCourt").valueOf("txtFirstName") >= 10) {
        document.getElementById("InvalideCourt").style.backgroundColor = "white";
    }

}

function Rouge1() {
    let p = document.getElementById("InvalideCourt2");
    p.removeAttribute("hidden");
    document.getElementById("InvalideCourt2").style.backgroundColor = "red";


}

function Rouge2() {
    let p = document.getElementById("InvalideMin6");
    p.removeAttribute("hidden");
    document.getElementById("InvalideMin6").style.backgroundColor = "red";


}

function Rouge3() {
    let p = document.getElementById("InvalideDiff");
    p.removeAttribute("hidden");
    document.getElementById("InvalideDiff").style.backgroundColor = "red";


}