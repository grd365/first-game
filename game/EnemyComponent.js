class EnemyComponent extends Component {
    start() {

    }
    update() {
    if (!this._inited) {
      this.leftBound = 450;
      this.rightBound = 550;
      this.direction = 1;
      this._inited = true;
    }

        this.transform.position.x+= this.direction * Time.deltaTime * 60

        if(this.transform.position.x >= this.rightBound){
            this.direction = -1
        }
        else if(this.transform.position.x <= this.leftBound){
            this.direction = 1
        }
    }

}