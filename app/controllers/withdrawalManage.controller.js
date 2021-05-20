(function () {
angular
  .module('myApp')
  .controller('WithdrawalManageController', WithdrawalManageController);

/* @ngInject */
function WithdrawalManageController($scope) {

  $scope.hasPaging = hasPaging;
  $scope.getStatusClass = getStatusClass;

  function getStatusClass(withdrawalsStatus) {
    switch (withdrawalsStatus) {
      case 'FAILURE':
        return 'label label-danger';
      case 'ACCEPTED':
        return 'label label-success';
      case 'SUCCESS':
        return 'label label-warning';
      case 'PROCESSING':
        return 'label label-warning';
      case 'RECONCILED':
        return 'label label-primary';
      case 'ACCOUNTS_OK':
        return 'panel panel-warning';
      case 'SALES_OK':
        return 'panel panel-success';
      case 'GATEWAY_ACCEPTED':
        return 'panel panel-primary';
    }
    return '';
  }

  function hasPaging() {
    return true;
  }

}

})();