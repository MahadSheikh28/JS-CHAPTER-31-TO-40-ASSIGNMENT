//Chapter 31 - 34 (Date & Time)
//1. Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand

var dObj = new Date();
console.log(dObj);

//2. Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand;
var dObj = new Date();
var dStr = dObj.toISOString();
console.log(dStr);

//3. Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.

var d = new Date();
var day = d.getDay();
console.log(day);

//4. The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index

var d = new Date();
var day = d.getDay();

var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
alert(dayNames[day]);

//5. Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(seconds);

//6. Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand

var later = new Date(2020, 11, 31);
console.log(later);

//7. Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand

var myDate = new Date(1992, 1, 2);
console.log(myDate);

//8. Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980

alert(new Date(1980, 0, 1).getTime());

//9. How do you change the year of a date in JavaScript?

var myDate = new Date();
myDate.setFullYear(2023);
console.log(myDate);

//10. Write a JavaScript function to change the month of a given date to January.

function changeMonthToJanuary(date) {
  return new Date(date.getFullYear(), 0, date.getDate());
}

const date = new Date("2023-12-31");
const newDate = changeMonthToJanuary(date);
console.log(newDate);

//11. What is the method to change the day of the week for a specific date in JavaScript?

const date = new Date("2023-12-31");
date.setDate(date.getDate() + (1 - date.getDay()));
console.log(date);

//12. Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)

function changeMinutes(time, newMinutes) {
  var newTime = new Date(time);
  newTime.setMinutes(newMinutes);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = changeMinutes(time, 30);
console.log(newTime);

//13. Write a JavaScript function to add a specific number of hours to a given time.

function addHours(time, hours) {
  var newTime = new Date(time);
  newTime.setHours(newTime.getHours() + hours);
  return newTime;
}

var time = "2024-01-03T22:45:54.000Z";
var newTime = addHours(time, 3);
console.log(newTime);




//Chapter 35 - 37 (Functions)

// 1. Code the first line of a function displayAlert.

function displayAlert() {
  alert("This is an alert message");
}

//2. Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.

function askName() {
  var userName = prompt("Enter name:");
  console.log(userName);
}
askName();

//3. Code a function that calls 2 other functions

function firstFunction() {
  console.log("first");
}

function secondFunction() {
  console.log("second");
}

function callTwoFunctions() {
  firstFunction();
  secondFunction();
}
callTwoFunctions();

//4. Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.

function displayName() {
  var userName = prompt("Enter name:");
  alert(userName);
}
displayName();

//5. Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.

function concat(a, b, c, variable, string, number) {
  
  var abc = a + b + c;
  var result = abc + variable + string + number;

  return result;
}
var result = concat("a", "b", "c", "Hello", "world", 12);

alert(result);

//6. Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.

function concat(para1, para2) {
  var result = para1 + para2;
  console.log(result);
}
concat("Hello", " World");

//7. Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.

function multiply(para1, para2, para3) {
  var result = para1 * para2 * para3;
  console.log(result);
}
multiply(2, 3, 4);

//8. Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  var sum = numbers.reduce((acc, num) => acc + num, 0);
  var average = sum / numbers.length;

  return average;
}
var numbersArray = [10, 20, 30, 40, 50];
var result = average(numbersArray);
console.log(result);

//9. Write a JavaScript function that takes two parameters and returns their sum

function addNumbers(a, b) {
  return a + b;
}
var result = addNumbers(3, 2);
console.log(result);

//10. Write a JavaScript function that takes an array of numbers as input and returns the average of those number

function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  var average = sum / numbers.length;

  return average;
}

var numbersArray = [10, 20, 30, 40, 50];
var result = average(numbersArray);
console.log(result);

//11. You have to capture the returned value from a function and store it in a variable?

function square(number) {
  return number * number;
}
var squaredValue = square(7);

console.log(squaredValue);

//12. Write a function which tells letter counts of (word).

