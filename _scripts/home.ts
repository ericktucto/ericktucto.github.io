document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector('.marquee')
  if (!marquee) return
  const children = Array.from(marquee.children)
  marquee.append(...[...children].map(el => {
    const clone = el.cloneNode(true) as HTMLElement
    clone.setAttribute('aria-hidden', 'true')
    return clone
  }))
})
