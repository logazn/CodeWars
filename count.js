function countPositivesSumNegatives(input) {
  var array;
  input.sort(function(a, b) {
    return a - b;
  });
  array = input[0];

  input.sort(function(a, b) {
    return b - a;
  });
  array = input[input.length - 1];
  // now points[0] contains the highest value
  // and points[points.length-1] contains the lowest value
  return array;
}
