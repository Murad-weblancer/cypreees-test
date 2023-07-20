/// <reference types="Cypress" />

describe("Alerts", () => {
  it("js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (i) => {
      expect(i).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
  it("js Confirm", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    // cy.on("window:confirm", (i) => {
    //   expect(i).to.contains("I am a JS Confirm");
    // });
    // cypress automaticly close alerts by clicking OK butt

    // cy.get("#result").should("have.text", "You clicked: Ok");
    cy.on("window:confirm", () => false); // cypress close alert window using cancel button
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });
  it.only("js Prompt", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("hello");
    });
    cy.get("button[onclick='jsPrompt()']").click();
    cy.get("#result").should("have.text", "You entered: hello");
  });
});
