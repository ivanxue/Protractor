var angularHomepage = require('./AngularHomePage');
describe('angularjs homepage todo list', function() {
    
    beforeAll(function() {
        browser.get('https://angularjs.org');
    });

    it('should add the first todo', function() {
        angularHomepage.addToDoList('write first protractor test');
        angularHomepage.checkCountText(3, 'write first protractor test');
        angularHomepage.checkCompleteBox(2);
        
    });

    it('should add the second todo', function() {
        angularHomepage.addToDoList('write first protractor test');
        angularHomepage.checkCountText(4, 'write first protractor test');
        angularHomepage.checkCompleteBox(3);
    });
  });