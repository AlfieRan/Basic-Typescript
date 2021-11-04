// With thanks to/
// https://www.geeksforgeeks.org/program-find-compound-interest/

const compoundInterest = function(principle: number, rate: number, time: number): number {
    let amount = principle * (Math.pow((1 + rate / 100), time));
    let interest = amount - principle;
    return interest;
  }
  
  export default compoundInterest;
  
  
  