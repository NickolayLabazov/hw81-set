import Team from '../src/function';

test('Вывод массива методом toArray', () => {
  const expected = ['Swordsman', 'Bowman', 'Magician', 'Undead', 'Zombie'];
  const team = new Team();
  team.set = new Set(['Swordsman', 'Bowman', 'Magician', 'Undead', 'Zombie']);
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом add одного игрока', () => {
  const expected = ['Bowman'];
  const team = new Team();
  team.add('Bowman');
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом add 6 игроков', () => {
  const expected = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie'];

  const team = new Team();
  team.add('Bowman');
  team.add('Swordsman');
  team.add('Magician');
  team.add('Undead');
  team.add('Zombie');
  team.add('Daemon');
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом addAll 7 игроков с одним дублированием', () => {
  const expected = ['Swordsman', 'Bowman', 'Magician', 'Undead', 'Zombie'];
  const team = new Team();
  team.addAll(['Swordsman', 'Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon']);
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом addAll 7 игроков с дублированием в set, состоящий из 2 игроков ', () => {
  const expected = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie'];
  const team = new Team();
  team.add('Bowman');
  team.add('Swordsman');
  team.addAll(['Swordsman', 'Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon']);
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом add игрока, не входящего в character', () => {
  const expected = [];
  const team = new Team();
  team.add('Посторонний персонаж');
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Добавление методом addAll игрока, не входящего в character', () => {
  const expected = [];
  const team = new Team();
  team.addAll(['Посторонний персонаж']);
  const received = team.toArray();
  expect(received).toEqual(expected);
});

test('Генерация ошибки при повторном вводе персонаж методом add', () => {
  const team = new Team();
  team.add('Bowman');
  expect(() => {
    team.add('Bowman');
  }).toThrow();
});
