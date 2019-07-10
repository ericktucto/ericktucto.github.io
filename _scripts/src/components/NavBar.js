import { html, define } from 'hybrids'
import styles from './NavBar.sass'

const toggle = (host) => { host.hidden = !host.hidden }

const NavBar = {
  hidden: true,
  render: ({ hidden }) => html`
  <div class="full">
    <div id="menu" onclick="${toggle}">
      <slot name="icon-menu"></slot>
    </div>
  </div>
  <slot class="${{ hidden } }"></slot>
`.style(styles)
}

export default define('nav-bar', NavBar)
