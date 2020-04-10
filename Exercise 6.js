function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var retVal = Infinity

    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            var digit = ((angka/i).toString()).length + (i.toString()).length 
            if (digit < retVal) {
                retVal = digit
            }
        }
    }
    return retVal
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2