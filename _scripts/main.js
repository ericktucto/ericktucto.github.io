import '@webcomponents/webcomponentsjs'
import './src/fortawesome'
import './src/components/TabLink'
import './src/components/SocialLink'
import './src/components/NavBar'
import './src/components/FAIcon'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("*[data-imagebb]").forEach((e) => {
    const url = e.dataset.imagebb;
    console.log(url)
  })
})
