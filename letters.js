function Letter(strg) {
    this.letter = strg;
    this.guessed = false;
    this.isGuessed = function () {
        if (this.guessed === true) {
            return this.letter
        } else {
            return "_"
        }
    }
    this.checked = function (char) {
        if (char === this.letter) {
            this.guessed = true
        }

    }
}
module.exports=Letter