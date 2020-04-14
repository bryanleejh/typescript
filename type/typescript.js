// const sum = (a: number, b: number) => {
//   return a + b;
// }
// const answer = sum(4, 5);
// console.log(answer);
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old I'm " + age;
// array
var pets = ['cat', 'dog'];
var pets2 = ['lion', 'dragon'];
// object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// any
var whatever = 'asdasdasd';
whatever = basket;
// void
var sing = function () {
    console.log('lalala');
};
// never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('fight');
};
var fightRobotArmy2 = function (robots) {
    console.log('fight');
};
