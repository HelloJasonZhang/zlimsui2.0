(function() {
    'use strict';

    angular
        .module('test')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            }).state('home.resource', {
                url: '/resource',
                templateUrl: 'app/resource/resourcetemplate.html',
                controller: 'ResourceTemplateController',
                controllerAs: 'resTemp'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
