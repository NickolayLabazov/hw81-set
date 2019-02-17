export default class Team {
  constructor() {
    this.character = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    this.set = new Set([]);
  }

  add(hero) {
    if (this.character.indexOf(hero) >= 0) {
      if (this.set.has(hero)) { throw ('Персонаж уже добавлен'); }
      if (this.set.size < 5) {
        this.set.add(hero);
      }
    }
  }

  addAll(...theArgs) {
    for (const elem of theArgs[0]) {
      if (this.character.indexOf(elem) >= 0) {
        if (this.set.size < 5) {
          this.set.add(elem);
        }
      }
    }
  }

  toArray() {
    const arraySet = [];
    for (const elem of this.set) {
      arraySet.push(elem);
    }
    return arraySet;
  }
}
