
function highestScore(students) {
  var obj = {}
  var arr = []

  if (students.length === 0) {
    return {}
  }

  for (var j = 0; j < students.length; j++) {

    obj[students[j]['class']] = {

      name: '',
      score: ''

    }

    var highest = 0;

    for (var s = 0; s < students.length; s++) {

      if (students[j].class === students[s].class && students[s].score > highest) {
        highest = students[s].score;

        obj[students[s]['class']].name = students[s].name
        obj[students[s]['class']].score = students[s].score

      }

      console.log
    }
  }

  for (var k in obj) {

    arr.push(obj[k])

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
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }
