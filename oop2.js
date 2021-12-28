class Car {
    _speed = 0;

    constructor(name, model, MaxSpeed, color, weigth, speed){
        this.name = name;
        this.model = model;
        this.MaxSpeed = MaxSpeed;
        this.color = color;
        this.weigth = weigth;
        this.speed = speed;
    }

    gas() {
        if (this._speed < this.MaxSpeed) {
            this._speed += this.speed;
            console.log(this._speed)
        }else{
            console.log("MAX SPEED! CHECK!")
        }
    }
}

const bmw = new Car("BMW", "E 38", 450, "BLACK", 2.5, 50);
console.log(bmw);

const lexus = new Car("Lexus", "IS 250", 350, "WHITE", 1.5, 20);
console.log(lexus);
lexus.gas();
