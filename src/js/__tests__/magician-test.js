import Magician from '../magician';

test('should create a new Magician', () => {
  const result = new Magician('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
