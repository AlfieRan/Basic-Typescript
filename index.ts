import * as promptSync from 'prompt-sync';
const prompt = promptSync();

import { circleRadius } from './Tasks/VarsAndStrings';
import { Sentance } from './Tasks/VarsAndStrings';
import { FaceBookDataCollection } from './Tasks/UserInput';
import { ChatBot } from './Tasks/FlowChart';

const RunTask1: boolean = false;
const RunTask2: boolean = false;
const RunTask3: boolean = true;
const RunTask4: boolean = true;

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
console.log("---------PROGRAM ENDED---------");