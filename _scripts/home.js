import $ from 'jquery'

$(document).ready((e) => {
  // ------ Esto es para adaptar el nav y el header
  let mobile = () => {
    $("#header").css({
      'margin-top': $("#nav").height()
    })
  }
  let mediaquery = window.matchMedia("(min-width: 1024px)")
  mediaquery.addListener(mobile)
  // ------
  // ------ Efecto Parallax y cambiar color del nav
  $(window).on('scroll', (e) => {
    let scroll = window.pageYOffset / 5
    if (scroll < 100)
      $('#header').css('background-position', `center ${scroll}%`)
  })
  // ------
  // ------ Agregar eventos para mostrar la description
  $('.card__data').on('click', e => {
    let container = $($(e.target).parents('.card__container')[0])
    container.toggleClass('show__data')
  })
  // ------
})
