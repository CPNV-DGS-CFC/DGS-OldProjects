<!--Auteur: David Gomes -->
<!--Titre: Site Voyage d'études-->
<!--Date: 08.11.2019-->
<!--Version:1.0-->


//function who creates a line everytime the button "Ajouter" is pressed
function Add() {
    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);


    var valeurIndex0 = document.getElementById("index0").value;
    var valeurIndex1 = document.getElementById("index1").value;
    var valeurIndex2 = document.getElementById("index2").value;
    var valeurIndex3 = document.getElementById("index3").value;
    var valeurIndex4 = document.getElementById("index4").value;
    var valeurIndex5 = document.getElementById("index5").value;
    var valeurIndex6 = document.getElementById("index6").value;


    cell1.innerHTML = valeurIndex0;
    cell2.innerHTML = valeurIndex1;
    cell3.innerHTML = valeurIndex2;
    cell4.innerHTML = valeurIndex3;
    cell5.innerHTML = valeurIndex4;
    cell6.innerHTML = valeurIndex5;
    cell7.innerHTML = valeurIndex6;


    return valeurIndex4;
}


//function total price [ Not Working ]
function prixTotal() {
    prixTotale.value = valeurIndex4.value;
}


//function delete the last created line
function Delete() {
    for (var i = 0; i < 1; i++) {
        document.getElementById('myTable').deleteRow(i);

    }
}


