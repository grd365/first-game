class TriangleGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new TriangleComponent())
        this.addComponent(new Polygon(),{points: [
            new Vector2(0, 0), new Vector2(25, 25), new Vector2(-25, 25)
        ]})
    }
    
}