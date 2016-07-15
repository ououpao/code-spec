var angular = require('angular');
angular
    .module('app')
    .factory('userService', ['$resource', function($resource) {
        return {
            getUserinfo: function() {
                return {
                    status: 200,
                    username: 'naraku666',
                    age: 23,
                    sex: 'male'
                }
            }
        }
    }]);
