import { html, define } from 'hybrids'
import styles from './TabGroup.sass'
import stix from '../../../_sass/libs/stix-grid/sass/_stix-grid.sass'

const TabGroup = {
  render: () => html`
  <div id="host" class="grid-4 content-between narrow col-1-from-desktop col-3-until-tablet">
    <slot></slot>
  </div>
  `.style(styles, stix)
}

export default define('tab-group', TabGroup)
