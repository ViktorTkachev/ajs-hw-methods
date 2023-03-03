import Swordsman from '../swordsman';

test('should create a new Swordsman', () => {
  const result = new Swordsman('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
