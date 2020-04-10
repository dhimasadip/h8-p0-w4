function tukarBesarKecil(kalimat) {
  // you can only write your code here!

    var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var retVal = ''

    for (var i = 0; i < kalimat.length; i++) {
        for (var j = 0; j < lowerCase.length; j++) {
            var check = true
            for (var k = 0; k < lowerCase.length; k++) {
                if (kalimat[i] == lowerCase[k] || kalimat[i] == upperCase[k]) {check = false}
            }
 
            if (kalimat[i] == lowerCase[j]) {
                retVal += upperCase[j]
                break
            } else if (kalimat[i] == upperCase[j]){
                retVal += lowerCase[j]
                break
            } else if (check == true) {
                retVal += kalimat[i]
                break
            }
        }
    }
    return retVal
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"