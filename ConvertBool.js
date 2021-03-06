//Complete the method that takes a boolean value and return a "
//Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  }
  if (!bool) {
    return "No";
  }
}

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

Test.assertEquals(boolToWord(true), "Yes");
Test.assertEquals(boolToWord(false), "No");
