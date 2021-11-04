import compoundInterest from './compound';

// Constants are usually defined with ALL CAPS
// It makes them stand out
const INTEREST_RATE = 0.1;

class Bankacc {
  // TASK 1 - add the name
  // These are the attributes of a bank account
  accnumber: string;
  balance: number;
  name: string;

  // TASK 1 - the name will need passing in
  // This is a special method called when creating a new bank account
	constructor(accnumber: string, balance: number, name:string){
		this.accnumber = accnumber;
		this.balance = balance;
        this.name = name;
	};

  // This is used to increase the balance of this account, by the amount passed in
	deposit(amount: number) {
		this.balance += amount;
	};

  // Task 2 - add the withdraw method

    withdraw(amount:number){
        this.balance -= amount;
    }

  // Task 3 - Complete this function
  // It will need to call the compoundInterest function
  // It should pass a 'time' value of 1 to the interest function
  // It should use this.balance
	addInterest(time:number = 1) {
		this.balance = compoundInterest(this.balance, INTEREST_RATE, time);
	};

	toString() {
		return "Account: " + this.accnumber + "  Balance: £" + this.balance.toFixed(2);
	};
}

class CurrentAccount extends Bankacc {
    overdraft: number;

    constructor(ccnumber: string, balance: number, name:string, overdraft:number){
        super(ccnumber, balance, name);
        this.overdraft = overdraft;
    }
}

// Task 7 - Create a subclass (extends) called CurrentAccount

// Task 4 - Create a new bank account
// Task 5 - Call deposit
// Task 6 - Call withdraw

// Task 8 - Create a new current account
// Task 9 - call toString on the current account and print the value
// Task 10 - Call various functions on the Current Account to check that it
// correctly extends Account
export function TestIntrest(){
    // This shows you how to call the compoundInterest function
    let myInterest = compoundInterest(100, INTEREST_RATE, 4);

    // Print something, just so you know that the program has run
    console.log('Interest calculated', myInterest);
}

export function RunTask(){
    let Bank:Bankacc = new Bankacc("10842378", 203197784163, "Jeffery Bezos");
    Bank.deposit(1000);
    Bank.withdraw(800);

    let curAcc:CurrentAccount = new CurrentAccount("10842378", 638725, "Mark Zuckerberg", 500);
    console.log(curAcc.toString());

    console.log("\nLet the testing being.....");
    curAcc.addInterest();
    curAcc.withdraw((curAcc.balance + 1));
    console.log(curAcc.toString());
    curAcc.deposit(420);
    curAcc.addInterest(3927);
    console.log(curAcc.toString());
}

