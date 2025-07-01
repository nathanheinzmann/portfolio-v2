describe('Contact Section Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3050')
    })

    it('should display contact section correctly', () => {
        // Navigate to contact section
        cy.get('button').contains('Contact').click()
        cy.get('#contact').should('be.visible')

        // Check section title
        cy.get('#contact h3').should('contain', 'Get in touch')

        // Check if email is displayed
        cy.get('#contact').should('contain', 'nathanhph@gmail.com')
    })

    it('should copy email to clipboard', () => {
        cy.get('button').contains('Contact').click()

        // Click copy button
        cy.get('button').contains('Copy').click()

        // Check if button text changes to "Copied!"
        cy.get('button').should('contain', 'Copied!')

        // Wait for button to return to original state
        cy.wait(2000)
        cy.get('button').should('contain', 'Copy')
    })

    it('should have working social media links', () => {
        cy.get('button').contains('Contact').click()

        // Check GitHub link
        cy.get('a[href*="github.com"]').should('exist')
        cy.get('a[href*="github.com"]').should('have.attr', 'target', '_blank')

        // Check LinkedIn link
        cy.get('a[href*="linkedin.com"]').should('exist')
        cy.get('a[href*="linkedin.com"]').should('have.attr', 'target', '_blank')
    })

    it('should translate contact section when language changes', () => {
        // Switch to Portuguese
        cy.get('select').select('br')

        // Navigate to contact
        cy.get('button').contains('Contato').click()

        // Check Portuguese translations
        cy.get('#contact h3').should('contain', 'Entre em contato')
        cy.get('button').contains('Copiar').should('be.visible')
        cy.get('#contact').should('contain', 'Outras formas de contato')
    })

    it('should display contact information correctly', () => {
        cy.get('button').contains('Contact').click()

        // Check if all contact elements are present
        cy.get('#contact').should('contain', 'Email:')
        cy.get('#contact').should('contain', 'nathanhph@gmail.com')
        cy.get('#contact').should('contain', 'Other ways to contact')
    })
}) 