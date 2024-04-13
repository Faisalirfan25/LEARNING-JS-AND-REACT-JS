/*function grumpus(){
    console.log("hehehheeheheh")
}

grumpus();
grumpus();grumpus();

*//*
function greet(firstName){
    console.log(`firstname is, ${firstName}!`)
}
greet('Faisal')

function random(Math){
    console.log(`the value of PI is: ${Math}!`)
    
}
random(Math.PI)

*/


//DOUBLE ARGUMENTS

/*
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes(1, 2); 
*/

//RETURN KEYWORD

 function add(x,y){
    if ( typeof x !== 'number' || typeof y !== ' number'){
        return false;
    }
    return x+y
 }
 console.log(add(1,1))





 let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(dayNum) {
    // Check if the dayNum is outside the range of 1 to 7
    if (dayNum < 1 || dayNum > 7) {
        console.log("Enter a valid day number");
        return null; // Return null to indicate an invalid input
    }
    // Return the corresponding day from the array
    // Subtract 1 because array indices start at 0
    return days[dayNum - 1];
}

// Test the function
console.log(returnDay(1)); // Monday
console.log(returnDay(7)); // Sunday
console.log(returnDay(0)); // Enter a valid day number
console.log(returnDay(8)); // Enter a valid day number



function sumArray(arr) {
    // Variable to keep track of the total sum
    let total = 0;
    
    // Loop over the array and add each element to the total
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    
    // Return the total sum
    return total;
  }
  
  // Test the function
  console.log(sumArray([1, 2, 3]));       // 6
  console.log(sumArray([2, 2, 2, 2]));    // 8
  console.log(sumArray([50, 50, 1]));     // 101
  