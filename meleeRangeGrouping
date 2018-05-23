
function meleeRangedGrouping(str) {
    //your code here
    var arrRanged = []
    var arrMelee = []
    var arr = []
    var tampung = ''
    var result = []


    if (str.length === 0) {
        return []
    }
    //Erase unwanted string
    for (i = 0; i < str.length; i++) {


        if (str[i] !== '-' && str[i] !== ',') {

            tampung += str[i]

        } else {
            arr.push(tampung)
            tampung = ''
        }
    }

    arr.push(tampung)

    //the match the string
    for (i = 0; i < arr.length; i += 2) {

        if (arr[i + 1] === 'Ranged') {

            arrRanged.push(arr[i])
        } else {

            arrMelee.push(arr[i])
        }


    }
    result.push(arrRanged, arrMelee)

    return result

 }

// // TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//[ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
