import Zombie from '../zombie';

test('should create a new Zombie', () => {
  const result = new Zombie('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
