import iBars from './bars.svg';
import iShareNodes from './share-nodes.svg';
import iBookmark from './bookmark.svg';
import iClipboard from './clipboard.svg';
import iClipboardCheck from './clipboard-check.svg';
import iChevronUp from './chevron-up.svg';
import iGear from './gear.svg';

const icons = {
  bars: iBars,
  "share-nodes": iShareNodes,
  "bookmark": iBookmark,
  "clipboard": iClipboard,
  "clipboard-check": iClipboardCheck,
  "chevron-up": iChevronUp,
  "gear": iGear,
}

export default function(icon: string) {
  return icons[icon];
}
