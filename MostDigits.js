//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits,
//return the first one in the array.
function findLongest(array) {
  let newArr = array
    .slice()
    .sort((a, b) => b.toString().length - a.toString().length);
  return newArr[0];
}

//Test.assertEquals(findLongest([1, 10, 100]), 100)
//Test.assertEquals(findLongest([9000, 8, 800]), 9000)
//Test.assertEquals(findLongest([8, 900, 500]), 900)
