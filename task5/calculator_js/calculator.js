class calculator {
    constructor(a, b) {

        this.a = a;
        this.b = b;

    }
    add() {

        return this.a + this.b
    }
    sub() {

        return this.a - this.b
    }
    mult() {

        return this.a * this.b
    }
    div() {

        return this.a / this.b
    }
}

let calci = new calculator(4, 2)
console.log(calci.add());
console.log(calci.sub());
console.log(calci.mult());
console.log(calci.div());