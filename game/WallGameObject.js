class WallGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new WallComponent())
        this.addComponent(new Polygon(),{points: [
            new Vector2(0, 0), new Vector2(30, 0), new Vector2(30, 30), new Vector2(0,30)
        ], fillStyle: "peru"})
    }
    
}