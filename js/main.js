var req = new XMLHttpRequest();
var arreglo = new Array();
function bus() {

    var prueba;
    var result = "";


    var porNombre = document.getElementsByName("q")[0].value;
  
    document.getElementById('action').innerHTML = "";
    var intro = document.getElementById('mia');
    intro.style.visibility = "visible";

    var detalles = "";

    for (i = 1; i <= 100; i++) {
        // Petición HTTP GET síncrona hacia el archivo fotos.json del servidor
        req.open("GET", "http://www.omdbapi.com/?apikey=eabd474&s=" + porNombre + "&page=" + i, false);
        // Envío de la petición
        req.send(null);
        data = JSON.parse(req.responseText)
        var jj = data.Response;
        
        if (jj == "True") {

            if (porNombre == "") {
                detalles = "<tr>" +
                    "<td colspan='5'> Sin informacion disponible...</td>" +
                    "</tr>";
                document.getElementById("informacion").innerHTML = detalles;
            } else {
                data.Search.forEach(movie => {
                    detalles += "<tr>" +
                        "<td><a href='#' onclick=\"buscarPorID('" + movie.imdbID + "')\">Mas detalles </td>" +
                        "<td>" + movie.Title + "</td>" +
                        "<td>" + movie.Year + "</td>" +
                        "<td>" + movie.Type + "</td>" +
                        "<td><img src=" + movie.Poster + "</td>" +
                        "</tr>";
                        
                });
            }
            document.getElementById("informacion").innerHTML = detalles;

        } else {
            $(document).ready(function () {

                var rowsShown = 5;
                var rowsTotal = $('#mia tbody tr').length;
                console.log($('#mia tbody tr').length);
                var numPages = rowsTotal / rowsShown;
                var indices = "";
                for (i = 0; i < numPages; i++) {
                    var pageNum = i + 1;
                    indices += '<a href="#" rel="' + i + '">' + pageNum + '</a> ';
                };
                document.getElementById('menu').innerHTML = indices;
                $('#mia tbody tr').hide();
                $('#mia tbody tr').slice(0, rowsShown).show();
                $('#menu a:first').addClass('active');
                $('#menu a').bind('click', function () {
                    $('#menu a').removeClass('active');
                    $(this).addClass('active');
                    var currPage = $(this).attr('rel');
                    var startItem = currPage * rowsShown;
                    var endItem = startItem + rowsShown;
                    $('#mia tbody tr').css('opacity', '0.0').hide().slice(startItem, endItem).
                        css('display', 'table-row').animate({ opacity: 1 }, 300);
                });
        
            });

            return;
        }
    }



    
}

function buscarPorID(clave) {
    var peticion = ""
    var data = ""
    var detalles = ""
    var clave2 = clave
    console.log(clave2)
    peticion = "http://www.omdbapi.com/?apikey=eabd474&i=" + clave2 + "&plot=full"
    req.open("GET", peticion, false);
    // Envío de la petición
    req.send(null);

    var data = JSON.parse(req.responseText)


    var template = document.getElementById('index').innerHTML;

    console.log(template);

    var compile = Handlebars.compile(template);

    var compiledHTML = compile({

        name: `${data.Title}`,
        poster: `${data.Poster}`,
        rated: `Clasificacion: <strong>${data.Rated}</strong>`,
        year: `Fecha de lanzamiento : <strong>${data.Released}</strong>`,
        runtime: `Duracion: <strong>${data.Runtime}</strong>`,
        genre: `Genero: <strong>${data.Genre}</strong>`,
        director: `Director: <strong>${data.Director}</strong>`,
        plot: `<strong>Sinopsis:</strong> ${data.Plot}`,
    });
    document.getElementById('action').innerHTML = compiledHTML;


}




