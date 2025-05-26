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
export function monthToSpanish(date: HTMLElement) {
  date.innerHTML = date.innerHTML
    .replace(
      REGEX_DATE_POST,
      (_, day, month, year) => `${day} ${MESES[month]} ${year}`
    )
    ;
}
