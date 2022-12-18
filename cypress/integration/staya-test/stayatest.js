
describe('Тестирование формы логина Staya', function () {
    
    it('Позитивный кейс: верные логин и пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('novikovasof69@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('Gtopisdope1');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();

        cy.contains('Мои заказы')
       
         })
    it('Негативный кейс: верный логин и неверный пароль', function () {
    	cy.get('#__layout > div > main > div > div.container > div > aside > button').click();
    	cy.get('#__layout > div > div > section > div > div > div > button.box__button.box__button_ok.s-button.s-button_theme-dark').click();
    	cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('novikovasof69@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('Gtopisdope4');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();

        cy.contains('Невозможно войти с предоставленными учетными данными.')
       
         })

})
