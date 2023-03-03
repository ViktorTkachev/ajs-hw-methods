import Character from '../characters';

test('should create a new character with valid arguments', () => {
  const character = new Character('John', 'Bowerman', 20, 30);
  expect(character).toBeDefined();
  expect(character).toEqual({
    name: 'John',
    type: 'Bowerman',
    attack: 20,
    defence: 30,
    health: 100,
    level: 1,
  });
});

test('should throw an error for invalid name', () => {
  expect(() => new Character('V', 'Bowerman', 20, 30)).toThrow();
  expect(() => new Character('ValeriiVasilievich', 'Bowerman', 20, 30)).toThrow();
});

test('should throw an error for invalid type', () => {
  expect(() => new Character('John', 'InvalidType', 20, 30)).toThrow();
});
