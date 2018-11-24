function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -+num;
  }
}

Test.assertEquals(makeNegative(42), -42);
