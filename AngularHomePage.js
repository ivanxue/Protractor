var AngularHomepage = function() {
    var toDoText = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    var completedAmount = element.all(by.css('.done-true'));

    this.addToDoList = function(text) {
        toDoText.sendKeys(text);
        addButton.click();
    }

    this.checkCountText = function(a, b) {
        expect(todoList.count()).toEqual(a);
        expect(todoList.get(a - 1).getText()).toEqual(b);
    }

    this.checkCompleteBox = function(a) {
        var completeBox = todoList.get(a).element(by.css('input'));
        completeBox.click();
        expect(completedAmount.count()).toEqual(a);
    };
};
module.exports = new AngularHomepage();