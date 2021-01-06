
"use strict";

/* 

---Destructuring is basically a way of unpacking values from an array or an object into separate variables, so in other words destructuring is to break a complex data structure down ito a smaller data structure like a variable. 

---For arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

 ---To store elements from an array into variables without destructuring: 

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

 ---To store elements from array into variables using destructuring: 

 const arr = [7, 8, 9];

const[a, b, c] = arr;
console.log(a, b, c);

---Important: when we use destructuring the original array is not affected. 

*/

/*

const restaurant = {
    name : "Tapas and more tapas",
    location : "buelowstr 45, Berlin",
    categories : ["spanish", "paella", "tapas", "sangria"],
    starterMenu : ["tapas", "bread", "salad", "beverage"],
    mainMenu : ["paella", "tortilla", "sangria"]
};

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//In case we want to switch main and secondary without destructuring: 



const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


//To switch values using destructuring: 
[main, secondary] = [secondary, main];
console.log(main, secondary);

//with destructuring we can have a function that return an array and then we can immediatley destruct the result: 

const restaurant = {
    name : "Tapas and more tapas",
    location : "buelowstr 45, Berlin",
    categories : ["spanish", "paella", "tapas", "sangria"],
    starterMenu : ["tapas", "bread", "salad", "beverage"],
    mainMenu : ["paella", "tortilla", "sangria"],

    order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

*********************NESTED ARRAYS*********

const nested = [2, 4, [5, 6]];
const [a, b, c] = nested;
console.log(a, b, c);

//If we want to escape the 4: 

const [a, ,b] = nested;

//If we want to retrieve all the individual elements we have to do destructuring inside destructuring: 

const nested = [2, 4, [5, 6]];

const [a, b ,[c, d]] = nested;
console.log(a, b, c, d);

---We can set default values for the variables when we are destructuring them, it is really useful if we dont know the length of the array: 

const [a = 1, b = 1, c = 1] = [8, 9];
console.log(a, b, c);


*/


























