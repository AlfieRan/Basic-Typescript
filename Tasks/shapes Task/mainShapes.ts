import Circle from './circle';
import Shape from './shape';
import Square from './square';
import Triangle from './triangle';

export function runPogShape() {
  const shapes: Shape[] = [];
  shapes.push(new Square(4));
  shapes.push(new Triangle(2, 3));
  shapes.push(new Circle(6));

  shapes.forEach(shape => {
    console.log("Calculating Area of " + shape.name);

    const area = shape.calculateArea();
    console.log(area);
  });
}
