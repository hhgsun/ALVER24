MainApp.service('AuthService', function () {
    var auth = firebase.auth();
    var database = firebase.database();


    // auth

    this.createUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            auth.createUserWithEmailAndPassword(email, password).then(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            })
        });
    }

    this.signInUser = function (user) {
        return new Promise(function (resolve, reject) {
            auth.signInWithEmailAndPassword(user.email, user.password).then(function (data) {
                resolve(data)
            }, function (err) {
                reject(err)
            })
        });
    }

    this.signOutUser = function () {
        return new Promise(function (resolve, reject) {
            auth.signOut().then(function (data) {
                resolve(data)
                //ionic.Platform.exitApp();
            }, function (error) {
                reject(error)
            });
        });
    }

    this.activeUserId = function () {
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user.uid);
                } else {
                    reject(null)
                }
            });
        })
    }

    // database

    this.setUserData = function (user) {
        return new Promise(function (resolve, reject) {
            database.ref('users/' + user.uid).set({
                ad: user.ad,
                soyad: user.soyad,
                email: user.email,
                meslek: user.meslek,
                uid: user.uid
            }).then(function (data) {
                resolve(data)
            }, function (err) {
                reject(err)
            });
        });
    }

    this.getUserData = function (uid) {
        return new Promise(function (resolve, reject) {
            database.ref('users/' + uid).once('value')
                .then(function (snapshot) {
                    resolve(snapshot.val())
                }, function (err) {
                    reject(err)
                });
        });
    }

    



});