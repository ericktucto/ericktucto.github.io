import { html, define } from 'hybrids'
import { icon as faIcon } from '@fortawesome/fontawesome-svg-core'

const SocialLink = {
  prefix: "fas",
  icon: "",
  svg: {
    get: ({ prefix, icon }) => {
      const iHtml = faIcon({ prefix, iconName: icon }).html;
      if (Array.isArray(iHtml) && iHtml.length > 0) {
        return iHtml[0];
      }
      return ""
    }
  },
  render: ({ svg }) => html`
  <i class="faicon" innerHTML="${svg}"></i>
  `
}

export default define('fa-icon', SocialLink)

