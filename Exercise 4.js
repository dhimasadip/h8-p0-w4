function cariModus(arr) {
    // you can only write your code here!

    var angka = {}

    for (i = 0; i < arr.length; i++) {
        if (angka['angka' + arr[i]] == undefined) {
            angka['angka' + arr[i]] = 0
        }
        angka['angka' + arr[i]] ++
    }

    var bigNumber = 1
    for (var key in angka) {
        if (angka[key] > bigNumber && Object.keys(angka).length != 1) {
            bigNumber = angka[key]
            var keyNumber = ''

            for (i = 0; i < key.length; i++) {
                if (!isNaN(Number(key[i]))) {
                    keyNumber += key[i]
                }
            }

        } else if (bigNumber == 1) {
            var keyNumber = -1
        } 
    }
    return keyNumber
  }
  
//   // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1