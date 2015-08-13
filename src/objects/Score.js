const SQUARE_SIZE = 15;
let styling = {
  key: {
    font: 'bold 14px sans-serif',
    fill: '#46c0f9',
    align: 'center'
  },
  value: {
    font: 'bold 18px sans-serif',
    fill: '#fff',
    align: 'center'
  }
};
class Score extends Phaser.Group {

  constructor(game) {
    super(game);
    this.score = 0;
    this.speed = 0;
    this.game.add.text(30, 20, "SCORE", styling.key);
    this.game.add.text(500, 20, "SPEED", styling.key);
  }

  generateScore() {
    this.scoreObj = this.game.add.text(90, 18, this.score.toString(), styling.value);
    return this.scoreObj;
  }

  generateSpeed() {
    this.speedObj = this.game.add.text(558, 18, this.speed.toString(), styling.value);
    return this.speedObj;
  }

}

export default Score;
