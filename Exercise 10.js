function changeMe(arr) {
    // you can only write your code here!

        for ( var i = 0; i < arr.length; i++) {
                var bio = {}

                var objName = `${i+1}. ${arr[i][0]} ${arr[i][1]}`
                bio[objName] = {}
                bio[objName].firstName = arr[i][0]
                bio[objName].lastName = arr[i][1]
                bio[objName].gender = arr[i][2]

                if (!(arr[i][3])) {
                    bio[objName].age = 'Invalid Birth Year'
                } else {
                    bio[objName].age = 2020 - arr[i][3]
                }
                
                console.log(bio);
                
        }
        
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""