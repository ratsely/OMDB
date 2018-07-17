document.querySelector("button").onclick = ejecutar;

function ejecutar(){
    var titulo = document.querySelector("input").value;
    var poster = document.querySelector("img");
    cargar("http://www.omdbapi.com/?t="+ titulo + "&plot=short&apikey=65a2a98f")
}