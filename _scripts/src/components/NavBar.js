import { html, define, children } from 'hybrids'
import styles from './NavBar.sass'
import NavButtonMenu from './NavButtonMenu'

const onPanel = (host, { detail: { show } }) => { host.show = show }

const template = ({show}) => html`
  <style>${styles}</style>
  <nav-button-menu onpanel="${onPanel}">
    <slot name="icon-menu"></slot>
  </nav-button-menu>
  ${show && html`<slot id="content"></slot>`}
`.define({ NavButtonMenu })

const NavBar = {
  menu: children(NavButtonMenu),
  show: false,
  render: template
}

export default define('nav-bar', NavBar)
