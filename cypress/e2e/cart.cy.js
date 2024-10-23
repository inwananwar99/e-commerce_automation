describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.amazon.com');
    cy.wait(5000);
    // cy.get('.a-span-last > a').contains("Try different image").click();
    cy.get('input#twotabsearchtextbox').type("Cleaning Tools");
    cy.get('#nav-search-submit-button').click();
    cy.get('a').contains("Rubbermaid Reveal Power Scrubber 18-Piece Kit, Cordless Electric Battery Powered Scrub Brush, Water Resistant, for Home/Kitchen/Bathroom/Grout/Tile/Shower/Tub").click();
    // cy.get('#a-autoid-0-announce').click();
    cy.get('input[title="Add to Shopping Cart"]').click();
    cy.get('h1').contains("Added to cart");
    cy.get('a').contains("Go to Cart").click({force: true});
    cy.get('input[value="Proceed to checkout"]').contains("Proceed to checkout");
    cy.get('input[value="Proceed to checkout"]').contains("Proceed to checkout").click({force: true});
    cy.get('input[type="email"]').type("inwananwar9b@gmail.com");
    cy.get('.a-button-inner > #continue').click({force: true});
    cy.get('input[type="password"]').type("123456");
    cy.get('#signInSubmit').click({force: true});
    cy.get('.a-color-link').contains("1 item");
    cy.get('.a-color-link').contains("1 item").click({force: true});
    cy.get('a').contains("Return to Cart");
    cy.get('a').contains("Return to Cart").click({force: true});
    cy.get('h4').contains("Rubbermaid Reveal Power Scrubber 18-Piece Kit, Cordless Electric Battery Powered Scrub Brush, Water Resistant, for Home/Kitchen/Bathroom/Grout/Tile/Shower/Tub")
    
  })
})