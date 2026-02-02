class WallGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new WallComponent())
    }
    
}