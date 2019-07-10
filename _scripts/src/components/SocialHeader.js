import { html, define } from 'hybrids'
import styles from './SocialHeader.sass'

const SocialHeader = {
  render: () => html`
  <div id="host" class="grid-3 col-1-from-desktop col-3-until-tablet narrow items-center">
    <slot></slot>
  </div>
  `.style(styles)
}

export default define('social-header', SocialHeader)
