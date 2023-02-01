<!--Auteur: David Gomes -->
<!--Titre: Examen ICT-105 -->
<!--date: 15.11.2019-->
<!--Version:1.0-->

function longueurCaracteres() {
    // alert('Vous avez encore 144 caractères.');
    document.forms['MyForm'].elements['textarea'].onkeyup = function () {
        document.forms['MyForm'].elements['NbCaractere'].value = document.forms['MyForm'].elements['textarea'].value.length;
    }
}
