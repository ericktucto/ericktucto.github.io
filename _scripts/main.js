import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
import './src/components/TabLink'

$(document).ready((e) => {
    let items = $("#social-header, #links")
    items.each((i, item) => {
        $(item).addClass('hide-until-tablet')
    })
    $("#menu").click(() => {
        items.each((i, item) => {
            if ($(item).hasClass('hide-until-tablet')) {
                $(item).removeClass('hide-until-tablet')
            } else {
                $(item).addClass('hide-until-tablet')
            }
        })
    })
});
