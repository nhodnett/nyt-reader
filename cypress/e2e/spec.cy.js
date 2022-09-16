describe('home spec', () => {
  beforeEach(() => {
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=aZbmpGuGlAjI4Bm8GXzuUjgm75QdNlob", {fixture: "home.json"})
    cy.intercept("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=aZbmpGuGlAjI4Bm8GXzuUjgm75QdNlob", {fixture: "arts.json"})
    cy.visit("http://localhost:3000")
  })
  
  it('should show the user a header, a home button, and a list of sections', () => {
    cy.get(".nav").contains("NY Times Reader")
    cy.get(".filter-buttons-container").children().should("have.length", 25)
    cy.get(".filter-button").eq(0).contains("Arts")
  })
  
  it('should allow the user to filter top stories by section', () => {
    cy.get(".filter-button").eq(0).click().wait(1000)
    cy.get(".all-articles-container").children().should("have.length", 1)
    cy.get(".details-container").eq(0).contains("The Afterlife of Willem de Kooning")
  })

  //it("should allow the user to return to the home page", () => {})

  //it("should allow the user to click on an article's summary to see more details", () => {})

})