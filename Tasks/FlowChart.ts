import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function ChatBot()
{
    console.log("Hello my name is Susan from Space.");
    let Name: string = prompt("What is your name?")
    console.log(`Hello ${Name}, I am from the year 2210 and I am 20 years old.`);
    let Age: number = parseFloat(prompt("How old are you?"));
    let FutureAge: number = Age + (2210 - 2020);
    console.log(`Wow by 2210 you while be ${FutureAge}, that is really old!`);
    let Music: string = prompt("What music are you into?");
    console.log(`I've not heard of ${Music}`);
}