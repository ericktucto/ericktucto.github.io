import $ from 'jquery'

$(document).ready((e) => {
  // ------ CONSTANTES
  const REGEX_DATE_POST = /([0-9]+) ([a-zA-Z]+) ([0-9]+)/
  const MESES = {
    'January': 'Enero',
    'February': 'Febrero',
    'March': 'Marzo',
    'April': 'Abril',
    'May': 'Mayo',
    'June': 'Junio',
    'July': 'Julio',
    'August': 'Agosto',
    'September': 'Setiembre',
    'October': 'Octubre',
    'November': 'Noviembre',
    'December': 'Diciembre',
  }
  // ------
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
  // ------ Acortar descripcion de los post a 255 caracteres
  $('.description__sms').each((i, description) => {
    //$(description).text((i, text) => `${text.slice(0, 100)} ...`)
  })
  // ------
  // ------ Cambiar los meses
  $('.card__date').each((i, date) => {
    let dateToSpanish = (match, day, month, year) => `${day} ${MESES[month]} ${year}`
    $(date).text((i, text) => text.replace(REGEX_DATE_POST, dateToSpanish))
  })
  // ------
})
