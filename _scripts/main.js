import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
import ClipboardJS from 'clipboard/dist/clipboard'
import CodeSnippet from './src/CodeSnippet'
import getVideo from './youtube'
$(document).ready((e) => {
    // Efecto Parallax y cambiar color del nav
    $(window).on('scroll', (e) => {
        let scroll = e.pageY / 5
        if (scroll < 100)
            $('#header').css('background-position', `center ${scroll}%`)
            $('#nav').css('background', `rgba(255, 255, 255, ${scroll / 50})`)
    })
    getVideo($('#video').data('id'))

    $('figure.highlight').each((i, el) => {
        let code = new CodeSnippet(el)

        new ClipboardJS(code.button(), {
            text: () => {
                return code.text();
            }
        })
        .on('success', (e) => {
            $(e.trigger).text("¡Copiado!")
            setTimeout(() => { $(e.trigger).text("Copiar") }, 1000)
        })
    });
});
