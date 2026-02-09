class TriangleComponent extends Component {
    start() {

    }
    update() {
        // console.log(Input.keyDown)
        if(Input.keysDown.includes("ArrowRight")){
            this.transform.position.x+= Time.deltaTime * 60
        }
         if(Input.keysDown.includes("ArrowLeft")){
            this.transform.position.x+= - Time.deltaTime *60
        }
        if(Input.keysDown.includes("ArrowDown")){
            this.transform.position.y+= Time.deltaTime * 60
        }
        if(Input.keysDown.includes("ArrowUp")){
            this.transform.position.y+= - Time.deltaTime * 60
        }
    }
   

}