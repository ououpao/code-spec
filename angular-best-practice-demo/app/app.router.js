module.exports = function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('user', {
            url: '/',
            template: require('./components/user/user.html'),
            controller: 'UserController',
            controllerAs: 'vm'
        })
        .state('list', {
            url: '/list',
            template: require('./components/list/list.html'),
            controller: 'ListController',
            controllerAs: 'vm'
        });
};
