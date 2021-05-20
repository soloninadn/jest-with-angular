describe('WithdrawalManageController', function() {
  let $controller;
  let $scope;
  let controller;

  beforeEach(function () {
    angular.mock.module('myApp');

    inject(function(_$controller_){
      $controller = _$controller_;
    });

    $scope = {};
    controller = $controller('WithdrawalManageController', { $scope: $scope });
  });

  describe('Withdrawal Controller tests', function() {
    it('hasPaging', function() {
      expect($scope.hasPaging()).toEqual(true);
    });
    it('NEW STATUS', function() {
      expect($scope.getStatusClass('FAILURE')).toEqual('label label-danger');
    });
  });
});