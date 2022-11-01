describe("SauceDemoLoginRecorder", () => {
it("tests SauceDemoLoginRecorder", () => {
  cy.viewport(1016, 713);

  cy.visit("https://www.saucedemo.com/");

  cy.get("[data-test=username]").click();

  cy.get("[data-test=username]").type("standard_user");

  cy.get("[data-test=password]").click();

  cy.get("[data-test=password]").type("secret");

  cy.get("[data-test=password]").type("secret)");

  cy.get("[data-test=password]").type("secret)user");

  cy.get("[data-test=login-button]").click();

  cy.get("[data-test=error]").click();

  cy.get("[data-test=password]").click();

  cy.get("[data-test=password]").clear()

  cy.get("[data-test=password]").type("secret_sauce");

  cy.get("[data-test=login-button]").click();

  cy.get("#header_container > div.primary_header > div.header_label > div").click();

  cy.get("#react-burger-menu-btn").click();

  cy.get("#logout_sidebar_link").click();

  });
});
