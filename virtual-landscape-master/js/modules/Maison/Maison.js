import {AbstractForm} from './AbstractForm.js';
import {Toit} from './Toit.js';
import {Porte} from './Porte.js';
import {Fenetre} from './Fenetre.js';
import {Arbre} from './Arbre/Arbre.js';
import {Feuille} from './Arbre/Feuille.js';


class Maison extends AbstractForm {

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
        toit,
        porte,
        fenetre,
        arbre,
        feuille
    ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
        this.toit = toit
        this.porte = porte
        this.fenetre = fenetre
        this.arbre = arbre
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

        // Toit
        this.toit.draw(ctx)

        // Porte
        this.porte.draw(ctx)

        // Fenetre
        this.fenetre.draw(ctx)

        // Arbre
        this.arbre.draw(ctx)

        // Feuille
        this.feuille.draw(ctx)
    }

    /**
     * Creation maison
     */
    maison() {
        const feuilleY = window.innerHeight - this.height - 400
        const feuille = new Feuille(620, feuilleY, 200, 200, 'green', 'green', 1, false)
        const arbre = new Arbre(700, 50, 40, 250, "#875202", "", 0, true, feuille)
        const fenetre = new Fenetre(300, 600, 30, 35, 'white', '', 1, false)
        const porte = new Porte(200, 100, 15, 35, 'green', '', 1, true)
        const toitY = window.innerHeight - this.height - 201.5
        const toit = new Toit(75, toitY, 350, 100, 'brown', '', 1, false)

        const maison = new Maison(150, 50, 200, 100, "red", "", 0, true, toit, porte, fenetre, arbre, feuille)

        return maison
    }


    /**
     * get array of forms
     * @return {[Immeuble,...]}
     */
    static buildForms() {
        const bld = new Maison()
        let forms = []

        forms.push(bld.maison())
        const builds = forms
        return builds

    }
}

export {Maison}
