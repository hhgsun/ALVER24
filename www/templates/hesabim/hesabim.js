MainApp.controller('HesabimCtrl', function ($scope, $stateParams) {
    $scope.secilenDil = localStorage.getItem("_secilen_dil");
    if($scope.secilenDil == null) $scope.secilenDil = "en";
})
    .controller('adreslerimCtrl', function ($scope, $stateParams) {
        console.log("adreslerimCtrl")
    })

    .controller('adreslerimduzenleCtrl', function ($scope, $stateParams) {
        console.log("adreslerimduzenle")
    })

    .controller('bilgilerimCtrl', function ($scope, $stateParams) {
        console.log("bilgilerim")
    })

    // DİLLER BÖLÜMÜ
    .controller('dillerCtrl', function ($scope, $stateParams, $window) {
        $scope.kaydet = function (sec) {
            $scope.SelectLang(sec);
        }
    })

    .controller('odemeayarlarimCtrl', function ($scope, $stateParams) {
        console.log("odemeayarlarim")
    })

    .controller('puanbilgileriCtrl', function ($scope, $stateParams) {
        console.log("puanbilgileri")
    })

    .controller('referanslarimCtrl', function ($scope, $stateParams) {
        console.log("referanslarim")
    })

    .controller('referanslarimduzenleCtrl', function ($scope, $stateParams) {
        console.log("referanslarimduzenle")
    })

    .controller('siparislerimCtrl', function ($scope, $stateParams) {
        console.log("siparislerim")
    })
