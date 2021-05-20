(function () {

    angular
        .module('myApp')
        .controller('AdditionalController', AdditionalController);

    function AdditionalController (
        $scope
    ) {
        $scope.additionalMessage = 123;
        $scope.hasPaging = function () {
          return true;
        };
        $scope.getStatusClass = function (withdrawalsStatus) {
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
    }

})();