class Ninja {
  constructor(name, health = 10) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name} drank some sake.`);
    return this;
  }

  sayName() {
    console.log(`${this.name} yelled his name!`);
    return this;
  }

  showStats() {
    console.log(
      `${this.name} has ${this.health}, ${this.speed}, and ${this.strength}!`
    );
    return this;
  }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName().showStats().drinkSake();
console.log(ninja1);

// <------------------------------------------------------------------------------------------->

class Sensei extends Ninja {
  constructor(name, health = 200) {
    super(name, health);
    this.health = health;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    const message = ninjaSensei.drinkSake();
    console.log("Wisdom comes in waves or something.");
  }
}

// example output
const ninjaSensei = new Sensei("Genji");
ninjaSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
ninjaSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
