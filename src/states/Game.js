import Snake from '../objects/Snake';
import Apple from '../objects/Apple';
import Score from '../objects/Score';
import Controls from '../objects/Controls';

class Game extends Phaser.State {

  preload() {
    this.game.load.image('apple', './assets/images/apple.png');
    this.game.load.image('snake', './assets/images/snake.png');
  }

  create() {
    let direction = 'right';
    let newDirection = null;
    let addNew = false;

    this.snakeObj = new Snake(this.game);
    this.appleObj = new Apple(this.game);
    this.scoreObj = new Score(this.game);
    this.controlsObj = new Controls(this.game);

    this.snake = this.snakeObj.generateSnake();
    this.apple = this.appleObj.generateApple();

    this.score = this.scoreObj.generateScore();
    this.speed = this.scoreObj.generateSpeed();

    this.controls = this.controlsObj.keyboardControl();
  }

  update() {
    let direction = this.controlsObj.didDirectionChange();

    this.scoreObj.speed = Math.min(10, Math.floor(this.scoreObj.score/5));
    this.speed.text = '' + this.scoreObj.speed;

    this.snakeObj.movement(this.scoreObj.speed, direction);

    this.snakeObj.selfCollision();
    this.snakeObj.wallCollision();

    this.appleObj.checkCollision(this.snakeObj, this.scoreObj);
  }
}

export default Game;
