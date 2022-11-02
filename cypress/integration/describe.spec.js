///<reference types="cypress" />
it.only('An external test...', () => {

})

describe('Should group tests...', () => {

    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {

        })  
    })

    describe('Should group more specific tests 2...', () => {

        it('A specific test 2...', () => {
            
        })  
    })
   
    it('An internal test...', () =>{

    })

})