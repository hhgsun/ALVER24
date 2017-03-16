MainApp.controller('UrunEkleCtrl', function ($scope, $state, $stateParams, Kategori, Service) {
    $scope.urunData = {};
    $scope.ustKategori = {};

    // Üst kategorileri getir
    Kategori.filterGetData("yok").then(function (kategoriler) {
        $scope.anaKategoriler = kategoriler;
        $scope.$apply(); // sürekli yenileme yapar angularjs dataları vs.
    }, function (err) {
        console.log(err);
    })

    // secilen ustKategori nin altKategoriler i getirir
    $scope.altKategorileriGetir = function () {
        $scope.altKategoriler = [];
        Kategori.filterGetData($scope.ustKategori.key).then(function (kategoriler) {
            $scope.altKategoriler = kategoriler;
            $scope.$apply();
        }, function (err) {
            console.log(err);
        })
    }

    // urunData Gönderme işlemi
    $scope.urunGonderBtn = function () {
        var urunData = $scope.urunData;
        if (urunData.baslik == undefined || urunData.baslik == "") {
            Service.alertShow("Başlık Giriniz");
        } else if (urunData.urunAdi == undefined || urunData.urunAdi == "") {
            Service.alertShow("Ürün Adı Giriniz")
        } else if (urunData.aciklama == undefined || urunData.aciklama == "") {
            Service.alertShow("Açıklama Giriniz")
        } else if (urunData.fiyat == undefined || urunData.fiyat == "") {
            Service.alertShow("Fiyat Belirtiniz")
        } else if (urunData.kategoriId == undefined || urunData.kategoriId == "") {
            Service.alertShow("Kategori Seçimi Yapınız")
        } else {
            Service.loading();
            Urun.pushData(urunData).then(function (data) {
                console.log(data.key);
                Service.loadingHide();
                $scope.urunData = {};
                $scope.modal.hide();
            }, function (err) {
                Service.loadingHide();
                console.log(err);
                Service.alertShow(err)
            })
        }
    }

    //input İmages
    $scope.fileChanged = function (ev) {
        console.log(ev)
    }

    //Close
    $scope.closePage = function () {
        console.log("İPTAL");
        $state.go("app.anasayfa");
    }
})