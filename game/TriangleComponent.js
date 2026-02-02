class TriangleComponent extends Component {
    start() {

    }
    update() {
        // console.log(Input.keyDown)
        if(Input.keysDown.includes("ArrowRight")){
            this.transform.position.x++
        }
         if(Input.keysDown.includes("ArrowLeft")){
            this.transform.position.x--
        }

    }
    draw(ctx) {
        ctx.save()
        ctx.translate(this.transform.position.x, this.transform.position.y)

        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.moveTo(50,50)
        ctx.moveTo(-50, 50)

        ctx.lineWidth = 2
        ctx.strokeStyle = "red"
        ctx.stroke()

        ctx.fillStyle = "green"
        ctx.fill()

        ctx.restore()
    }

}