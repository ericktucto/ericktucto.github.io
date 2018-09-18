import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
import ClipboardJS from 'clipboard/dist/clipboard'
import CodeSnippet from './src/CodeSnippet.es6'
import getVideo from './youtube.es6'
$(document).ready((e) => {
    getVideo($('#video').data('id'))
    $('figure.highlight > pre').each((i, el) => {
        let code = new CodeSnippet(el)

        var clipboard = new ClipboardJS(code.button(), {
            text: () => {
                return code.text();
            }
        })
        clipboard.on('success', (e) => {
            $(e.trigger).text("¡Copiado!")
            setTimeout(() => { $(e.trigger).text("Copiar") }, 1000)
        })
    });
});