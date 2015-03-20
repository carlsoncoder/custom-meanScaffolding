'use strict';

/* jasmine specs for controllers go here */
describe('MyAngularApp controllers', function() {

  beforeEach(module('myAngularApp'));

  describe('MainController', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/mainRecords').
          respond(
            [
                {name: 'Nexus S'}, {name: 'Motorola DROID'}
            ]);

      scope = $rootScope.$new();
      ctrl = $controller('MainController', {$scope: scope});
    }));


    it('should create "records" model with 2 records fetched from xhr', function() {
      expect(scope.records).toBeUndefined();
      $httpBackend.flush();

      expect(scope.records).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


  describe('DetailsController', function(){
    var scope, $httpBackend, ctrl,
        detailsData = function() {
          return {
            name: 'dell-venue-7',
                images: ['image/url1.png', 'image/url2.png']
          };
        };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/details/dell-venue-7').respond(detailsData());

      $routeParams.phoneId = 'dell-venue-7';
      scope = $rootScope.$new();
      ctrl = $controller('DetailsController', {$scope: scope});
    }));


    it('should fetch record detail', function() {
      expect(scope.details).toBeUndefined();
      $httpBackend.flush();

      expect(scope.details).toEqual(detailsData());
    });
  });
});