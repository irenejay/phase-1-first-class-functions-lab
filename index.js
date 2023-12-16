// Hypothetical driver-related functions
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Hypothetical selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Hypothetical drivers array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Mocha/Chai-like tests using a basic assertion library
function test(description, assertion) {
  console.log(`Test: ${description}`);
  if (assertion) {
    console.log('   Passed');
  } else {
    console.error('   Failed');
  }
}

// Test 1
test('has the `returnFirstTwoDrivers` function as its first element', selectingDrivers[0] === returnFirstTwoDrivers);

// Test 2
test('has the `returnLastTwoDrivers` function as its last element', selectingDrivers[1] === returnLastTwoDrivers);

// Test 3
test('allows us to invoke either function from the array', 
  JSON.stringify(selectingDrivers[0](drivers)) === JSON.stringify(['Antonia', 'Nuru']) &&
  JSON.stringify(selectingDrivers[1](drivers)) === JSON.stringify(['Amari', 'Mo'])
);

// Simple implementation of createFareMultiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// Example usage for fareDoubler
const fareDoubler = createFareMultiplier(2);

// Using the fareDoubler function to double a fare
const originalFare = 20;
const doubledFare = fareDoubler(originalFare);
console.log("Original Fare:", originalFare);
console.log("Doubled Fare:", doubledFare); // Should be 20 * 2 = 40

// Example usage for fareTripler
const fareTripler = createFareMultiplier(3);

// Using the fareTripler function to triple a fare
const tripledFare = fareTripler(originalFare);
console.log("Original Fare:", originalFare);
console.log("Tripled Fare:", tripledFare); // Should be 20 * 3 = 60

// Function to select different drivers
function selectDifferentDrivers(drivers, driverSelector) {
  // Use the provided driverSelector function to select drivers
  return driverSelector(drivers);
}

// Example usage with returnFirstTwoDrivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Using selectDifferentDrivers to get the first two drivers
const firstTwoDrivers = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers);
console.log("First Two Drivers:", firstTwoDrivers); // Should be ['Antonia', 'Nuru']

// Example usage with returnLastTwoDrivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Using selectDifferentDrivers to get the last two drivers
const lastTwoDrivers = selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
console.log("Last Two Drivers:", lastTwoDrivers); // Should be ['Amari', 'Mo']
