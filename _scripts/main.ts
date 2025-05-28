import { monthToSpanish } from './src/utils/datetime';
import load from './icons/load';
import * as ClipboardJS from 'clipboard';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("*[data-datees]").forEach((el: HTMLElement) => {
    monthToSpanish(el)
  });
  document.querySelectorAll("span.x-icon[data-icon]").forEach(async (el: HTMLSpanElement) => {
    try {
      if (el.children.length > 0) {
        return;
      }
      el.innerHTML = load(el.dataset.icon);
    } catch (e) {
      console.error(e);
    }
  });
  const clipboardsvg = load("clipboard");
  const clipboardchecksvg = load("clipboard-check");
  document.querySelectorAll("code.language-plaintext.highlighter-rouge")
    .forEach((el: HTMLElement) => {
      const $span = document.createElement("span");
      const text = el.innerText;
      $span.innerHTML = clipboardsvg
      $span.classList.add("x-icon");
      $span.dataset.icon = "clipboard";
      el.appendChild($span);
      new ClipboardJS(el, { text: () => text })
        .on('success', (_) => {
          $span.innerHTML = clipboardchecksvg;
          setTimeout(() => { $span.innerHTML = clipboardsvg }, 1000);
        })
    });
  document.querySelectorAll("*[data-imagebb]").forEach((e) => {
    console.log(e)
  })
})
