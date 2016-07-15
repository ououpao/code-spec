var angular = require('angular');
angular.module('app')
    .controller('ListController', ListController);

ListController.$inject = ['$scope'];

function ListController($scope) {
    this.name = '6';
}
