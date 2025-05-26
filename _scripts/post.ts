import * as ClipboardJS from 'clipboard'
import { youtube } from './helpers'

function createButton(): HTMLButtonElement {
  const $button = document.createElement("button");
  $button.classList.add("btn", "btn-copy");
  $button.innerText = "Copiar";
  return $button;
}

document.addEventListener("DOMContentLoaded", () => {
  const $video: HTMLDivElement = document.querySelector("#video");
  if ($video) {
    youtube($video.dataset.id)
  }

  document.querySelectorAll("figure.highlight").forEach((el) => {
    const $button = createButton();
    el.appendChild($button);

    const $pre: HTMLPreElement = el.querySelector(".code pre");

    new ClipboardJS(createButton(), {
      text: () => {
        return $pre.innerText;
      }
    })
      .on('success', (e) => {
        const btn = (e.trigger as HTMLButtonElement);
        btn.innerText = "¡Copiado!";
        setTimeout(() => { btn.innerText = "Copiar" }, 1000);
      })
  });
});
