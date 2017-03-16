MainApp.controller('AnasayfaCtrl', function ($scope, $ionicModal, $ionicHistory, Service, AuthService, Kategori, Urun) {

    $scope.$on('$ionicView.beforeEnter', function (e) {
        // bunun sayesinde geçmişe (geri tuşu ile) gitmiyor anasayfadayken direk app'den çıkıyor.
        $ionicHistory.clearHistory();
    });

    AuthService.activeUserId().then(function (uid) {
        AuthService.getUserData(uid).then(function (data) {
            $scope.aktifKullanici = data;
            $scope.$apply();
        }, function (err) { console.log(err) })
    }, function (err) {
        console.log(err)
    });

    // KATEGORİLER
    $scope.ustKategori = {};
    Kategori.filterGetData("yok").then(function (kategoriler) {
        $scope.anaKategoriler = kategoriler;
        $scope.$apply(); // sürekli yenileme yapar angularjs dataları vs.
    }, function (err) {
        console.log(err);
    })
    
})
