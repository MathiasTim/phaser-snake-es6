class Menu extends Phaser.State {

  preload() {
    this.game.load.image('menu', './assets/images/menu.png');
  }

  create() {
    this.add.button(0, 0, 'menu', this.startGame, this);
  }

  startGame() {
    this.state.start('Game');
  }

}

export default Menu;
