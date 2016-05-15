(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.creationDate = 1463287863563;


    activate();

    function activate() {
 
      $timeout(function() {
       
      }, 4000);
    }

  }
})();
