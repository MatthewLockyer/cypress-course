describe("Forms test", () => {
    beforeEach(() => {
        cy.visit("/forms")
    })

    it("Contains correct header text", () => {
        cy.getDataTest("forms-header").should("contain", "Testing Forms")
    })

    it("Contains correct input text", () => {
        cy.getDataTest("forms-input")
            .find("input")
            .click()
            .type("test@test.com")
        cy.contains(/Successfully subbed: test@test.com/i).should("not.exist")

        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: test@test.com/i)

        cy.contains(/Successfully subbed: test@test.com/i).should("exist")
    })
})
