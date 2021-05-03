//Fibonacci Calculator ver1.3

//For user inputs
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }); 

//Fibonacci Sequence function
function fibo(number) {
    limit = number;
    i = 1;
    a = 0;
    b = 1;
    c = 0;
    if (number==0){
        console.log(`\nThe Fibonacci sequence for 0 is:`);
        console.log(`F(0) = 0\n`);
    }

    else if (number==1){
        console.log(`\nThe Fibonacci sequence for 1 is:`);
        console.log(`F(1) = 1\n`);
    }

    else{
        while (i<limit){
        c = b;
        b = a+b;
        a = c;
        i++;
        }
        console.log(`\nThe Fibonacci sequence for ${number} is:`);
        console.log(`F(${number}) = ${b}\n`);
    }    
}

// Main code

rl.question('\nPlease enter a number: \n', (answer) => {
    //If the input is invalid
    if (isNaN(answer)) {
        console.log('\nInvalid input, please try again\n');
        rl.close();
    }
    //For fibonacci valid inputs
    else{
        fibo(answer);
        rl.close();
        }
});

//Coded by: Ignacio Inostroza Brignardello