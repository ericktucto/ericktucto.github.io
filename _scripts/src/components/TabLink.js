import { html, define } from 'hybrids'
import styles from './TabLink.sass'

function hola() {
  console.log("Hola")
}

const TabLink = {
  ref: "#",
  active: {
    get: ({ ref }) => window.location.pathname == ref
  },
  render: ({ ref, active }) => html`
  <a id="host" class="grid-1 narrow items-v-middle col-1-from-tablet col-4-until-tablet"
     href="${ref}">
    <span class="${{ active }}">
      <slot></slot>
    </span>
  </a>`.style(styles)
}

export default define('tab-link', TabLink)
