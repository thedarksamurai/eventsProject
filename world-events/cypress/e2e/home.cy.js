///  <reference types="cypress"/>

context("home page", () =>{
    beforeEach(() => {
        cy.visit('/')
    })
    it("should find the home events page and events by3", () =>{
        cy.get("p").contains("Events By3")
    })
})