(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name ecommerceFrontEndApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the ecommerceFrontEndApp
   */
  angular.module('ecommerceFrontEndApp')
    .controller('MainCtrl', ['ProductsService', '$scope', function (ProductsService, $scope) {

      ProductsService.getProducts().then(function (response) {
        $scope.Products = response.data;
      });

    }]);


})();
