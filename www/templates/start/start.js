MainApp.controller('StartCtrl', function ($scope, $state, $timeout, $http, $ionicPopup, AuthService) {
    // aktif kullanıcı kontrolü
    AuthService.activeUserId().then(function(uid){
        $state.go("app.anasayfa")
    },function(){
        $state.go("login")
    })
})