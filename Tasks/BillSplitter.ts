import * as promptSync from 'prompt-sync';
const prompt = promptSync();
export function BillSplitter()
{
    console.log("---Welcome to Split My Bill---");
    let bill:number = parseFloat(prompt("What is the total bill?"));
    let people:number = parseInt(prompt("How many people are sharing?"));
    let tip_percentage:number = parseInt(prompt("What percentage tip would you like to leave?"));
    let TotalBill:number = (bill + (bill * (tip_percentage / 100)));
    let cost_per_person:number = TotalBill / people;
    console.log(`\nTotal bill including tip is ${TotalBill}\nTotal cost per person is ${cost_per_person}`);
}