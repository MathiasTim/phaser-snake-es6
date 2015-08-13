import Menu from './states/Menu';
import Game from './states/Game';
import GameOver from './states/GameOver';

class Snake extends Phaser.Game {

  constructor() {
    super(600, 450, Phaser.AUTO, 'content', null);
    this.addStates();
    this.state.start('Menu');
  }

  addStates() {
    this.state.add('Menu', Menu, false);
    this.state.add('Game', Game, false);
    this.state.add('GameOver', GameOver, false);
  }
}

new Snake();
