describe('Language Switcher Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3050')
    })

    it('should switch between English and Portuguese', () => {
        // Check initial state (English)
        cy.get('h1').should('contain', 'Need a website or app?')
        cy.get('button').contains('About').should('be.visible')
        cy.get('button').contains('Projects').should('be.visible')
        cy.get('button').contains('Contact').should('be.visible')

        // Switch to Portuguese
        cy.get('select').select('br')

        // Check Portuguese translations
        cy.get('h1').should('contain', 'Precisa de um site ou aplicativo?')
        cy.get('button').contains('Sobre').should('be.visible')
        cy.get('button').contains('Projetos').should('be.visible')
        cy.get('button').contains('Contato').should('be.visible')

        // Switch back to English
        cy.get('select').select('en')

        // Check English translations again
        cy.get('h1').should('contain', 'Need a website or app?')
        cy.get('button').contains('About').should('be.visible')
    })

    it('should display language selector with flags', () => {
        cy.get('select').should('be.visible')
        cy.get('select option[value="br"]').should('contain', '🇧🇷 BR')
        cy.get('select option[value="en"]').should('contain', '🇺🇸 EN')
    })

    it('should maintain language selection after navigation', () => {
        // Switch to Portuguese
        cy.get('select').select('br')

        // Navigate to projects section
        cy.get('button').contains('Projetos').click()

        // Check if language is still Portuguese
        cy.get('h2').should('contain', 'Meus projetos')
        cy.get('select').should('have.value', 'br')
    })
}) 