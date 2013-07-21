myApp.directive('toDoItemList', ["ToDoService",
    function (ToDoService) {
        return {
        templateUrl:'html/directives/ToDoList.html',
        replace: true,
        link:function(scope, element) {
            scope.onRemove = function(item){
                if (confirm("Remove '" + item.subject +"'?")) {
                    ToDoService.removeItem(item);
                }
            }
        }
    };
}]);
