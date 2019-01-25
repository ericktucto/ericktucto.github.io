import $ from 'jquery'

$(document).ready((e) => {
    // Efecto Parallax y cambiar color del nav
    $(window).on('scroll', (e) => {
        let scroll = e.pageY / 5
        if (scroll < 100)
            $('#header').css('background-position', `center ${scroll}%`)
            $('#nav').css('background', `rgba(255, 255, 255, ${scroll / 50})`)
    })
})
