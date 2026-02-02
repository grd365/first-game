class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new TriangleGameObject(), new Vector2(0,0))
        this.instantiate(new WallGameObject(), new Vector2(0,0))
    }
}