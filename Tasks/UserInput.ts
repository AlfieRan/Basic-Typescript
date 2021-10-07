import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function FaceBookDataCollection()
{
    let FirstInitial: string = prompt("Type in the initial of your first name: ");
    let Surname: string = prompt("Type in your surname: ");
    let Age: number = parseFloat(prompt("What is your age? "));
    let TempMarm: string = prompt("Do you like Marmite?").toLowerCase();
    let Marmatian: boolean = false;
    if (TempMarm == "y" || TempMarm == "yes")
    {
        Marmatian = true;
    }

    let Decades: number = Age / 10;

    let message: string = `\nHello ${FirstInitial}, ${Surname},\nIt is ${Marmatian} that you like Marmite.\nThis is probably because you are ${Decades} decades old.`;
    console.log(message);
}
