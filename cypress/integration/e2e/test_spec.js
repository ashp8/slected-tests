Cypress.Commands.add("clickRecaptcha", () => {
  cy.window().then(win => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById("recaptcha-token")
      .click();
  });
});
describe("Test the about page", ()=>{

  it("Successfully loads[site] and input the Login form", ()=>{
    cy.visit('/');
    // cy.url().contains('/user/detail');
    cy.url().should('include', '/login');
    cy.get('input[name=email]').type("email@email.com").should('have.value', "email@email.com");
    cy.get('input[name=password]').type("password").should('have.value', "password");
    
    cy.get('button').click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('/user/detail');
    });
  });

  it("Check The detail page", ()=>{
    cy.url().should('include', '/user/detail');
    // cy.get('button[class=close]').click( {multiple: true });
    cy.contains('×').click();
   it("check home page", ()=>{
    cy.url().should('include', '/user/detail');
    cy.url().should('include', '/home');
   });
    cy.contains('Home').click();
  });
 


});