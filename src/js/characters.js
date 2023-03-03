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
}

export default Character;