function countLetters(word) {
  var letterCount = {};
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

var word = "hello";
var letterCount = countLetters(word);
console.log(`Letter count of ${word}:`, letterCount); 

//13. Write a function to set (year) in date object.

function setYear(year) {
  
  var dateObject = new Date();
  dateObject.setFullYear(year);

  return dateObject;
}
var desiredYear = 2020;
var resultDate = setYear(desiredYear);
console.log(resultDate);

//14. Write a function which tells the age of a person who Born on (dateOfBirth)

function calculateAge(dateOfBirth) {
  
  var birthDate = new Date(dateOfBirth);

  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

var dateOfBirth = "2008-01-165"; 
var resultAge = calculateAge(dateOfBirth);
console.log(resultAge);

//15. Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] result should be in true or false

function checkPresence(word, array) {
  
  var lowercaseArray = array.map((item) => item.toLowerCase());

  return lowercaseArray.includes(word.toLowerCase());
}
var namesArray = ["zaid","haris","raza","abubakar","hassan","hussain","fatima",];
var searchWord = "hassan";

var result = checkPresence(searchWord, namesArray);
console.log("Is", searchWord, "present?", result);

//16. Write a function which repeat (letter) 10 times. Hint: "abcde" str.repeat(10)

function repeatLetter(letter, times) {
  return letter.repeat(times);
}

var result = repeatLetter("a", 10);
console.log(result);

//17. write a function which reverse array = ['a','b','c','d','e'] Hint: arr.reverse()

function reverseArray(arr) {
  return arr.reverse();
}

var originalArray = ["a", "b", "c", "d", "e"];
var reversedArray = reverseArray(originalArray);

console.log(reversedArray);


//18. Write a JavaScript function that reverses a number.
//Example x = 32243;
//Expected Output : 34223

function reverseNumber(number) {
 
  var reversedNumber = parseInt(
    number.toString().split("").reverse().join(""),
    10
  );

  return reversedNumber;
}
var originalNumber = 32243;
var reversedNumber = reverseNumber(originalNumber);

console.log(reversedNumber);


//19. Write a JavaScript function that checks whether a passed string is a palindrome or not? Hint: A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or Wow.

function isPalindrome(str) {
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

var str = "helloworld";
var result = isPalindrome(str);
console.log(result); 



//20. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
//Example string : 'the quick brown fox'
//Expected Output : 'The Quick Brown Fox

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (match) {
    
      return match.toUpperCase();
  });
}

var inputString = "the quick brown fox";
var outputString = capitalizeWords(inputString);

console.log("Output String:", outputString);


//21. Write a JavaScript function that takes an array of numbers and finds the lowest and greatest numbers, respectively.
//Sample array : [1,2,3,4,5]
//Expected Output : 1,5

function findMinMax(numbers) {
  if (numbers.length === 0) {
    return "Array is empty";
  }

  var min = Math.min(...numbers);
  var max = Math.max(...numbers);

  return min + "," + max;
}
var sampleArray = [1, 2, 3, 4, 5];
var result = findMinMax(sampleArray);

console.log("Expected Output:", result); 


//Chapter 38 (Local vs. Global Variables)

//1. Write a JavaScript function that demonstrates the usage of a local variable.

function localVariable() {
  
  var message = 'local variable';

  console.log(message);
}

localVariable();


//2. How can you access a global variable inside a function in JavaScript?

var globalVariable = 'global variable';

function globalVariable() {
  console.log(globalVariable);
}

globalVariable();



//Chapter 39, 40 (Switch Statements)

//1. Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.

function mySwitchFunction(myVar) {
  switch (myVar) {
    case "case1":
      console.log("case 1!");
      break;
    case "case2":
      console.log("case 2!");
      break;
    case "case3":
      console.log("case 3!");
      break;
    default:
      console.log("default case");
  }
}

mySwitchFunction("case2");



//2. Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.

var cityName = prompt('Enter a city name:');

switch (cityName.toLowerCase()) {
  case 'london':
    alert('You entered London');
    break;

  case 'paris':
    alert('You entered Paris');
    break;

  case 'canada':
    alert('You entered Canada');
    break;

  default:
    alert('try again');
    break;
}
