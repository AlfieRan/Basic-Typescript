// If you're on MacOS just type 'bash execute.bash' to compile and run this script

import * as promptSync from 'prompt-sync';
const prompt = promptSync();

import { circleRadius } from './Tasks/VarsAndStrings';
import { Sentance } from './Tasks/VarsAndStrings';
import { FaceBookDataCollection } from './Tasks/UserInput';
import { ChatBot } from './Tasks/FlowChart';
import { BillSplitter} from './Tasks/BillSplitter'
import { GuessAnimal } from './Tasks/selection'
import { GuessTheVeg } from './Tasks/selection'
import { TimesTable } from './Tasks/finiteIteration'
import { BetterTimesTable } from './Tasks/finiteIteration';
import { NumberGuessing } from './Tasks/controlledIteration';

// Depending on which of these are true is which ones run/don't run
const Tasks: Array<VoidFunction> = [circleRadius, Sentance, FaceBookDataCollection, ChatBot, BillSplitter, GuessAnimal, GuessTheVeg, TimesTable, BetterTimesTable, NumberGuessing];
const TaskName: Array<string> = ["Using Pi to find a radius Task", "random sentence task", "Task: collect user data", "Task: bad chatbot", "Bill splitter", "Animal Guessing game", "vegetable guessing game", "times table program", "user input times tables", "Number Guessing Game"]
const Runtasks: Array<boolean> = [false,false,false,false,false,false,false,false,false,true];

for (let i=0; i<(Tasks.length+1); i++)
{
    if (Runtasks[i] == true)
    {
        console.log("\n---------------Running: ", TaskName[i],"--------------------\n");
        Tasks[i]();
    }
}
console.log("\n---------PROGRAM ENDED---------\n");