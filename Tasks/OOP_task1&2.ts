// In TypeScript, we can define what we expect
// objects to look like. What properties should they have?
interface Person {
    name: string;
    age: number;
    themetune?: string;
}


export function OOPTask1() {
    // Create a single person
    const person1: Person = {
        name: "Bob",
        age: 56
    }
    // Print that person to the console
    console.log(person1);
    
    const person2: Person = {
        name: "Alice",
        age: 34
    }
    console.log(person2);
    
    // TASK: Add another person
    // TASK: Add another property,
    // and make sure all the instances have that new property

    const JefferyBezos: Person = {
        name: 'Jeffery Bezos',
        age: 57,
        themetune: "CEO, entrepreneur\nBorn in 1964\nJeffrey, Jeffrey Bezos\nCEO, entrepreneur\nBorn in 1964\nJeffrey, Jeffrey Bezos\nC'mon Jeffrey, you can do it\nPave the way, put your back into it\nTell us why, show us how\nLook at where you came from, look at you now\nZuckerberg and Gates and Buffett\nAmateurs can be sad\nBe nice to their wives, drink their blood\nC'mon Jeff, get 'em!\nAah!\n\n***PGified for use in a formal setting***"
    }

    console.log(JefferyBezos);
}