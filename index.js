

const target = Math.floor(Math.random()*10);
let guess = null;

while (guess !== target) {
    console.log(`target : ${target} Guess: ${guess}`);
guess = parseFloat(prompt("Gissa en siffra mellan 1 och 10!"));
} if ${guess} 

console.log("högre!");
console.log("lägre!");

if(guess === target)
console.log(`target : ${target} Guess: ${guess}`);
console.log("Slay!");




/*
// EXERCISE 1: Guess the random number 

Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low. 

 

 

// EXERCISE 2: Create an array of random numbers 

Create a function generateRandomArray that accepts one argument: length (the length of the array). 

Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

Return the array from the function. 

 

 

// EXERCISE 3: Calculate the sum of even numbers in the array 

Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array and calculate the sum of the even numbers. 

Return the sum of the even numbers. 
/*