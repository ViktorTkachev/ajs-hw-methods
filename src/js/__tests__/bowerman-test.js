import Bowerman from '../bowerman';

test('should create a new Bowerman', () => {
  const result = new Bowerman('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
