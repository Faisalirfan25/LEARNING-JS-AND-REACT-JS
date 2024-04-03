/*

let fruits = ['red','orange','yellow'] //and array of fruits
fruits[2]= 'green' //chnaging content of array 
let lottoNumbers = [1,2,3,4,5,6]
 let random = fruits.length //accesssing array length
 let r = lottoNumbers.length
 let n= fruits[2] // seeing whats in index 2


 console.log(random)
 console.log(r)
console.log(n)

*/

//PUSH , POP , SHIFT , UNSHIFT

/*let movieLine = ['tom', 'nancy']
movieLine.push('oliver')
console.log(movieLine)

movieLine.pop()
console.log(movieLine)

movieLine.push('faisal','ali')
console.log(movieLine)

movieLine.shift('tom')
console.log(movieLine)

movieLine.unshift('tom')
console.log(movieLine)
*/

// CONCAT , INCLUDE , REVERSE

/*let cats = ['blue ', 'kitty']
let dogs = ['rusty', 'wyatt']
let combo = cats.concat(dogs)
console.log(combo)


cats.includes('Blue')


combo.reverse()
console.log(combo)
*/

// SLICE AND SLPLICE

let colors =['red', 'orange','yellow','green','blue','indigo','violet']
newcolor = colors.slice(1,3)
console.log(newcolor)

let colors2 =['red', 'orange','yellow','green','blue','indigo','violet']
colors2.splice(2,4)
console.log(colors2)


// SORT 

let numbers = [1, 2 ,4 ,77,55,43,345,5643]
numbers.sort()
console.log(numbers)