const expect = require("chai").expect;
const utilities = require("../utilities");
//Test SUITE
describe("Testing Utilities", () => {

  //Test SPEC
  it("Should add two numbers together", (done) => {
    //Test ASSERTION
    expect(utilities.addTwo(2, 19)).to.equal(21);
    done();
  });

  it("Should reverse a string", (done) => {
    expect(utilities.reverseString("hello")).to.equal("olleh");
    done();
  });
  it("Should return true if word is a palindrome else false", (done) => {
    done();
  });
});
