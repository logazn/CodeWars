function rentalCarCost(d) {
  const Cost = 40;
  let totalprice = d * Cost; //works total price of bill

  if (d >= 7) {
    totalprice = totalprice - 50;
  }
  if (d >= 3) {
    totalprice = totalprice - 20;
  }
  return totalprice;
}
console.log(rentalCarCost);

//Every day you rent the car costs $40. If you rent the car for 7 or
//more days, you get $50 off your total. Alternatively, if you rent
//the car for 3 or more days, you get $20 off your total.

//Write a code that gives out the total amount for different days(d).

test.describe("Regular Tests:", function() {
  Test.it("Should work for under 3 days:", function() {
    Test.assertEquals(rentalCarCost(1), 40);
    Test.assertEquals(rentalCarCost(2), 80);
  });
  Test.it("Should work for under 7 days:", function() {
    Test.assertEquals(rentalCarCost(3), 100);
    Test.assertEquals(rentalCarCost(4), 140);
    Test.assertEquals(rentalCarCost(5), 180);
    Test.assertEquals(rentalCarCost(6), 220);
  });
  Test.it("Should work for 7 or more days:", function() {
    Test.assertEquals(rentalCarCost(7), 230);
    Test.assertEquals(rentalCarCost(8), 270);
    Test.assertEquals(rentalCarCost(9), 310);
    Test.assertEquals(rentalCarCost(10), 350);
  });
});
