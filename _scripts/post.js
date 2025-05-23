import ClipboardJS from 'clipboard/dist/clipboard'
import CodeSnippet from './src/CodeSnippet'
import $ from 'jquery'
import { youtube } from './helpers'
import { monthToSpanish } from './src/utils/datetime'
$(document).ready((e) => {
  const date = document.querySelector("#user-data .profile small");
  monthToSpanish(date);
  youtube($('#video').data('id'))
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
})
