// const companies = [
//   { name: "Apple", income: [300000, 25000, 100000], spend: [51000, 3000, 11000] },
//   { name: "Microsoft", income: [100000, 25000, 100000], spend: [20000, 9000, 12000] },
//   { name: "Google", income: [45000, 25000, 100000], spend: [23000, 5000, 19000] },
//   { name: "SpaceX", income: [3000, 7500, 20000], spend: [35000, 5000, 11000] },
//   { name: "GM motors", income: [300000, 25000, 100000], spend: [2000, 50000, 19000] },
// ];


// for (let item of companies) {
//   item.totalIncome = 0
//   for (let price of item.income) {
//     item.totalIncome += price
//   }
//   item.totalSpend = 0
//   for (let anyth of item.spend) {
//    item.totalSpend += anyth
//   }
// }


// console.log(companies);

let arr = [
  {
      id: Math.random(),
      name: 'Timur',
      info: {
          school: '235',
          faculity: 'SMM'
      },
  },
  {
      id: Math.random(),
      name: 'Imran',
      info: {
          school: 'ne izvestno',
          faculity: 'programming'
      },
  },
  {
      id: Math.random(),
      name: 'Aminjon',
      info: {
          school: '444',
          faculity: 'Dizayn'
      },
  },
  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },
  {
      id: Math.random(),
      name: 'Muxammad',
      info: {
          school: '5555',
          faculity: 'Backend'
      },
  },
  {
      id: Math.random(),
      name: 'Timur',
      info: {
          school: '235',
          faculity: 'SMM'
      },
  },
  {
      id: Math.random(),
      name: 'Imran',
      info: {
          school: 'ne izvestno',
          faculity: 'programming'
      },
  },
  {
      id: Math.random(),
      name: 'Aminjon',
      info: {
          school: '444',
          faculity: 'Dizayn'
      },
  },
  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },
  {
      id: Math.random(),
      name: 'Maxmud',
      info: {
          school: '777',
          faculity: '3dsmax'
      },
  },
  {
      id: Math.random(),
      name: 'Muxammad',
      info: {
          school: '5555',
          faculity: 'Backend'
      },
  },
]

let categories = [
  {
      course: ' SMM',
      count: 0
  },
  {
      course: 'PROGRAMMING',
      count: 0
  },
  {
      course: '     3DSMAX',
      count: 0
  },
  {
      course: ' DIZAYN',
      count: 0
  },
  {       
      course: '   BACKEND',
      count: 0
  },
]
for (let item of arr){
 let faculity = item.info.faculity.trim().toUpperCase()
 for(let category of categories){
  let course = category.course.trim().toUpperCase()
  if (faculity === course){
    category.count++
  }
 }
}

console.log(categories);

