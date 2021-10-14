import * as promptSync from 'prompt-sync'; const prompt = promptSync();
export function NumberGuessing()
{
    let number:number = GetRandInt(1, 10);
    let guess:number = parseInt(prompt("Guess a number between 1 and 10 (inclusive): "));
    while (guess != number){

        console.log("Incorrect!");
        guess = parseInt(prompt("Guess a number between 1 and 10: "));
    }  
    console.log("Correct!");
}
function GetRandInt(min:number, max:number){
    return Math.floor(Math.random() * (max - min + 1) + min);
}