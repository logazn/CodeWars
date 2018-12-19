//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits,
//return the first one in the array.

function findLongest(array) {
  let longest = 0;
  //store longest in var

  //use for loop to find longest

  for (var i = 0; i < array.length; i++) {
    if (array[i] > longest) {
      longest = 0;
      longest = array[i];
    }
  }
  return longest;
  // code here
}

//Test.assertEquals(findLongest([1, 10, 100]), 100)
//Test.assertEquals(findLongest([9000, 8, 800]), 9000)
//Test.assertEquals(findLongest([8, 900, 500]), 900)
