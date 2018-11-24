const reverseSeq = n => {
  let answer = []; //intialize an array

  for (let i = n; i > 0; i--) {
    //loop down from n to 1
    answer.push(i); //push each i to the answer array
  }

  return answer; //return answer;
};

const { assert } = require("chai");

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});

//Get the number n (n>0) to return the reversed sequence from n to 1.

//Example : n=5 >> [5,4,3,2,1]
