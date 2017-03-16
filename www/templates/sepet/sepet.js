MainApp.controller('SepetCtrl', function ($scope, $state) {
    $scope.siparisiVer = function () {
        $state.go('app.teslimatbilgileri');
    }
})