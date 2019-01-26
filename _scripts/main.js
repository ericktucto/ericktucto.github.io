import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
$(document).ready((e) => {
    let paths = ["/", "/series", "/projects", "/categories"]
    let links = $("#links span")
    $.each(links, (index, link) => {
        if (index == paths.indexOf(window.location.pathname))
            $(link).addClass('active')
    })
    let social = $("#social-header")
    let link = $("#links")
    social.addClass('hide-until-tablet')
    link.addClass('hide-until-tablet')
    $("#menu").click(() => {
        if (social.hasClass('hide-until-tablet')) {
            social.removeClass('hide-until-tablet')
        } else {
            social.addClass('hide-until-tablet')
        }
        if (link.hasClass('hide-until-tablet')) {
            link.removeClass('hide-until-tablet')
        } else {
            link.addClass('hide-until-tablet')
        }
    })
});
