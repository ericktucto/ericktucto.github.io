import '../_sass/libs/stix-grid/es6/main.es6'
import $ from 'jquery'
import ClipboardJS from 'clipboard/dist/clipboard'
import getVideo from './youtube.es6'
$(document).ready((e) => {
    getVideo($('#video').data('id'));
    $('figure.highlight > pre').each((i, el) => {
        let pre = $(el);
        pre.css('position', 'relative');
        pre.append(
            $("<button></button>")
                .addClass('btn')
                .addClass('btn-copy')
                .text("Copiar")
        );
        let text = pre.find('.code pre').text();
        let btn = pre.find('.btn-copy').get(0);
        var clipboard = new ClipboardJS(btn, {
            text: () => {
                return text;
            }
        });
        clipboard.on('success', (e) => {
            $(e.trigger).text("¡Copiado!");
            setTimeout(() => {
                $(e.trigger).text("Copiar");
            }, 1000)
        })
    });
});