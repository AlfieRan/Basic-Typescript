import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function TimesTable()
{
    let times_table = 5
    let answer = 0

    console.log(`Here is the ${times_table} times table`)
    for (let y=1; y<11; y++)
    {
        answer = y * times_table
        console.log(`${y} times ${times_table} is ${answer}`)
    }
}


export function BetterTimesTable()
{
    const first:number = parseInt(prompt("What is the first times table to print? "))
    const last:number = parseInt(prompt("What is the last times table to print? "))
    const how_far:number = parseInt(prompt("How far up the times table should each go ?"))

    let answer = 0

    for (let x = first; x <= last; x++)
    {
        console.log(`Here is the ${x} times table`)
        for (let y=1; y<=how_far; y++)
        {
            answer = y * x
            console.log(`${y} times ${x} is ${answer}`)
        }
    }
}
