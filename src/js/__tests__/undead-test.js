import Undead from '../undead';

test('should create a new Undead', () => {
  const result = new Undead('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
