import {AbstractForm} from './AbstractForm.js';
import {Feuille} from './Feuille.js';


class Arbre extends AbstractForm {

    // you create new Rectangles by calling this as a function
    // these are the arguments you pass in
    // add default values to avoid errors on empty arguments
    constructor(
        x = 0,
        y = 0,
        width = 0,
        height = 0,
        fillColor = '',
        strokeColor = '',
        strokeWidth = 2,
        pesanteur = false,
        feuille
    ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
        this.feuille = feuille

    }

    /**
     * Dessine la forme spécifique à cette classe
     * @param ctx contexte 2D du canvas
     */
    draw(ctx) {
        // console.log(this.toString())
        // destructuring
        // const {
        //   x, y, width, height,
        //   fillColor, strokeColor, strokeWidth
        // } = this

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


        ctx.rect(this.x, new_y, this.width, this.height)
        // draw the path to screen
        ctx.fill()
        ctx.stroke()

        // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings
        ctx.restore()

        // Feuille
        this.feuille.draw(ctx)


    }

    /**
     * Creation maison
     */
    arbre() {
        const feuilleY = window.innerHeight - this.height - 400
        const feuille = new Feuille(70, feuilleY, 200, 200, 'green', 'green', 1, false)
        const arbre = new Arbre(150, 50, 40, 250, "#875202", "", 0, true, feuille)

        return arbre
    }


    /**
     * get array of forms
     * @return {[Immeuble,...]}
     */
    static buildForms() {
        const bld = new Arbre()
        let forms = []

        forms.push(bld.arbre())
        const builds = forms
        return builds

    }
}

export {Arbre}
