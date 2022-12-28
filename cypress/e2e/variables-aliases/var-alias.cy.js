describe('Variables y Aliases', () => {
    beforeEach(function(){
        cy.visit('https://demoqa.com/modal-dialogs')  
    })

    // it('Funcionamiento de variables al retornar valor', () => {
    //     const smallModalText = cy.get('#showSmallModal').text()
    //     cy.log('smallModaltext')
    // });

    it('Closures y Variables', function() {
        cy.get('#showSmallModal').then($modalbutton => {
            const smallModalText = $modalbutton.text()//closure
            cy.log(smallModalText)

            $modalbutton.click()
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText, { matchCase: false})//case sensitive, no valida mayusculas
        })
    });

    // it('Compartir contexto de variables a otro it', () => {
    //     cy.log(smallModalText)
    // });

    it('Aliases', function() {//function para usar invoke y compartir contexto
        cy.get('#showSmallModal').invoke('text').as('InvokeText')
            
        cy.get('#showSmallModal').then($modalbutton => {
            const smallModalText = $modalbutton.text()//closure
            cy.log(smallModalText)

            cy.wrap(smallModalText).as('WrapText')
        })
    });


    it('Compartir Contexto', function() {//function para compartir contexto
        cy.log("INVOKE: " + this.InvokeText)
        cy.log("WRAP: " + this.WrapText)
    });

});