
// ------------------------ Uppgift 1 ---------------------------------
/*
guessNumberGame()

function guessNumberGame() {
    const target = Math.floor(Math.random() * 10)+1;

while (true) { 
    let guess = parseFloat(prompt("Gissa en siffra mellan 1 och 10!"));

     if(guess > target) {
        guess = parseFloat(prompt("nej, lägre! Gissa igen"))
        
    } else if (guess < target) {
        guess = parseFloat(prompt("näpp, högre! Gissa igen"))
    }
    else if (guess == target) {
            alert(`Grattis! Nu gissade du rätt! Siffran var: ${target}`);
            break;
        //stops the code      
         }
        

    
    }
}
*/

    
// ------------------------ Uppgift 2 ---------------------------------

/* 


function generateRandomArray(length) {
const result = [];

      for (let i =0; i < length; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;

        result.push(randomNumbers);
    } 
    return result;
}

const myArray = generateRandomArray(10);
console.log(myArray);



   // ------------------------ Uppgift 3 ---------------------------------


Calculate the sum of even numbers in the array 

Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array and calculate the sum of the even numbers. 

Return the sum of the even numbers. 

}
}




let sum = 0;

const numbers = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
const evenSum = sumEvenNumbers(numbers);

function sumEvenNumbers(arr) { 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log("Sum of the even numbers:", evenSum); 


*/