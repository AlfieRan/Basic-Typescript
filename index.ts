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

// Depending on which of these are true is which ones run/don't run
const RunTask1: boolean = false;    //Variables and Strings Tasks
const RunTask2: boolean = false;    //UserInput tasks
const RunTask3: boolean = false;    //FlowChart Task
const RunTask4: boolean = false;     //BillSplitter Task (Maths)
const RunTask5: boolean = false;     //Guess the Animal (Selection)
const RunTask6: boolean = true;     //Guess the Veg (Selection)

if (RunTask1)
{
    console.log("----------Task 1----------");
    circleRadius(); // The pi task
    Sentance(); // The silly sentences task
}
if (RunTask2)
{
    console.log("----------Task 2----------");
    FaceBookDataCollection(); // The user input (marmite, decades old etc) task
}
if (RunTask3)
{
    console.log("----------Task 3----------");
    ChatBot();
}
if (RunTask4)
{
    console.log("----------Task 4----------");
    BillSplitter();
}
if (RunTask5)
{
    console.log("----------Task 5----------");
    GuessAnimal();
}
if (RunTask6)
{
    console.log("----------Task 6----------");
   GuessTheVeg();
}
console.log("---------PROGRAM ENDED---------");