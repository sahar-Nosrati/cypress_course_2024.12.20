// const cypress = require("cypress");

describe("Verify title-positive", () => {
  it("Test1!", () => {
    // steps
    cy.visit("https://www.w3schools.com/");
    cy.title().should("eq", "W3schools");
  });

  it("verify title-negative", () => {
    // steps
    cy.visit("https://www.w3schools.com/");
    cy.title().should("eq", "w3schools55555");
  });
});

// Using normal functions
// describe("My First Test", function () {
//   it("Does not do much!", function () {
//     expect(true).to.equal(true);
//   });
// });
