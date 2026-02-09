class EnemyGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new EnemyComponent())
        this.addComponent(new Polygon(),{points: [
            new Vector2(0, 0), new Vector2(10, 10), new Vector2(-10, 10)
        ], fillStyle: "red"})
    }
    
}