import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
$(document).ready((e) => {
    // El archivo 404.html hace que el link de navbar se active
    // esto quita el link de cualquiera de ellas
    let paths = ["/", "/series", "/projects", "/categories"]
    if ( paths.indexOf(window.location.pathname) )
        $("#message").text('ESTÁ EN CONSTRUCCIÓN')
});
