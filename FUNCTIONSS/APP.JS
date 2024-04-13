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