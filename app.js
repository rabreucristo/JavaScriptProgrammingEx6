/*
    Author:Rafael Cristo
    Title: Working with arrays
    Date: 02/08/2022
*/
let cars = ['Wrangler','Forester','Tacoma','Land Cruiser','Defender'];

cars[5] = 'Tundra';
cars.push('Corolla');
cars.unshift('Miata');

cars[1] = 'Wrangler :)';
cars[9] = 'Bronco';

let makes = new Array('Jeep','Subaru','Land Rover','Toyota');
makes.push('Lada'); //Add
makes.unshift('Kia');//Insert an element at the beginning.

let myArray = [];

myArray.push('Trudy');
myArray.push('Miguel');
myArray.unshift('Chris');
myArray.shift();
myArray.pop();

console.log(myArray,makes);

let add ='y';

let numbers = [];

while(add == 'y'){
    let number = prompt('Add a number to the number arrays',0)

    //validate
    if(!isNaN(number))
        numbers.push(parseFloat(number));

    add = prompt(`Continue adding numbers?`,'y');

    
}