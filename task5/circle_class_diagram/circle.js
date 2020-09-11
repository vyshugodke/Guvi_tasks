class Circle {
    constructor(radius, diameter) {
        this.radius = radius;
        this.diameter = diameter;
    }

    getarea() {
        return ((22 / 7) * (this.radius * this.radius));

    }
}

let Circle2 = new Circle(5, 3);
console.log(Circle2.getarea());