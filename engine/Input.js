class Input{
    static keysDown = []

    static keyDown(event){
        Input.keysDown.push(event.code)
    }

   static keyUp(event) {
    Input.keysDown = Input.keysDown.filter(element => {
        if (element !== event.code) {
            return true
        } else {
            return false
        }
    })
    }
}