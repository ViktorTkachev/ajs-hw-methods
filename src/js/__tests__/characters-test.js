import Character from '../characters';

test('should create a new character with valid arguments', () => {
  const character = new Character('Viktor', 'Bowerman', 20, 30);
  expect(character).toBeDefined();
  expect(character).toEqual({
    name: 'Viktor',
    type: 'Bowerman',
    attack: 20,
    defence: 30,
    health: 100,
    level: 1,
  });
});

test('should throw an error for invalid name', () => {
  expect(() => new Character('V', 'Bowerman', 25, 25)).toThrowError('Name should be more then 2 or low then 10 simbols');
  expect(() => new Character('ValeriiVasilievich', 'Bowerman', 25, 25)).toThrowError('Name should be more then 2 or low then 10 simbols');
});

test('should throw an error for invalid type', () => {
  expect(() => new Character('Viktor', 'InvalidType', 25, 25)).toThrowError('Not valid character type!');
});

test('Level Up testing, it should throw an error for a dead character', () => {
  const character = new Character('Viktor', 'Bowerman', 25, 25, 0);
  expect(() => character.levelUp()).toThrowError('Cannot up the level a dead person');
});

test('should level up the character', () => {
  const character = new Character('Viktor', 'Bowerman', 25, 25, 50);
  character.levelUp();
  expect(character).toEqual({
    name: 'Viktor',
    type: 'Bowerman',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  });
});

test('should reduce the character health by the correct amount', () => {
  const character = new Character('Viktor', 'Bowerman', 25, 25);
  character.damage(20);
  expect(character.health).toEqual(85);
});

test('should not reduce the character health if they are dead', () => {
  const character = new Character('Viktor', 'Bowerman', 25, 25, 0);
  character.damage(20);
  expect(character.health).toEqual(0);
});

test('should not reduce the character health below zero', () => {
  const character = new Character('Viktor', 'Bowerman', 25, 25, 100);
  character.damage(200);
  expect(character.health).toEqual(0);
});
