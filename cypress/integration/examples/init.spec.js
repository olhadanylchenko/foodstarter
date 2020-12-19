describe("foodstarter-task", () => {
  it("is working", () => {
    cy.visit("/");
    cy.get("ul>li>a").first().click();

    cy.location("pathname").should("include", "user");
    cy.get("ul>li>a").first().click();

    cy.location("pathname").should("include", "album");

    cy.go("back");
    cy.location("pathname").should("not.include", "album");

    cy.go("forward");
    cy.location("pathname").should("include", "album");

    cy.get("li").first().get("figure").find("img").should("have.attr", "src");
  });
});
