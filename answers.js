// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball']
// total = ['soccer', 'baseball', 'football', 'swimming'];


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:

var strings = ['this','is','a','collection','of','words']

function longestString(x) {
	let longest = "";
	for (var i = 0; i < x.length; i++) {
		if (x[i].length > longest.length) {
			longest = x[i]
		}
	}
	return longest
}

console.log(longestString(strings))


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
var numbers = [1, 12,4,18,9,7,11,3,101,5,6];

function smallestNumber(array){
  var smallest=array[0]
	for (var i = 0; i < array.length; i++) {
		if (array[i] < smallest) {
			 smallest = array[i]
		}
	}
	return smallest
}

console.log(smallestNumber(numbers))


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function getEvens(array) {
	evenArray = []
	for (var i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			evenArray.push(array[i])
		}
	}
	return evenArray
}

console.log(getEvens(numbers))


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function getEvens(array) {
	reverseArray = []
	for (var i = array.length-1; i > 0; i--) {
		reverseArray.push(array[i])
	}
	return reverseArray
}

console.log(getEvens(numbers))



// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function sum(array) {
	return array.reduce((a,b) => a + b, 0 );
}

console.log(sum(numbers))


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function greaterTen(array) {
	decade = []
	for (var i = 0; i < array.length; i++) {
	  if (array[i] > 10) {
	    decade.push(array[i])
	  }
	}
	return decade;
}

console.log(greaterTen(numbers))


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function compare(n,array) {
	greaterN = []
	for (var i = 0; i < array.length; i++) {
	  if (array[i] > n) {
	    greaterN.push(array[i])
	  }
	}
	return greaterN;
}

console.log(compare(100,numbers))

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];

function join(array,arrayTwo) {
	for (var i = 0; i < arrayTwo.length; i++) {
	  array.push(arrayTwo[i])
	}
	return array;
}

console.log(join(numbers,numbersTwo))


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <your answer>

var instructorOne = instructors[4][0];
// instructorOne = <your answer>

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>

var instructorThree = instructors[2][0];
// instructorThree = <your answer>
