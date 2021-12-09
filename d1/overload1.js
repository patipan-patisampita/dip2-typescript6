class Car {
    static drive(speed, target) {
        if (target) {
            const arr = [];
            for (let i = speed; i <= target; i++) {
                arr.push(i);
            }
            return arr;
        }
        return `Car is driving with ${speed} km/h.`;
    }
}
let car1 = Car.drive(1, 2);
console.log(car1);
