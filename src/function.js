export default class Team {
  constructor() {
    this.character = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    this.set = new Set([]);
  }

  add(hero) {
    if (this.set.has(hero)) { throw ('Персонаж уже добавлен'); }
    if (this.set.size < 5) {
      this.set.add(hero);
    }
  }

  addAll(...theArgs) {
    for (const elem of theArgs[0]) {
      if (this.set.size < 5) {
        this.set.add(elem);
      }
    }
  }

  toArray() {
    const arSet = Array.from(this.set);
    return arSet;
  }
}
