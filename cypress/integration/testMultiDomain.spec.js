describe("Test visiting multiple domains in single test", () => {
  it("should navigate to Founder's website from Saeloun's teams page", () => {
    // should visit current site under test
    cy.visit("https://www.saeloun.com/team");

    // should click on image containing attribute alt as 'Vipul AM'
    cy.get('img[alt="Vipul A M"]').click();

    // on clicking the founder's image, user should be navigated to new url 'https://vipulnsward.com/'
    cy.origin("https://vipulnsward.com/", () => {
      cy.get("h3").should("have.text", "Vipul A M"); // 👍
      cy.get("a").contains("vipul@saeloun.com");
      cy.get("a").contains("Twitter").click();
      cy.url().then((url) => {
        cy.log(url.toString());
      });
    });
  });

  it("should login with github", () => {
    //visit circleci
    cy.visit("https://circleci.com/vcs-authorize/");

    //click on sign in link
    cy.contains("Log In with GitHub").click({ force: true });

    //click on 'login with Github' button
    cy.origin("https://github.com", () => {
      cy.get("#login_field").type("mohinidahiya4@gmail.com");
      cy.get("#password").type("Dahiya123!");
      cy.get("input").contains("Sign in").click();
      cy.wait(10000);
    });
    // add code for github login
    cy.url().should("contain", "https://app.circleci.com/");
  });
});
