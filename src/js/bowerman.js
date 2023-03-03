import Character from './characters';

class Bowerman extends Character {
  constructor(name, type = 'Bowerman', attack = 25, defence = 25) {
    super(name, type);
    this.attack = attack;
    this.defence = defence;
  }
}

export default Bowerman;
