import Shape from './shape';

class Square extends Shape {
  side_length: number;

  constructor(side_length: number) {
    super("Square");

    this.side_length = side_length;
  }

  calculateArea(): number {
    return this.side_length ** 2;
  }
}

export default Square;