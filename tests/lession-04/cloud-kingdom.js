let powerUp = "star";
let effect = " ";
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireball";
} else if (powerUp === "star") {
    effect = "Mario is invicible";
} else {
    effect = "Mario is normal";
}
console.log(effect);