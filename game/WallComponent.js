class TriangleComponent extends Component {
    start() {

    }
    update() {
    }
    draw(ctx) {
        ctx.save()
        ctx.translate(this.transform.position.x, this.transform.position.y)

        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.moveTo(50,50)
        ctx.moveTo(-50, 50)

        ctx.lineWidth = 2
        ctx.strokeStyle = "black"
        ctx.stroke()

        ctx.fillStyle = "black"
        ctx.fill()

        ctx.restore()
    }

}