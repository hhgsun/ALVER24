MainApp.controller('UrunListeleCtrl', function ($scope, $stateParams, Urun) {
    
    $scope.secBaslik = $stateParams.baslik;
    var secilenKatKey = $stateParams.key;

    Urun.filterGetData(secilenKatKey).then(function (urunler) {
        $scope.urunler = urunler;
        $scope.$apply(); // sürekli yenileme yapar angularjs dataları vs.
    }, function (err) {
        console.log(err);
    })

})