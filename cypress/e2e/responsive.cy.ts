describe('Responsive Design Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3050')
    })

    it('should display correctly on desktop', () => {
        cy.viewport(1920, 1080)

        // Check if desktop menu is visible
        cy.get('.menu.hidden.md\\:block').should('be.visible')

        // Check if mobile menu is hidden
        cy.get('.mobile-menu.block.md\\:hidden').should('not.be.visible')

        // Check if language selector is visible
        cy.get('select').should('be.visible')
    })

    it('should display correctly on tablet', () => {
        cy.viewport(768, 1024)

        // Check if desktop menu is visible
        cy.get('.menu.hidden.md\\:block').should('be.visible')

        // Check if mobile menu is hidden
        cy.get('.mobile-menu.block.md\\:hidden').should('not.be.visible')
    })

    it('should display correctly on mobile', () => {
        cy.viewport(375, 667)

        // Check if mobile menu button is visible
        cy.get('.mobile-menu.block.md\\:hidden').should('be.visible')

        // Check if desktop menu is hidden
        cy.get('.menu.hidden.md\\:block').should('not.be.visible')

        // Check if language selector is visible
        cy.get('select').should('be.visible')
    })

    it('should maintain functionality across screen sizes', () => {
        // Test on desktop
        cy.viewport(1920, 1080)
        cy.get('button').contains('Projects').click()
        cy.wait(1000) // Wait for scroll animation
        cy.get('#projects').should('be.visible')

        // Test on mobile - use force click since menu might be hidden
        cy.viewport(375, 667)
        cy.get('button').contains('Projects').click({ force: true })
        cy.wait(1000) // Wait for scroll animation
        cy.get('#projects').should('be.visible')
    })
}) 