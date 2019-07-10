import { html, dispatch } from 'hybrids'
import styles from './NavButtonMenu.sass'

function toggle(host) {
  host.showPanel = ! host.showPanel
  dispatch(host, 'panel', { detail: { show: host.showPanel } })
}

const template = (host) => html`
  <div id="menu" onclick="${toggle}">
    <slot></slot>
  </div>
`.style(styles)

const NavButtonMenu = {
  showPanel: true,
  render: template
}

export default NavButtonMenu
