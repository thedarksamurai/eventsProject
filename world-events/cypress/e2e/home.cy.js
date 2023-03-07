///  <reference types="cypress"/>

context("home page", () =>{
    beforeEach(() => {
        cy.visit('https://events-project-mrq3-3z2lsok6y-thedarksamurai.vercel.app/')
    })
    it("should find the home events page and events by3", () =>{
        cy.get("p").contains("Events By3")
    })
})