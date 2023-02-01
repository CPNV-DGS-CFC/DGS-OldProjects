// Question 1
function BlueStrike_OnClick() {

    if (document.getElementById("BlueStrike_OnClick").style.backgroundColor == "") {

        document.getElementById("BlueStrike_OnClick").style.backgroundColor = "blue";
        document.getElementById("BlueStrike_OnClick").style.textDecoration = "line-through";
    }
}

// Question 2
function BlueStrike_OnClickRemove() {

    if (document.getElementById("BlueStrike_OnClick").style.backgroundColor == "blue") {

        document.getElementById("BlueStrike_OnClick").style.backgroundColor = "";
        document.getElementById("BlueStrike_OnClick").style.textDecoration = "";

    }


}

// Question 3

function MouseHoverArial() {

    document.getElementById("MouseHoverArial").style.fontFamily = "Arial";

}


// Question 4

function DoubleChkBoxGreen() {

    if (document.getElementById("checkbox1").checked == true && document.getElementById("checkbox2").checked == true) {
        document.getElementById("DoubleChkBoxGreen").textContent = "YES";
        document.getElementById("DoubleChkBoxGreen").style.backgroundColor = "green";


    }


}


// Question 5

function Div_Pour_Delete(){
    if (document.getElementById("Div_A_Delete").style.display == "")
    {
        document.getElementById("Div_A_Delete").style.display = "none";
    }

}

// Quesiton 6



















