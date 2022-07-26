var loader = document.querySelector("#loader")

window.addEventListener("load", vanish);
function vanish(){
	loader.classList.add("disppear")
}


//------ button nav --------
const hamburgerMenu = document.querySelector('.hamburger');
const menuIsActive = () => {
	hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive)
//-------button nav -------
//-------menu desplegable-------
var lanzador = "#enlace-menu";
var desplegable = "#menu";
var despliegaClase = "lanzador-menu";

function nav(){
	var lanz = document.querySelector(lanzador);	
	lanz.addEventListener("click", despliegaMenu, false);
}

function despliegaMenu(e){
	e.preventDefault();
	var despl = document.querySelector(desplegable);
	despl.classList.toggle(despliegaClase);
}

document.querySelector("html").classList.add("js");

nav();
//-------menu desplegable-------
