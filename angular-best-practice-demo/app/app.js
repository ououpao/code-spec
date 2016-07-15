require('./assets/css/index.css');

var angular = require('angular');
var routerConfig = require('./app.router');

require('angular-ui-router');
require('ng-resource')(window, angular);
angular
    .module('app', [
        'ui.router',
        'ngResource'
    ])
    .config(routerConfig);
require('./components');
// angular.element(document).ready(function() {
//     angular.bootstrap(document, ['app']);
// });
// 
// 
var calculator = {
	number: 1,
	add: function() {
		setTimeout(function(){
			this.number ++
		});
	}
};