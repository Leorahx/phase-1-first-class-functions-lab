// index.js
// returnFirstTwoDrivers()
//   1) should return a new array containing the first two drivers from the passed-in array
// returnLastTwoDrivers()
//   2) should return an array of the last two drivers
// selectingDrivers
//   3) has the `returnFirstTwoDrivers` function to as its first element
//   4) has the `returnLastTwoDrivers` function to as its last element
//   5) allows us to invoke either function from the array
// createFareMultiplier()
//   6) returns a function
//   7) should multiply a given value using the created multiplier
// fareDoubler()
//   8) is a function
//   9) doubles fares
// fareTripler()
//   10) is a function
//   11) triples fares
// selectDifferentDrivers(arrayOfDrivers, function)
//   12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//   13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument// Code your solution in this file!

const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = function (array) {
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function (fare) {
    return integer * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fx) {
  return fx(drivers);
}
