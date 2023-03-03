import Daemon from '../daemon';

test('should create a new Daemon', () => {
  const result = new Daemon('Viktor');
  expect(result).toBeDefined();
  expect(result).toEqual({
    name: 'Viktor',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
