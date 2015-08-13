const SQUARE_SIZE = 15;
const START_SIZE = 10;
class Snake extends Phaser.Group {

  constructor(game) {
    super(game);
    this.updateDelay = 0;
    this.snakeArr = [];
  }

  generateSnake() {
    for(var i = 0; i < START_SIZE; i++) {
      this.snakeArr[i] = this.game.add.sprite(150 + i * SQUARE_SIZE, 150, 'snake');
    }
    return this.snakeArr;
  }

  movement(speed, direction) {
    this.updateDelay++;

    if (this.updateDelay % (10 - speed) == 0) {
      this.firstCell = this.snakeArr[this.snakeArr.length - 1];
      let lastCell = this.snakeArr.shift();
      this.oldLastCellx = lastCell.x;
      this.oldLastCelly = lastCell.y;

      if (direction == 'right') {
          lastCell.x = this.firstCell.x + SQUARE_SIZE;
          lastCell.y = this.firstCell.y;
      } else if(direction == 'left') {
          lastCell.x = this.firstCell.x - SQUARE_SIZE;
          lastCell.y = this.firstCell.y;
      } else if(direction == 'up') {
          lastCell.x = this.firstCell.x;
          lastCell.y = this.firstCell.y - SQUARE_SIZE;
      } else if(direction == 'down'){
          lastCell.x = this.firstCell.x;
          lastCell.y = this.firstCell.y + SQUARE_SIZE;
      }

      this.snakeArr.push(lastCell);
      this.firstCell = lastCell;
    }
  }

  addElement() {
    this.snakeArr.unshift(this.game.add.sprite(this.oldLastCellx, this.oldLastCelly, 'snake'));
  }

  selfCollision() {
    let head = this.snakeArr[this.snakeArr.length - 1];
    for (var i = 0; i < this.snakeArr.length - 1; i++) {
      if (head.x == this.snakeArr[i].x && head.y == this.snakeArr[i].y) {
        this.game.state.start('GameOver');
      }
    }
  }

  wallCollision() {
    let head = this.snakeArr[this.snakeArr.length - 1];
    if (head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0) {
      this.game.state.start('GameOver');
    }
  }

}

export default Snake;
