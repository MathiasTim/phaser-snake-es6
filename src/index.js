import Menu from './states/Menu';

class Game extends Phaser.Game {

  constructor() {
    super(600, 450, Phaser.AUTO, 'content', null);
    this.addMenu();
  }

  addMenu() {
    this.state.add('Menu', Menu, false);
    this.state.start('Menu');
  }

}

new Game();
