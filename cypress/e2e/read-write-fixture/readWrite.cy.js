describe('Agregar la respuesta de una API a un JSON', () => {
    
    const filePath = 'cypress/fixtures/read-write/read-write.json' 
    
    it('Agregar la respuesta de una API a un JSON', () => {
        cy.request('GET', 'https://gateway.marvel.com:443/v1/public/comics?limit=1&apikey=0693dfef5ee88eb17249df65a385c5a9&ts=1&hash=d59f9836d6e78349081ddcc7e1af630a')
          .then(response => {
            cy.log(response.body.data.results)
            cy.writeFile(filePath, response.body.data.results)//recibe el path del archivo a guardar y la respuesta del api y escribe en el JSON
          })  
    });

    it('Agregando mas respuestas al JSON de otra API', () => {
        cy.request('GET', 'https://reqres.in/api/users?page=2')
          .its('body.data')
          .each(users => {
            cy.log(users)
            cy.readFile(filePath).then(user => {//lee el archivo en el path .json 
              user.push(users)//crea un nuevo array de usuarios (user)

              cy.writeFile(filePath, user)//escrube los datos del nuevo array en el archivo json del path
            })
          })
    });


});