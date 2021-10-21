abstract class Shape {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract calculateArea(): number;
  }
  
  export default Shape;
  
  