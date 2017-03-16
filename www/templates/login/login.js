MainApp.controller('LoginCtrl', function ($scope, $state, $timeout, $http, $ionicPopup, $ionicHistory, AuthService) {

    $scope.girisYap = function (user) {
        console.log(user)
        AuthService.signInUser(user).then(function (data) {
            if (data.uid) {
                $state.go("app.anasayfa");
            }
        }, function (err) {
            $ionicPopup.alert({ title: "Dikkat!", content: err.message });
        })
    }

    $scope.kayitYap = function (user) {
        if (user == undefined) {
            $ionicPopup.alert({
                title: "Dikkat!",
                content: "Lütfen bilgileriniz tam giriniz."
            });
        } else {
            if (user.ad && user.soyad && user.meslek && user.email && user.password) {
                AuthService.createUser(user.email, user.password)
                    .then(
                    function (data) {
                        user.uid = data.uid;
                        AuthService.setUserData(user).then(function (data) {
                            $state.go("app.anasayfa");
                        }, function (err) {
                            $ionicPopup.alert({ title: "Dikkat!", content: "Lütfen bilgileriniz tam giriniz." });
                        })
                    },
                    function (err) {
                        console.log(err);
                        switch (err.code) {
                            case "auth/email-already-in-use":
                                $ionicPopup.alert({ title: "Dikkat!", content: "Lütfen bilgileriniz tam giriniz." });
                                break;
                            case "auth/weak-password":
                                $ionicPopup.alert({ title: "Dikkat!", content: "Şifreniz en az 6 karakter olmalı." });
                                break;
                            case "auth/argument-error":
                                $ionicPopup.alert({ title: "Dikkat!", content: "Mail adresiniz geçersiz." });
                                break;
                            default:
                                $ionicPopup.alert({ title: "Dikkat!", content: "Lütfen Mail ve Şifrenizi dikkatli giriniz." });
                                break;
                        }
                    })
            } else {
                $ionicPopup.alert({
                    title: "Dikkat!",
                    content: "Lütfen bilgileriniz kontrol ediniz."
                });
            }
        }
    }

})