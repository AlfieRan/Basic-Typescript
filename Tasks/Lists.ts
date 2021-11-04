import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function PrintColours(){
    let colours:Array<string> = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    console.log('Printing Colours...')

    for (let i = 0; i < colours.length; i++){
        console.log(colours[i]);
    }

    console.log('Finished');
}

export function SimonSays(){
    let simon_says:Array<string> = ["Hands on head", "Hands on ears", "Right hand up", "Left hand up", "Hands on shoulders"]
    let Instruction = simon_says[parseInt(prompt(`Pick a number between 0 and ${(simon_says.length - 1)}: `))];
    console.log(`Simon Says... ${Instruction}`);
}