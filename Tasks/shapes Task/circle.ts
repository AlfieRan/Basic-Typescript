import Shape from './shape';
import { Pi } from '../VarsAndStrings'

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super("Circle");

    this.radius = radius;
  }

  calculateArea(): number {
    return (this.radius ** 2) * Pi;
  }
}

export default Circle;