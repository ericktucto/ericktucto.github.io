import iBars from './bars.svg';
import iShareNodes from './share-nodes.svg';
import iBookmark from './bookmark.svg';
import iClipboard from './clipboard.svg';
import iClipboardCheck from './clipboard-check.svg';

const icons = {
  bars: iBars,
  "share-nodes": iShareNodes,
  "bookmark": iBookmark,
  "clipboard": iClipboard,
  "clipboard-check": iClipboardCheck,
}

export default function(icon: string) {
  return icons[icon];
}
