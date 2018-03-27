
function highestScore(students) {
    var arr = []

    if (students.length === 0) {
        return {}
    }

    for (j = 0; j < students.length; j++) {

        var objId = {}
        objId.name =''
        objId.score =''

        var objHighest = {}
        objHighest[students[j].class] = objId

        counter = 0

        for (i = 0; i < students.length; i++) {

            if (students[j].class === students[i].class) {
                counter++

            }

            if (students[j].class === students[i].class && students[j].score > students[i].score) {
                counter++
                objId.name = (students[j].name)
                objId.score = (students[j].score)

            }
        }

        if (counter === 1) {
            objId.name = (students[j].name),
                objId.score = (students[j].score)
        }

        // 
        //console.log(counter)
        //console.log(objId)
        //return objHighest
        arr.push(objHighest)

    }

    if (objId ==='') {

        return "    "
    }

    return arr
}

// TEST CASE
console.log(highestScore([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tiger'
    }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


// console.log(highestScore([])); //{}
