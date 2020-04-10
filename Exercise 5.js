function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var newKata = ''

    for (var j = 0; j < kata.length; j++) {
        for (var i = 0; i < alphabet.length; i++) {
            
            if (kata[j] == 'z') {
                newKata += ''
            } else if (alphabet[i] == kata[j]) {
                newKata += alphabet[i+1]
            }
        }
    }
    return newKata
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developerz')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu