class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name should be more then 2 or low then 10 simbols');
    }

    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type)) {
      throw new Error('Not valid character type!');
    }

    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Cannot up the level a dead person');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}

export default Character;
