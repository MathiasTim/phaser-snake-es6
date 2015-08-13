const SQUARE_SIZE = 15;
class Apple extends Phaser.Group {

  constructor(game) {
    super(game);
    this.apple = null;
  }

  generateApple() {
    let randomX = Math.floor(Math.random() * 40 ) * SQUARE_SIZE;
    let randomY = Math.floor(Math.random() * 30 ) * SQUARE_SIZE;
    this.apple = this.game.add.sprite(randomX, randomY, 'apple');
    return this.apple;
  }

  checkCollision(snake, score) {
    for(var i = 0; i < snake.snakeArr.length; i++){
      if(snake.snakeArr[i].x == this.apple.x && snake.snakeArr[i].y == this.apple.y){
        this.apple.destroy();
        this.generateApple();
        snake.addElement();
        score.score++;
        score.scoreObj.text = score.score.toString();
      }
    }
  }

}

export default Apple;
