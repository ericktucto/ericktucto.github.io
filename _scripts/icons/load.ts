import iBars from './bars.svg';
import iShareNodes from './share-nodes.svg';
import iBookmark from './bookmark.svg';
import iClipboard from './clipboard.svg';
import iClipboardCheck from './clipboard-check.svg';
import iChevronUp from './chevron-up.svg';
import iGear from './gear.svg';
import iRss from './rss.svg';
import iYoutube from './youtube.svg';
import iGithub from './github.svg';

const icons = {
  bars: iBars,
  "share-nodes": iShareNodes,
  "bookmark": iBookmark,
  "clipboard": iClipboard,
  "clipboard-check": iClipboardCheck,
  "chevron-up": iChevronUp,
  "gear": iGear,
  rss: iRss,
  youtube: iYoutube,
  github: iGithub,
}

export default function (icon: string, size: string = '24px') {
  const svg = document.createElement('span');
  svg.innerHTML = icons[icon];
  const i = svg.querySelector('svg')
  i.classList.add('inline-block')
  i.classList.add(`size-[${size}]`)
  i.style.width = size;
  i.style.height = size;
  return i;
}
