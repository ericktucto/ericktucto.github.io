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
  <a href="${ref}" class="${{ active }}">
    <slot></slot>
  </a>`.style(styles)
}

export default define('tab-link', TabLink)
