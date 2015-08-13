class Controls extends Phaser.Input {

  constructor(game) {
    super(game);
    this.cursors = null;
    this.direction = 'right';
  }

  keyboardControl() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    return this.cursors;
  }

  didDirectionChange() {
    if (this.cursors.right.isDown && this.direction !== 'left') {
      this.direction = 'right';
    } else if (this.cursors.left.isDown && this.direction !== 'right') {
      this.direction = 'left';
    } else if (this.cursors.up.isDown && this.direction !== 'down') {
      this.direction = 'up';
    } else if (this.cursors.down.isDown && this.direction !== 'up') {
      this.direction = 'down';
    }
    return this.direction;
  }

}

export default Controls;
