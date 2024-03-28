// given an array of asteroids and mass that represents the mass of the current planet, return if you can destroy all asteroids, if the asteroid is smaller than the planets current mass, the planet will destory it and consume its mass, if the planet is smaller, the planet will get destoryed -> false 
// greedily decide, 
// sort asteroid array, consume smaller asteroids, if we hit a bigger asteroid than current mass, return false 
/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
const asteroids = [3, 9, 19, 5, 21];
const mass = 10; 
const destroyAsteroid = (asteroids, mass) => {
    const sorted = asteroids.sort((a, b) => a - b);
    let ans = true;
    for (let asteroid of sorted) {
        if (asteroid > mass) return ans = false; 
        mass += asteroid;
    }
    console.log(ans);
}

destroyAsteroid(asteroids, mass); 