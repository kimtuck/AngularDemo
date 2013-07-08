myApp.directive('toDoItemForm', ["ToDoService",
    function (ToDoService) {
        return {
            templateUrl:'html/directives/ToDoItemForm.html',
            link:function(scope, element) {
                scope.addItem = function() {
                    ToDoService.addItem(scope.Date,scope.Subject);
                }
            }
        };
    }]);
