let playerName = "Mario";
let currentLives = 3;
const level1Coins = 25;
const level2Coins = 30;
const level3Coins = 45;

// Tính tổng coin
const totalCoins = level1Coins + level2Coins + level3Coins;
console.log(totalCoins);

// Tính trung bình coin
const averageCoins = totalCoins / 3;
console.log(averageCoins);

// Cách 2: Dùng hàm reduce trong Array Utils mở rộng
// Giải thích: Ban đâu em đã có ý tưởng gom vào 1 object array, nhưng mỗi item e lại viết là
// const coinsBasedLevel = [
// {"Level 1": 25},
// {"Level 2": 30},
// {"Level 3": 45}
// ]
// Nhưng nhận ra nó không có 1 biến chung để gán và lặp => mãi mới nghĩ ra kiểu khai báo khác ^^

const coinsBasedLevel = [
    { Level: 1, coin: 25 },
    { Level: 2, coin: 30 },
    { Level: 3, coin: 45 },
]
const totalCoins2 = coinsBasedLevel.reduce((total, level) => total + level.coin, 0);
console.log(totalCoins2);

const averageCoins2 = totalCoins2 / coinsBasedLevel.length;
console.log(averageCoins2);