let playerName = "Mario";
let currentLives = 3;
const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

// Tính tổng coin
let totalCoins = level1Coins + level2Coins + level3Coins;
console.log(totalCoins);

// Tính trung bình coin
let averageCoins = totalCoins / 3;
console.log(averageCoins);

const coinsBasedLevel = [
    {"Level 1": 25},
    {"Level 2": 30},
    {"Level 3": 45}
]
coinsBasedLevel.forEach(function(value) {

console.log(value);

});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {

console.log(value);

});