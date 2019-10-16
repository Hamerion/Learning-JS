
var click = 0

document.getElementById("but").addEventListener("click", function(e) {
    var rep = document.getElementById("rep").value

    var positionh = rep.search(/homme/i), // research key word not case sensitive
        positionhu = rep.search(/humain/i);
    //check if reponse is wright or wrong
    if (rep === null) {
        document.getElementById('repp').innerHTML = "vous n'avez rien écrit..."
    }
    if (positionh >= 0 || positionhu >= 0) {
        document.getElementById('repp').innerHTML = "Bien joué"
    } else {
        document.getElementById('repp').innerHTML = "Essaye encore !"
    }
    //count click
    click++;
    if (click > 5) {
        document.getElementById("hint").innerHTML = "Indice : lisez plus de mythologie "
    }

})
