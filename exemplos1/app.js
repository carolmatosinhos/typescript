var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 6;
console.log("Is ".concat(distance, " parsecs enough to beat Millennium Falcon? ").concat(isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, ".concat(name, "?")); };
call('R2');
