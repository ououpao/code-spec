var angular = require('angular');
require('./user.service');
angular
    .module('app')
    .controller('UserController', UserController);

function UserController($scope, userService) {
    var vm = this;
    vm.name = 'naraku666';
    vm.setName = setName;
    vm.showName = function(name) {
        // less code
        alert(name);
    };
    getUserinfo();

    /**
     * [modifine username]
     * @param {string} name [new name]
     */
    function setName(name) {
        vm.name = name;
    }

    function getUserinfo() {
        vm.userinfo = userService.getUserinfo();
    }
}
