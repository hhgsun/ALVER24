MainApp.controller('SideMenuCtrl', function ($scope, $state, $http, AuthService, Service) {
    // GENERAL
    $scope.defaultLang = "en";

    // LANGUAGE
    var _prefixLang = "_secilen_dil";
    $scope.LANG = {};
    $scope.secilenDil = localStorage.getItem(_prefixLang)
    if ($scope.secilenDil == null)
        $scope.secilenDil = $scope.defaultLang;
    $scope.LoadLang = function (langslug) {
        $http.get('../lang/' + langslug + '.json')
            .success(function (lang) {
                $scope.LANG = lang;
                console.log(lang.anasayfa.subTitle);
            }).error(function (err) {
                Service.alertShow("ÜZGÜNÜZ", null, "Dil dosyası bozuk veya yüklenemedi");
                localStorage.setItem(_prefixLang, $scope.defaultLang)
                $scope.secilenDil = $scope.defaultLang;
            });
    }
    $scope.LoadLang($scope.secilenDil);
    $scope.SelectLang = function (langslug) {
        $scope.secilenDil = langslug;
        localStorage.setItem(_prefixLang, langslug)
        $scope.LoadLang(langslug);
    }

    // SEPET İŞLEMLERİ
    var _prefixSepet = "_sepet";
    $scope.sepet = JSON.parse(localStorage.getItem(_prefixSepet));
    if ($scope.sepet == null)
        $scope.sepet = [];

    $scope.SepetAddItem = function (key, total) {
        var obj = {
            key: key,
            total: total
        }
        $scope.sepet.push(obj);
        localStorage.setItem(_prefixSepet, JSON.stringify($scope.sepet));
    }

    $scope.SepetRemoveItem = function (key) {
        for (var _key in $scope.sepet) {
            if ($scope.sepet[_key].key == key) {
                $scope.sepet.splice($scope.sepet.indexOf(_key), 1);
            }
        }
        localStorage.setItem(_prefixSepet, JSON.stringify($scope.sepet));
    }

    $scope.SepetClear = function () {
        $scope.sepet = [];
        localStorage.setItem(_prefixSepet, JSON.stringify($scope.sepet));
    }

})
