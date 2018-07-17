/**
 * Carga de manera asíncrona el contenido de una URL
 * url Url del recurso de internet que se desea procesar
 */
function cargar(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarRespuesta(this.responseText); //edvuelve el texto de la consulta en texto o nulo
        } else if (this.readyState == 4) {
            gestionarError();
        }
    };
    xhttp.open("GET", url, true); //Si en vez de true indicamos false, la petición es síncrona
    xhttp.send();
}
/**
 * Se invoca cuando el proceso no ha finalizado con status 200
 */
function gestionarError() {

}
/**
 * Se invoca cuando el proceso ha finalizado con status 200
 * respuesta Texto de la respuesta
 */
function gestionarRespuesta(respuesta) {

    document.getElementById("titulo").innerHTML = "";
    document.getElementById("datos").innerHTML="";

    var objeto = JSON.parse(respuesta); //conversion a objeto
    console.log(objeto);

    var poster = document.querySelector("img");
    poster.src = objeto.Poster;

    var titulo = document.createElement("h2");
    var director = document.createElement("p");
    var year = document.createElement("p"); 
    var actores = document.createElement("p");   

    director.textContent = "Director : " + objeto.Director;
    titulo.textContent = objeto.Title;
    year.textContent = "Fecha de lanzamiento: " + objeto.Released;
    actores.textContent = "Actores: " + objeto.Actors;


    document.getElementById("titulo").appendChild(titulo);
    document.getElementById("datos").appendChild(director);
    document.getElementById("datos").appendChild(year);
    document.getElementById("datos").appendChild(actores);


}