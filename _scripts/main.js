import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
$(document).ready((e) => {
    let paths = ["/", "/series", "/projects", "/categories"]
    let links = $("#links span")
    $.each(links, (index, link) => {
        if (index == paths.indexOf(window.location.pathname))
            $(link).addClass('active')
    })
});
