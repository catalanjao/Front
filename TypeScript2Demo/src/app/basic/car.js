class Car {
    constructor(engine) {
        this._engine = engine;
    }
    starEngine() {
        alert(`Start engine ${this._engine}`);
    }
    stopEngine() {
        alert(`Stop engine ${this._engine}`);
    }
}
window.onload = function () {
    var car = new Car('V8');
    car.starEngine();
    car.stopEngine();
};
