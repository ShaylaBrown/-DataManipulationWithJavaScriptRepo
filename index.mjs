// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)
console.log('The four numbers add up to 50 according to the provided criteria: ${isSum50}.')

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd)
console.log('At least two of the four numbers are odd according to the provided criteria: ${isTwoOdd}.')

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isUnder25)
console.log('No number is larger than 25 according to the provided criteria: ${isUnder25}.')

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)
console.log('The four numbers are unique according to the provided criteria: ${isUnique}.')

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log(isValid);
console.log('The results are false according to the provided criteria: ${isValid}.')

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
    ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
    !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Check if all numbers are divisible by 5
const isDivisible = (n1 % 5) && (n2 % 5) && (n3 % 5) && (n4 % 5)
console.log(isDivisible)
console.log('The remainer is 0 so the four numbers are divisible by 5 according to the provided criteria: ${isDivisible}.')

//Check if the first number is larger than the last
const isLarger = n1 > n4
console.log(isLarger)
console.log('The first number is larger than the last according to the provided criteria: ${isLarger}.')

// Accomplish the following arithmetic chain:
//subtract the first number from the second number
console.log(n2 - n1)
console.log('n2 minus n1 is equal to 5 according to the provided equation: n2-n1.')
//multiply the result by the third number
console.log(5 * n3)
console.log('The difference of the above equation, which is 5, multiplied by n3 is equal to 100 according to the provided equation: 5*n3.')
//find the remainder of dividing the result by the fourth number
console.log(100 % 5 )
console.log('The remainder of dividing the product ${100}, from the above equation, by the fourth number, ${5}, is 0.')

//Part 2: Practical Math
const fiftyfivemiles = 1500 / 30 * 3
const sixtyMiles = 1500 / 28 * 3
const seventyFiveMiles = 1500 / 23 * 3
console.log(fiftyfivemiles)
console.log(sixtyMiles)
console.log(seventyFiveMiles)
const results =
    'According to my results, it would make the most senese to drive 60mph for my trip.  This would get me to my destination both inside of my budget and at a faster pace and in a shorter time frame.'
console.log(results)