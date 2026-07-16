import './tailwind.css';
import './styles.sass';
import { monthToSpanish } from './src/utils/datetime';
import load from './icons/load';
import * as ClipboardJS from 'clipboard';
import { copy } from './helpers';
import { loadForm } from './src/contact';

document.addEventListener('DOMContentLoaded', () => {
  loadForm()
  const links = document.querySelectorAll('a[data-scroll]')
  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault()
      const href = link.getAttribute('href')
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    })
  })
  document.querySelector("#btn-up").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  document.querySelectorAll("*[data-datees]").forEach((el: HTMLElement) => {
    monthToSpanish(el)
  });
  document.querySelectorAll("span.x-icon[data-icon]").forEach(async (el: HTMLSpanElement) => {
    try {
      if (el.children.length > 0) {
        return;
      }
      el.appendChild(load(el.dataset.icon, el.dataset.size));
      if (el.dataset.click) {
        copy(el)
      }
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
      $span.appendChild(clipboardsvg);
      $span.classList.add("x-icon");
      $span.dataset.icon = "clipboard";
      el.appendChild($span);
      new ClipboardJS(el, { text: () => text })
        .on('success', (_) => {
          $span.innerHTML = '';
          $span.appendChild(clipboardchecksvg);
          setTimeout(() => {
            $span.innerHTML = '';
            $span.appendChild(clipboardsvg);
          }, 1000);
        })
    });
  document.querySelectorAll("*[data-imagebb]").forEach((e) => {
    console.log(e)
  })
})
