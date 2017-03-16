MainApp.controller('UrunDetayCtrl', function ($scope, $stateParams, Service, Urun) {
    Service.loading();
    var secilenUrunKey = $stateParams.key;
    $scope.urunBaslik = $stateParams.baslik;
    $scope.detay = {};
    Urun.getData(secilenUrunKey).then(function (urun) {
        $scope.detay = urun;
        $scope.$apply(); // sürekli yenileme yapar angularjs dataları vs.
        Service.loadingHide();
    }, function (err) {
        console.log(err);
        Service.loadingHide();
    })

    $scope.sepeteEkle = function () {
        $scope.SepetAddItem(secilenUrunKey, 5); // sidemenu.js
    }

    $scope.sepettenKaldir = function () {
        $scope.SepetRemoveItem(secilenUrunKey); // sidemenu.js
    }

})