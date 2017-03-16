MainApp.service('Urun', function () {
    var database = firebase.database();
    this.filterGetData = function (kategoriId) { //belli kategori ürünleri
        return new Promise(function (resolve, reject) {
            database.ref('urunler').once('value')
                .then(function (snapshot) {
                    var urunler = [];
                    var data = snapshot.val();
                    for (var key in data) {
                        if (data[key].kategoriId == kategoriId) {
                            data[key].key = key;
                            urunler.push(data[key])
                        }
                    }
                    resolve(urunler)
                }, function (err) {
                    reject(err)
                });
        });
    }

    this.getData = function (key) {
        return new Promise(function (resolve, reject) {
            database.ref('urunler/' + key).once('value')
                .then(function (snapshot) {
                    var data = snapshot.val();
                    data.key = snapshot.key;
                    resolve(data)
                }, function (err) {
                    reject(err)
                });
        });
    }

    this.pushData = function (val) {
        return new Promise(function (resolve, reject) {
            database.ref('urunler').push(val)
                .then(function (snapshot) {
                    resolve(snapshot)
                }, function (err) {
                    reject(err)
                });
        });
    }

    this.removeData = function (key) {
        return "";
    }

})