// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var MainApp = angular.module('starter', ['ionic'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

MainApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHUjTSw5DmCQK2o_htQ9Hv2FRkq7nbrOA",
    authDomain: "alver24-d0f44.firebaseapp.com",
    databaseURL: "https://alver24-d0f44.firebaseio.com",
    storageBucket: "alver24-d0f44.appspot.com",
    messagingSenderId: "957345042732"
  };
  firebase.initializeApp(config);

  $ionicConfigProvider.backButton.text('Geri').icon('ion-chevron-left');
  $stateProvider
    // App Genel Template ve anasayfa
    .state('app', {
      url: '/app', abstract: true,
      templateUrl: 'templates/sidemenu/sidemenu.html',
      controller: 'SideMenuCtrl' // AppCtrl
    })
    .state('start', {
      url: '/start', abstract: false,
      templateUrl: 'templates/start/start.html',
      controller: 'StartCtrl'
    })

    // TEMPLATE PAGES
    .state("login", {
      url: "/login",
      templateUrl: "templates/login/login.html",
      controller: "LoginCtrl"
    })
    .state("singup", {
      url: "/singup",
      templateUrl: "templates/login/singup.html",
      controller: "LoginCtrl"
    })

    .state('app.anasayfa', {
      url: '/anasayfa',
      views: {
        'viewContent': {
          templateUrl: 'templates/anasayfa/anasayfa.html',
          controller: 'AnasayfaCtrl'
        }
      }
    })
    .state('app.kategoriler', {
      url: '/kategoriler/:key?:baslik',
      views: {
        'viewContent': {
          templateUrl: 'templates/kategoriler/kategoriler.html',
          controller: 'KategorilerCtrl'
        }
      }
    })
    .state('app.urunlistele', {
      url: '/urunlistele/:key?:baslik',
      views: {
        'viewContent': {
          templateUrl: 'templates/urunlistele/urunlistele.html',
          controller: 'UrunListeleCtrl'
        }
      }
    })
    .state('app.urunekle', {
      url: '/urunekle:key',
      views: {
        'viewContent': {
          templateUrl: 'templates/urunekle/urunekle.html',
          controller: 'UrunEkleCtrl'
        }
      }
    })
    .state('app.urundetay', {
      url: '/urundetay/:key?:baslik',
      views: {
        'viewContent': {
          templateUrl: 'templates/urundetay/urundetay.html',
          controller: 'UrunDetayCtrl'
        }
      }
    })
    .state('app.sepet', {
      url: '/sepet',
      views: {
        'viewContent': {
          templateUrl: 'templates/sepet/sepet.html',
          controller: 'SepetCtrl'
        }
      }
    })

    .state('app.ilanbolumu', {
      url: '/ilanbolumu',
      views: {
        'viewContent': {
          templateUrl: 'templates/ilanbolumu/ilanbolumu.html',
          controller: 'IlanBolumuCtrl'
        }
      }
    })



    //hesabim için
    .state('app.hesabim', {
      url: '/hesabim',
      views: {
        'viewContent': {
          templateUrl: 'templates/hesabim/hesabim.html',
          controller: 'HesabimCtrl'
        }
      }
    });
  hesabim_Sayfalar($stateProvider);

  // ilk girilecek sayfa
  $urlRouterProvider.otherwise('/start');
});


function hesabim_Sayfalar($stateProvider) {
  var hesabimSayfalar = [];
  hesabimSayfalar.push("adreslerim");
  hesabimSayfalar.push("adreslerimduzenle");
  hesabimSayfalar.push("bilgilerim");
  hesabimSayfalar.push("diller");
  hesabimSayfalar.push("odemeayarlarim");
  hesabimSayfalar.push("puanbilgileri");
  hesabimSayfalar.push("referanslarim");
  hesabimSayfalar.push("referanslarimduzenle");
  hesabimSayfalar.push("siparislerim");
  hesabimSayfalar.forEach(function (sayfa) {
    $stateProvider.state('app.hesabim_' + sayfa, {
      url: '/hesabim_' + sayfa, views: {
        'viewContent': {
          templateUrl: 'templates/hesabim/_' + sayfa + '.html',
          controller: sayfa + 'Ctrl'
        }
      }
    })
  });
  return;
}