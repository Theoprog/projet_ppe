import {AbstractForm} from '../Arbre/AbstractForm.js';

class Montagne3 extends AbstractForm {

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
        pesanteur = false
    ) {
        super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur)
    }

    /**
     * Dessine la forme spécifique à cette classe
     * @param ctx contexte 2D du canvas
     */
    draw(ctx) {
        ctx.save()

        // set the styles for this shape
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth

        // create the *path*
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor

        // pousse l'objet au bas de l'écran
        const MAX_HEAD = 0
        let new_y = (this.pesanteur) ? window.innerHeight - this.height - MAX_HEAD : this.y

        // un peu d'ombre pour les triangles
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        // triangle avec une base
        ctx.moveTo(this.x + this.width / 2, new_y)
        ctx.lineTo(this.right, new_y + this.height)
        ctx.lineTo(this.x, new_y + this.height)

        ctx.closePath()

        // draw the path to screen
        ctx.fill()
        ctx.stroke()

        // restores the styles from earlier
        // preventing the colors used here
        // from polluting other drawings
        ctx.restore()
    }

    /**
     * Creation maison
     */
    montagne3() {
        const montagne2 = new Montagne3(1145, 70, 400, 500, 'grey', '', 2, true)
        return montagne3
    }


    /**
     * get array of forms
     * @return {[Immeuble,...]}
     */
    static buildForms() {
        const bld = new Montagne3()
        let forms = []

        forms.push(bld.montagne3())
        const builds = forms
        return builds

    }
}

export {Montagne3}