describe('Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3050')
    })

    it('should navigate to all sections via navbar', () => {
        // Test About section navigation
        cy.get('button').contains('About').click()
        cy.wait(1000) // Wait for scroll animation
        cy.url().should('include', '#about')
        cy.get('#about').should('be.visible')

        // Test Projects section navigation
        cy.get('button').contains('Projects').click()
        cy.wait(1000) // Wait for scroll animation
        cy.url().should('include', '#projects')
        cy.get('#projects').should('be.visible')

        // Test Contact section navigation
        cy.get('button').contains('Contact').click()
        cy.wait(1000) // Wait for scroll animation
        cy.url().should('include', '#contact')
        cy.get('#contact').should('be.visible')
    })

    it('should have working logo that navigates to home', () => {
        cy.get('a[href="/"]').first().should('exist')
        cy.get('a[href="/"]').first().click()
        cy.url().should('eq', 'http://localhost:3050/')
    })

    it('should display all navigation items', () => {
        cy.get('button').contains('About').should('be.visible')
        cy.get('button').contains('Projects').should('be.visible')
        cy.get('button').contains('Contact').should('be.visible')
    })
}) 