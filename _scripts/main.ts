import { monthToSpanish } from './src/utils/datetime';
import load from './icons/load';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("*[data-datees]").forEach((el: HTMLElement) => {
    monthToSpanish(el)
  });
  document.querySelectorAll("span.x-icon[data-icon]").forEach(async (el: HTMLSpanElement) => {
    try {
      el.innerHTML = load(el.dataset.icon);
    } catch (e) {
      console.error(e);
    }
  });
  document.querySelectorAll("*[data-imagebb]").forEach((e) => {
    console.log(e)
  })
})
