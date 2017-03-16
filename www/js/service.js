MainApp.service('Service', function ($ionicPopup, $ionicLoading) {


    this.alertShow = function (title, subTitle, content) {
        $ionicPopup.show({
            template: content,
            title: title,
            subTitle: subTitle,
            buttons: [{
                text: '<b>Tamam</b>',
                type: 'button-positive'
            }]
        });
    }

    this.loading = function (text) {
        $ionicLoading.show({
            template: text ? text : '<ion-spinner></ion-spinner>',
            duration: 3000
        })
    }
    this.loadingHide = function () {
        setTimeout(function () {
            $ionicLoading.hide();
        }, 1000);
    }


});