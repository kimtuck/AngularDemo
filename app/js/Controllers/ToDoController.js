'use strict';
myApp.controller("ToDo",["$scope","ToDoService",
    function($scope,ToDoService) {
        $scope.items = ToDoService.ToDoItems;

        $scope.newItem = function() {
            debugger
        }
    }
]);