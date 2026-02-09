class EnemyGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new EnemyComponent())
        this.addComponent(new Polygon(),{points: [
            new Vector2(0, 0), new Vector2(20, 20), new Vector2(-20, 20)
        ], fillStyle: "red"})
    }
    
}