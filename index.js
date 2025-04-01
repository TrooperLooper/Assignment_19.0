/*
// ------------------------ Uppgift 1 ---------------------------------


const target = Math.floor(Math.random() * 10)+1;
let guess = null;

guess = parseFloat(prompt("Gissa en siffra mellan 1 och 10!"));

while (guess !== target) {
        if (false) {
            console.log(`target : ${target} guess: ${guess}`);
        }
    guess = parseFloat(prompt("Gissa en siffra mellan 1 och 10!"));
        
     if(guess > target) {
        console.log("nej, lägre!");
        
    } else if (guess < target) {
        console.log("näpp, högre!");
    }
}

console.log(`Grattis! Nu gissade du rätt! Siffran var: ${target}`);           
  
// ------------------------ Uppgift 2 ---------------------------------




let a = []
for ( i = 0; i < 100; ++i) a[i] = i;

function randomizer () {
    console.log(Array.from({
        length: 10
    }, () => Math.floor(Math.random() * 100) +1 ));
}
randomizer ()


/*


// ------------------------ Uppgift 3 ---------------------------------



let arr [i]
      
function sumEvenNumbers (arr)% 2; {
    if arr (i % 2 {
        for ( i = 0; i < 10; ++i) a[i] = i;
    }

    while sumEvenNumbers är jämna, addera summa
´
}

return summa
   

--------------------
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
*/