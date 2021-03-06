import {AbstractForm} from './AbstractForm.js';

class Fenetre extends AbstractForm {

    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur = false
    ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
    }

    /**
     * Dessine la forme spécifique à cette classe
     * @param ctx contexte 2D du canvas
     */
    draw(ctx) {

        // saves the current styles set elsewhere
        // to avoid overwriting them
        ctx.save()

        // set the styles for this shape
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth

        // create the *path*
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor


        const MAX_HEAD = 0
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y
        let wCase = ~~(this.width / 2)
        let hCase = ~~(this.height / 2)

        console.log("this.x = " + this.x + "  new_y = " + new_y)
        const MAX_FENETRE_ETAGE = 2
        const MAX_ETAGE = 2
        // https://developer.mozilla.org/fr/docs/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs
        for (let i = 0; i < MAX_FENETRE_ETAGE; i++) {
            for (let j = 0; j < MAX_ETAGE; j++) {
                /*ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                  Math.floor(255 - 42.5 * j) + ',0)';*/
                ctx.rect(this.x + j * wCase, new_y + i * hCase, wCase, hCase);
                ctx.fillRect(this.x + j * wCase, new_y + i * hCase, wCase, hCase);
            }
        }
        // ctx.rect(this.x, new_y, this.width, this.height)
        // draw the path to screen
        ctx.fill()
        ctx.stroke()

        // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings
        ctx.restore()
    }


    fenetre() {
        const fenetre = new Fenetre(150, 100, 30, 35, 'white', '', 1, false)
        return fenetre
    }


    /**
     * get array of forms
     * @return {[Immeuble,...]}
     */
    static buildForms() {
        const bld = new Fenetre()
        let forms = []

        forms.push(bld.fenetre())
        const builds = forms
        return builds

    }
}

export {Fenetre}