

var tab = document.getElementById("tableau");
var userInput = prompt("entrez votre mot !");
var mot = userInput ;

var cell = tab.getElementsByTagName("td");
cell[0].innerHTML = "<span class='couleur'>"+ userInput + "</span>";
cell[1].innerHTML = userInput.toLowerCase();
cell[2].innerHTML = userInput.toUpperCase();

  mot=mot.split(" ").join("");

var voy = compterVoyelles(mot);

cell[3].innerHTML = "votre mot contient " +voy+ " voyelles";
cell[4].innerHTML = "votre mot contient " +(mot.length - voy) +" consonnes"

function compterVoyelles(mot)

{

    var longueur = 0;
    var nombre = 0;
    longueur = mot.length;
    for (var i =0; i< longueur ; i++)
    {
        if ( mot.charAt(i) == 'a' || mot.charAt(i) == 'e' || mot.charAt(i) == 'y' || mot.charAt(i) == 'i' || mot.charAt(i) == 'o' || mot.charAt(i) == 'u')
            nombre++;

        if ( mot.charAt(i) == 'A' || mot.charAt(i) == 'E' || mot.charAt(i) == 'Y' || mot.charAt(i) == 'I' || mot.charAt(i) == 'O' || mot.charAt(i) == 'U')
             nombre++;

    }
    return nombre;

  }
  // console.log(voy);

  var inverser = mot.split("").reverse().join("");
  cell[5].innerHTML = "ceci est votre mot inverser : "+inverser+"";

  if (inverser==mot){
    cell[6].innerHTML = "ce mot : "+ mot+" est un palindrome";
  }
  else {
    cell[6].innerHTML = "ce mot : "+ mot+" n'est pas un palindrome";
  }
  function reset(){
    bouton = location.reload();
  }
