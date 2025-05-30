import YouTubePlayer from 'youtube-player'
import * as ClipboardJS from 'clipboard';
import load from './icons/load';

export function youtube(youtubeId: string | null | undefined) {
  if (youtubeId) {
    YouTubePlayer('video', { videoId: youtubeId });
  }
}

type onCopy = (e: ClipboardJS.Event, $span: HTMLSpanElement, text: string) => void

export function copy(
  $span: HTMLSpanElement,
  onCopy: onCopy | undefined = undefined
) {
  const clipboardsvg = load("clipboard");
  const clipboardchecksvg = load("clipboard-check");

  const el = document.getElementById($span.dataset.click)
  const text = () => document.getElementById($span.dataset.text).innerText

  new ClipboardJS(el, { text, })
    .on('success', (evt) => {
      if (onCopy) {
        onCopy(evt, $span, text());
      } else {
        $span.innerHTML = clipboardchecksvg;
        setTimeout(() => { $span.innerHTML = clipboardsvg }, 1000);
      }
    })
}
