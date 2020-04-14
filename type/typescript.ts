// const sum = (a: number, b: number) => {
//   return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = 'brown';
let favouriteQuote: string = `I'm not old I'm ${age}`;

// array
let pets: string[] = ['cat', 'dog'];
let pets2: Array<string> = ['lion', 'dragon'];

// object
let wizard: object = {
  a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string, number];
basket = ['basketball', 5];

// enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: number = Size.Small;

// any
let whatever: any = 'asdasdasd';
whatever = basket;

// void
let sing = (): void => {
  console.log('lalala');
}

// never
let error = (): never => {
  throw Error('oops');
}

// interface
interface RobotArmy {
  count: number,
  type: string,
  magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('fight');
}

let fightRobotArmy2 = (robots: {
  count: number,
  type: string,
  magic: string
}) => {
  console.log('fight');
}

// type assertion
interface CatArmy {
  count: number,
  type: string,
  magic: string
}

let dog = {} as CatArmy;
dog.count;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('fight');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
  console.log('fight');
  return 5;
}

// classes
class Animal {
  sing: string = 'lalala'
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `hello ${this.sing}`;
  }
}

let lion = new Animal('RAWWWR');
lion.greet();

// union
let confused: string | number | boolean = true;
