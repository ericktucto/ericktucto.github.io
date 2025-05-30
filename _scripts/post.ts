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
  const $textShare = (document.querySelector("#text__share") as HTMLSpanElement);
  $textShare.innerText = window.location.href
  document.querySelector("#action-share span.x-icon[data-icon=share-nodes]")
    .addEventListener("click", () => {
      if (navigator.share) {
        const $share = (document.querySelector("#action-share .container__share") as HTMLElement)
        $share.style.display = "none";
        navigator.share({
          text: (document.querySelector(".post-header h1") as HTMLElement).innerText,
          //text: "Vi este blog interesante 🤩",
          url: window.location.href,
          title: (document.querySelector(".post-header h1") as HTMLElement).innerText,
        });
        return;
      }
    });

  document.querySelectorAll("figure.highlight").forEach((el) => {
    const $button = createButton();
    el.appendChild($button);

    const $pre: HTMLPreElement = el.querySelector(".code pre");

    new ClipboardJS($button, {
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
