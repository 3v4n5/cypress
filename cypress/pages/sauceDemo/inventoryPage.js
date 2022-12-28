export class inventoryPage{
    elements = {
        titleSpan: '.title'
    }

    getSpan(message){
        cy.get(this.elements.titleSpan).contains(message)
    }
}

// export default inventoryPage;