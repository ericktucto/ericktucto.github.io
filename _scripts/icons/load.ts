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
import iJavascript from './javascript.svg';
import iLaravel from './laravel.svg';
import iNodejs from './nodejs.svg';
import iPython from './python.svg';
import iReact from './react.svg';
import iSymfony from './symfony.svg';
import iTypescript from './typescript.svg';
import iVue from './vue.svg';
import iDownloadFile from './download-file.svg';
import iMail from './mail.svg';
import iLightbulb from './lightbulb.svg';
import iOpenGo from './open-go.svg';
import iLayers from './layers.svg';
import iBook from './book.svg';
import iSend from './send.svg';
import iLinkedin from './linkedin.svg';
import iTiktok from './tiktok.svg';
import iPhp from './php.svg';
import iHtml from './html.svg';
import iDocker from './docker.svg';
import iFlutter from './flutter.svg';
import iNginx from './nginx.svg';
import iLinux from './linux.svg';
import iGit from './git.svg';
import iCss from './css.svg';
import iTailwind from './tailwind.svg';
import iPostgresql from './postgresql.svg';
import iMysql from './mysql.svg';
import iJava from './java.svg';
import iSpring from './spring.svg';
import iApirest from './api.svg';
import iCicd from './cicd.svg';

const icons = {
  bars: iBars,
  javascript: iJavascript,
  laravel: iLaravel,
  nodejs: iNodejs,
  python: iPython,
  react: iReact,
  symfony: iSymfony,
  typescript: iTypescript,
  vue: iVue,
  "share-nodes": iShareNodes,
  "bookmark": iBookmark,
  "clipboard": iClipboard,
  "clipboard-check": iClipboardCheck,
  "chevron-up": iChevronUp,
  "gear": iGear,
  "download-file": iDownloadFile,
  mail: iMail,
  lightbulb: iLightbulb,
  "open-go": iOpenGo,
  layers: iLayers,
  book: iBook,
  send: iSend,
  linkedin: iLinkedin,
  tiktok: iTiktok,
  rss: iRss,
  youtube: iYoutube,
  github: iGithub,
  php: iPhp,
  html: iHtml,
  docker: iDocker,
  flutter: iFlutter,
  nginx: iNginx,
  linux: iLinux,
  git: iGit,
  css: iCss,
  tailwind: iTailwind,
  postgresql: iPostgresql,
  java: iJava,
  spring: iSpring,
  mysql: iMysql,
  api: iApirest,
  cicd: iCicd,
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
