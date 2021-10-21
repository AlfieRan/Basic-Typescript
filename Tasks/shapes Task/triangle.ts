import Shape from './shape';

class Triangle extends Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return this.base * this.height / 2;
  }
}

export default Triangle;