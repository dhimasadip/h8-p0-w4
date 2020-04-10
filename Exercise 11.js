function shoppingTime(memberId, money) {
    // you can only write your code here!
    var sale = [
        {
            namaBarang: 'Sepatu Stacattu',
            harga: 1500000
        },
        {
            namaBarang: 'Baju Zoro',
            harga: 500000
        },
        {
            namaBarang: 'Baju H&N',
            harga: 250000
        },
        {
            namaBarang: 'Sweater Unikloh',
            harga: 175000
        },
        {
            namaBarang: 'Casing Handphone',
            harga: 50000
        }
    ]

    var result = {}

    for (var i = 0; i < sale.length; i ++) {
        for (var j = 0; j < sale.length-1; j++) {
            if (sale[j].harga < sale[j+1].harga) {
                var temp = sale[j+1]
                sale[j+1] = sale[j]
                sale[j] = temp
            }
        }

    }

    if (memberId == undefined || memberId == '') {return 'Mohon maaf, toko X hanya berlaku untuk member saja'}
    else if(sale[sale.length-1].harga > money) {return 'Mohon maaf, uang tidak cukup'}
    
    result.memberId = memberId
    result.money = money
    var tampung = []
    for (var i = 0; i < sale.length; i++) {
        if (sale[i].harga <= money) {
            tampung.push(sale[i].namaBarang)
            money -= sale[i].harga
        }
    }
    result.listPurcahsed = tampung
    result.changeMoney = money

    return result
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja