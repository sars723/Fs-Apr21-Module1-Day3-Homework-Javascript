    /*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

      /* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let firstPostiveNumbers = [1, 2, 3, 4, 5];

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
let firstPerson = {
  name: "sara",
  surname: "salomon",
  email: "sara@gamil.com",
  age: 27,
};

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
console.log(" ")
console.log("exercise 3 add hasdrivingLicense")
console.log("------------------")


firstPerson.hasDrivingLicense = true;
console.log(firstPerson);


/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Remove from the previously created object the age property.
*/
console.log(" ")
console.log("exercise 4 remove age")
console.log("------------------")


delete firstPerson.age;
console.log(firstPerson);


/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log(" ")
console.log("exercise 5 add second object and vertify their email address diffrent or not")
console.log("------------------")


let secondPerson = {
  name: "elias",
  surname: "Girma",
  email: "elias@gmail.com",
};
console.log(secondPerson);
console.log(firstPerson.email === secondPerson.email);

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
console.log(" ")
console.log("exercise 6 check customer eligible for freeshipping")
console.log("------------------")


let totalShoppingCart = 40;
if (totalShoppingCart > 50) {
  console.log("eligible for free shipping");
} else {
  console.log("not eligibele for free shipping");
  totalShoppingCart += 10;
}
console.log(totalShoppingCart);

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log(" ")
console.log("exercise 7 black friday")
console.log("------------------")


if (totalShoppingCart > 50) {
  console.log(
    "eligible for free shipping and 20% black friday disccount"
  );
  totalShoppingCart *= 0.8;
} else {
  console.log(
    "not eligibele for free shipping but you have 20% black friday disscount"
  );
  totalShoppingCart = totalShoppingCart * 0.8 + 10;
}
console.log(totalShoppingCart);

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
console.log(" ")
console.log("exercise 8 clone and object")
console.log("------------------")


let firstCar = {
  brand: "Audi",
  model: "Audi Q7",
  licensePlate: "an-y209",
};
let secondCar = {},
  thirdCar = {},
  fourthCar = {},
  fifthCar = {},
  sixthCar = {};
Object.assign(secondCar, firstCar);
Object.assign(thirdCar, firstCar);
Object.assign(fourthCar, firstCar);
Object.assign(fifthCar, firstCar);
Object.assign(sixthCar, firstCar);

secondCar.licensePlate="nu-x444"
thirdCar.licensePlate="wi-v678"
fourthCar.licensePlate="gh-234"
fifthCar.licensePlate="fr-894"
sixthCar.licensePlate="bn-009"

console.log(sixthCar.licensePlate);

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
console.log(" ")
console.log("exercise 9 new array carsForRent")
console.log("------------------")


let carsForRent = [
  firstCar,
  secondCar,
  thirdCar,
  fourthCar,
  fifthCar,
  sixthCar,
];
console.log(carsForRent)

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.

*/
console.log(" ")
console.log("exercise 10 remove first and last car from carsForRent")
console.log("------------------")


carsForRent.pop()
carsForRent.shift()
console.log(carsForRent)

/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log(" ")
console.log("exercise 11 print properties of the car object")
console.log("------------------")


console.log(firstCar.brand)
console.log(firstCar.model)
console.log(firstCar.licensePlate)

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
console.log(" ")
console.log("exercise 12 new array carsForSale with 3 cars inside")
console.log("------------------")


let carsForSale=[
    {brand:"seat", model:"ateca",licensePlate:"sd-222"},
    {brand:"seat", model:"leon",licensePlate:"sd-444"},
    {brand:"seat", model:"ateca",licensePlate:"sd-888"}
]
let totalCars=carsForSale.length+carsForRent.length
console.log(totalCars)

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(" ")
console.log("exercise 13 print data from carsForSale array")
console.log("------------------")


for(i=0;i<carsForSale.length;i++){
    console.log(carsForSale[i].brand +" "+carsForSale[i].model+ " " +carsForSale[i].licensePlate)
}

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/



/*Extra
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

console.log(" ")
console.log("exercise 1 revert an array")
console.log("------------------")


let array=[1,3,5,6,8]
let revertedArray=[]
let j=0
for(let i=array.length-1;i>=0;i--)
{
    
    revertedArray[j]=array[i]
    j++
    
}
console.log(revertedArray)

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(" ")
console.log("exercise 2 maximum value of an array")
console.log("------------------")

let max=array[0]
for(let i=0;i<array.length;i++)
{
    if(array[i]<array[i+1])
    {
        max=array[i+1]
    }
}
console.log("max="+max)

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(" ")
console.log("exercise 3 minimum value of an array")
console.log("------------------")

let min=array[0]
for(let i=0;i<array.length;i++)
{
    if(array[i]>array[i+1])
    {
        min=array[i+1]
    }
}
console.log("min="+min)

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/


console.log(" ")
console.log("exercise 4 gets only even values")
console.log("------------------")

let evenNumbersArray=[]
j=0

for(let i=0;i<array.length;i++)
{
    if(array[i]%2===0)
    {
        evenNumbersArray[j]=array[i]
        j++
    }
}
console.log(evenNumbersArray)


/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

console.log(" ")
console.log("exercise 5 delete even values")
console.log("------------------")


for(let i=0;i<array.length;i++)
{
    if(array[i]%2===0)
    {
        array.splice(i,1)
        /* delete array[i] */
    }
}
console.log(array)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

console.log(" ")
console.log("exercise 6 remove all vowels from a string")
console.log("------------------")

let string="hello"
let arrString=[]
arrString=string.split("")
console.log(arrString)

for(let i=0;i<array.length;i++)
{
    if(arrString[i]==="a" || arrString[i]==="e" || arrString[i]==="i" ||arrString[i]==="o"|| arrString[i]==="u" )
    {
        /* delete arrString[i] */
        arrString.splice(i,1)
    }
}
console.log(arrString)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.

*/

console.log(" ")
console.log("exercise 7 increase all value of an array by 1")
console.log("------------------")


for(let i=0;i<array.length;i++)
{
   array[i]+=1
}
console.log(array)

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log(" ")
console.log("exercise 8 length of each string in an array")
console.log("------------------")


let newArray=["strive", "is", "great"]
let lengthOfEachString=[]

for(let i=0;i<newArray.length;i++)
{
    lengthOfEachString[i]=newArray[i].length
}
console.log(lengthOfEachString)

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/