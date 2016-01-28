(function() {
  'use strict';

  var app = angular.module('ecommerceFrontEndApp');
  app.service('ProductsService',['$http', function ($http) {
    var getProducts = function() {
      return $http({
        method: "GET",
        url: 'http://localhost:53905/api/products'
      });
    };
      var getFeatures = function() {

      };
    return {
      getProducts : getProducts
    };
  }]);

})();
