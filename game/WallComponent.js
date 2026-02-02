class WallComponent extends Component {
    start() {

    }
    update() {
    }
    draw(ctx) {
        ctx.save()
        ctx.translate()

        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.moveTo(50,50)
        ctx.moveTo(100,50)
        ctx.moveTo(100,100)

        ctx.lineWidth = 2
        ctx.strokeStyle = "black"
        ctx.stroke()

        ctx.fillStyle = "black"
        ctx.fill()

        ctx.restore()
    }

}