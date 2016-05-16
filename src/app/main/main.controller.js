(function() {
    'use strict';

    angular
        .module('ui')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($timeout, $mdSidenav, $log) {
        var vm = this;

        vm.creationDate = 1463287863563;
        vm.toggleList = toggleList;
       
        vm.menu = [{
            link: '',
            title: 'Dashboard',
            icon: 'dashboard'
        }, {
            link: '',
            title: 'Friends',
            icon: 'group'
        }, {
            link: '',
            title: 'Messages',
            icon: 'message'
        }];
        vm.admin = [{
            link: '',
            title: 'Trash',
            icon: 'delete'
        }, {
            link: 'showListBottomSheet($event)',
            title: 'Settings',
            icon: 'settings'
        }];
        activate();

        function activate() {

            $timeout(function() {

            }, 4000);
        }

      /**
       * Hide or Show the 'left' sideNav area
       */
      function toggleList() {
        $log.info(' NavbarController $mdSidenav=');
        $mdSidenav('left').toggle();
      }

    }
})();
