MainApp.controller('KategorilerCtrl', function ($scope, $stateParams, Kategori) {
    
    $scope.katBaslik = $stateParams.baslik
    var secilenKatKey = $stateParams.key;
    
    Kategori.filterGetData(secilenKatKey).then(function (kategoriler) {
        $scope.altKategoriler = kategoriler;
        $scope.$apply(); // sürekli yenileme yapar angularjs dataları vs.
    }, function (err) {
        console.log(err);
    })

})