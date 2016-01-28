'use strict';

describe('Service: Service', function () {

  // load the controller's module
  beforeEach(module('ecommerceFrontEndApp'));

  var Service,
    httpbackend,
    scope,
    Service;

  var mockData = {data : [
    {"Id":1,"Name":"Apple","Price":32.0},
    {"Id":2,"Name":"Nutella","Price":12.0},
    {"Id":3,"Name":"Pepsi","Price":6.0},
    {"Id":4,"Name":"Coca-Cola","Price":6.0},
    {"Id":5,"Name":"Sprite","Price":8.0}
  ]};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, ProductsService) {
    scope = $rootScope.$new();
    httpbackend = $httpBackend;
    Service = ProductsService;

    httpbackend.when('GET', 'http://localhost:53905/api/products').respond(mockData);
  }));

  afterEach(function () {
    httpbackend.verifyNoOutstandingExpectation();
    httpbackend.verifyNoOutstandingRequest();
  });


  //xit
  it('should get products', function () {
    spyOn(Service, 'getProducts').and.callFake(function () {
      return {
        then: function (callback) {
          return callback(mockData);
        }
      };
    });

    var result;
    Service.getProducts().then(function (response) {
      result = response.data;
    });

    expect(Service.getProducts).toHaveBeenCalled(); //toHaveBeenCalledWith
    expect(result).toEqual(mockData.data);

  });

});
