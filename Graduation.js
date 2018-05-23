

console.log(highestScore([])); 


function graduates(students) {
  if (students.length === 0 || !students.length) {
    return {}
  }
  obj = {}
  grad = {}
  for (var j = 0; j < students.length; j++) {
    obj[students[j]['class']] = []
    if (students[j].score > 75) {
      grad[students[j]['name']] = {
        name: students[j].name,
        score: students[j].score
      }
    }
    
    for (var a = 0; a < students.length; a++) {
      if (students[j]['class'] == students[a]['class']) {
        if (grad[students[a]['name']] !== undefined) {
          obj[students[j]['class']].push(grad[students[a]['name']])
        }

      }

    }
  }
  return obj
}

console.log(graduates([
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

{
  foxes: [
    { name: 'Dimitri', score: 90 }
  ],
  wolves: [
    { name: 'Alexei' , score: 85 },
    { name: 'Anastasia', score: 78 }
  ]
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


// console.log(graduates([])); //{}
