export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of the same class (using constructor)
    // This ensures that subclasses return instances of the subclass
    const Species = this.constructor;
    return new Species();
  }
}
