import * as promptSync from 'prompt-sync';
const prompt = promptSync();

import { circleRadius } from './Tasks/VarsAndStrings';
import { Sentance } from './Tasks/VarsAndStrings';
import { FaceBookDataCollection } from './Tasks/UserInput';

console.log("----------Task 1----------");
circleRadius(); // The pi task
Sentance(); // The silly sentences task
console.log("----------Task 2----------");
FaceBookDataCollection(); // The user input (marmite, decades old etc) task
console.log("---------PROGRAM ENDED---------");