MainApp.service('Kategori', function () {
    var database = firebase.database();

    this.filterGetData = function (ustKategoriId) {
        return new Promise(function (resolve, reject) {
            database.ref('kategoriler').once('value')
                .then(function (snapshot) {
                    var kategoriler = [];
                    var data = snapshot.val();
                    for (var key in data) {
                        if (data[key].ustKategori == ustKategoriId) {
                            data[key].key = key;
                            kategoriler.push(data[key])
                        }
                    }
                    resolve(kategoriler)
                }, function (err) {
                    reject(err)
                });
        });
    }

    this.setData = function (val) {
        return "";
    }

    this.getData = function (key) {
        return "";
    }

    this.removeData = function (key) {
        return "";
    }

})