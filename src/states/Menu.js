class Menu extends Phaser.State {

  preload() {
    this.game.load.image('menu', './assets/images/menu.png');
  }

  create() {
    this.add.sprite(0, 0, 'menu');
  }

}

export default Menu;
