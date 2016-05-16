(function() {
    'use strict';

    angular
        .module('ui')
        .controller('ResourceTemplateController', ResourceTemplateController);

    /** @ngInject */
    function ResourceTemplateController(i18nService) {
        var vm = this;
        vm.gridOptions = {
            columnDefs: [
                { field: 'name' },
                { field: 'gender' },
                { field: 'company', enableFiltering: false }
            ]
        };
        vm.gridOptions.data =  
              [{"name": "Moroni","gender":"man", "company": 505050505050505050},
              {"name": "Tiancum","gender":"man", "company": 53},
              {"name": "Jacob","gender":"man", "company": 27},
              {"name": "Nephi","gender":"man", "company": 29},
              {"name": "Enos","gender":"man", "company": 34},
              {"name": "Ether","gender":"man", "company": 42},
              {"name": "Alma","gender":"man", "company": 43},
              {"name": "Jared","gender":"man", "company": 21},
              {"name": "Moroni","gender":"man", "company": 50},
              {"name": "Tiancum","gender":"man", "company": 53}]

    }
})();
