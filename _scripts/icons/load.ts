import iBars from './bars.svg';
import iShareNodes from './share-nodes.svg';
import iBookmark from './bookmark.svg';

const icons = {
  bars: iBars,
  "share-nodes": iShareNodes,
  "bookmark": iBookmark,
}

export default function(icon: string) {
  return icons[icon];
}
