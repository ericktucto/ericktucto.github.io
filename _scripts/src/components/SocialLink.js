import { html, define } from 'hybrids'
import styles from './SocialLink.sass'

const SocialLink = {
  ref: "#",
  render: ({ ref }) => html`
  <a href="${ ref }" target="_blank">
    <slot></slot>
  </a>
  `.style(styles)
}

export default define('social-link', SocialLink)
