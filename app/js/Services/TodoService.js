myApp.service("ToDoService", [
    function() {

        this.ToDoItem = function(date,subject) {
            this.date=date;
            this.subject=subject;
        }

        this.addItem = function(date, subject) {
            this.ToDoItems.push(new this.ToDoItem(date,subject));
        };

        this.ToDoItems = [];
        this.addItem('8/1/2013', "Pay mortgage");
        this.addItem('8/2/2013', "Complete July Expense Report");
    }
]);
