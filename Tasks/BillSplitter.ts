import * as promptSync from 'prompt-sync';
const prompt = promptSync();
export function BillSplitter()
{
    console.log("---Welcome to Split My Bill---");
    let bill:number = parseFloat(prompt("What is the total bill?")); //Tried putting the console.log line above in this prompt but it did not like it
    let people:number = parseInt(prompt("How many people are sharing?"));
    let tip_percentage:number = parseInt(prompt("What percentage tip would you like to leave?"));
    let TotalBill:number = Math.round(100*(bill + (bill * (tip_percentage / 100))))/100; //multiplying then dividing by 100 is to round to 2 dp
    let cost_per_person:number = Math.round(TotalBill * 100 / people) / 100; //multiplying then dividing by 100 is to round to 2 dp
    console.log(`\nTotal bill including tip is ${TotalBill}\nTotal cost per person is ${cost_per_person}`);
}