// Bài 1:
function createCharacters() {
    const characters = [
        { name: "Mario", level: 1, health: 500 },
        { name: "Luigi", level: 2, health: 1200 },
        { name: "Peach", level: 3, health: 1500 }
    ];
    return characters;
}
// vì biến characters nằm trong cặp ngoặc nhọn của function => không tồn tại bên ngoài cặp ngoặc nhọn, nên phải gọi gọi hàm ra:
const characters = createCharacters();
const charactersPowerUp = characters.map((characters => ({
    name: characters.name.toUpperCase(),
    level: characters.level * 2,
    health: characters.health * 3
})));
console.log(charactersPowerUp);
// filter ra mảng có các character có health > 1000
const possibleWinners = characters.filter(characters => characters.health > 1000);
console.log(possibleWinners);

// Bài 2:
function printLeaderboard() {
    const player = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 900 },
        { name: "Peach", score: 1500 },
        { name: "Yoshi", score: 850 },
        { name: "Phong", score: 500 }
    ];
    return player;
}
const leaderboard = printLeaderboard();
leaderboard.sort((a, b) => b - a);
console.log(leaderboard); // chịu, in ra được rồi mà sort chưa đúng :(
// Vụ thêm icon huy chương cũng bó tay ạ.

