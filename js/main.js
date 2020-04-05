var prueba;
var result="";
var req = new XMLHttpRequest();
function bus(){
    var porNombre=document.getElementsByName("q")[0].value;
        document.getElementById("resultado").innerHTML=porNombre;
       // Creación de la petición HTTP

// Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
req.open("GET", "http://www.omdbapi.com/?apikey=eabd474&s="+porNombre, false);
// Envío de la petición
req.send(null);
// Impresión por la consola de la respuesta recibida desde el servidor
console.log(req.responseText);
}
/* http://www.omdbapi.com/?apikey=eabd474&s djfsdjk*/