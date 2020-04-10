function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var biayaPerRute = 2000
    var result = []

    if (arrPenumpang == 0) {return result}
    for (var i = 0; i < arrPenumpang.length; i++) {
        var tampung = {penumpang: arrPenumpang[i][0]}

        for (var j = 0; j < rute.length; j++) {
            biaya += biayaPerRute
            if (rute[j] == arrPenumpang[i][1]) {
                var biaya = 0
            } else if (rute[j] == arrPenumpang[i][2]) {
                tampung.naikDari = arrPenumpang[i][1]
                tampung.tujuan = arrPenumpang[i][2]
                tampung.bayar = biaya
                break
            }
        }
        result.push(tampung)
    }
    return result
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]