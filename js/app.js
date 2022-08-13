function switchOscuro() {
  let switchDeColor = document.getElementsByClassName("colorSwitch");

  console.log(switchDeColor);
    // switchDeColor.classList.remove("bg-light");
    // switchDeColor.classList.add("bg-dark");

for(let i = 0; i < switchDeColor.length; i++) {

    if(switchDeColor[i].classList.contains("bg-light")) {
        switchDeColor[i].classList.remove("bg-light");
        switchDeColor[i].classList.remove("text-dark");
        switchDeColor[i].classList.add("bg-dark");
        switchDeColor[i].classList.add("text-light");
        switchDeColor[i].classList.add("navbar-dark");
    } else {
        switchDeColor[i].classList.remove("bg-dark");
        switchDeColor[i].classList.remove("text-light");
        switchDeColor[i].classList.remove("navbar-dark");
        switchDeColor[i].classList.add("bg-light");
        switchDeColor[i].classList.add("text-dark");
    }
}
}

//Funcion para agregar una cancion en el index
let contador = 0;

function agregarRecomendacion() {
    let ulPadre = document.getElementById("listaReco");
    let liPadre = document.getElementsByClassName("reco-usuario");
    let cancion = document.getElementById("cancion").value;
    let banda = document.getElementById("banda").value;
    let link = document.getElementById("link").value;
    
    //Creacion del elemento li con sus clases
    let itemLista = document.createElement("li");
    itemLista.className = "reco-usuario fw-semibold";

    //Creacion del elemento a
    let linkNuevo = document.createElement("a");

    
    //Agregar el elemento li al html
    ulPadre.appendChild(itemLista); 
    
    //Definir el contenido del elemento a con sus atributos
    linkNuevo.innerHTML = `${banda} - ${cancion}`;
    linkNuevo.setAttribute("href", `${link}`);
    linkNuevo.setAttribute("target", "_blank");

    //Define 10 elementos, agrega a la lista y borra el primero
    if(contador <= 9) {
        liPadre[contador].appendChild(linkNuevo);
        contador += 1;
    } else {
        liPadre[0].remove();
        liPadre[9].appendChild(linkNuevo);
    }
}

//Funcion para encontrar banda aleatoria

function bandaAleatoria() {
    let bandas = ["Generos/Blues/B.B. King.html", "Generos/Blues/Buddy guy.html", "Generos/Blues/Eric Clapton.html", "Generos/Blues/Nina Simone.html", "Generos/Pop/Britney Spears.html", "Generos/Pop/Madonna.html", "Generos/Pop/Bruno Mars.html", "Generos/Pop/Michael Jackson.html", "Generos/Rock/Led-Zeppelin.html", "Generos/Rock/Pink-Floyd.html", "Generos/Rock/Queen.html", "Generos/Rock/The-beatles.html"];

    let nroAleatorio = Math.floor(Math.random() * 12);


    let boton = document.getElementById("bandaAleatoria");

    boton.setAttribute("href", bandas[nroAleatorio])

}