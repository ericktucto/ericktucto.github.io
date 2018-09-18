import $ from 'jquery'

export default class CodeSnippet {
    constructor(snippet) {
        this._text = $(snippet).find('.code pre').text()
        this._button = this._buildButton(snippet)
    }
    _buildButton(snippet) {
        return $(`<button class="btn btn-copy">Copiar</button>`).appendTo(snippet)
    }
    text() {
        return this._text
    }
    button() {
        return this._button.get(0)
    }
}
