function divisors(integer) {
  //returns array with alll the element divisors
  var array = [];
  //begin the loop
  for (i = 1; i <= param; i++) {
    //detect values divisble by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      //push to the array
      array.push(i);
    }
    //detect values divisible by 3
    else if (i % 3 === 0) {
      array.push(i);
    } else {
      return integer + " is prime";
    }
    return array;
  }
}
