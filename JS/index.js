//Array Cardio Day1
//some data we can work with

const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Fazan', last: 'Wrthyjk', year: 1456, passed: 1678},
  {first: 'Alina', last: 'Ertghj', year: 1234, passed: 1987},
  {first: 'Max', last: 'Tyhj', year: 1789, passed: 1345},
  {first: 'Nikita', last: 'Ysdfghj', year: 1345, passed: 1876},
  {first: 'Dasha', last: 'Afghj', year: 1580, passed: 1456},
  {first: 'Vadym', last: 'Dghjk', year: 1542, passed: 1789},
];

const people = ['Oliver','Jack','Harry','Jacob','Charlie','Thomas','Oscar', 'William',
'George','Dfghj','Dhjkm','Rtyh','Cvbhj','Ughnm','Adfghj'];

//Array.prototype.filter()
//1.Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(inventor =>(inventor.year >= 1500 && inventor.year 
< 1600));
console.table(fifteen);

//Array.prototype.map()
//2. Give us an array of the invectory first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);  

//Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a,b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// })

const ordered = inventors.sort((a,b)=> a.year > b.year ? 1: -1)
console.table(ordered);


//Array.prototype.reduce()
//4. How many years did all the inventors live?

const totalYears = inventors.reduce((total,inventor) => {
  return total + (inventor.passed - inventor.year);
},0)

console.log(totalYears);

//5. Sort the inventors by years lived
const oldest = inventors.sort(function(a,b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

//6.
const category = document.querySelector('.mw-category');
const link = Array.from(category.querySelectorAll('a'));
const de = link 
              .map(link => link.textContent)
              .filter(streetName => streetName.includes('de'));

//7. sort Exircise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

//8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'cfghj', 'cokijhg'];

const transportation = data.reduce(function(obj, item) {
  if(!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
},{});

//Array Cardio Day2
const people = [
  {name:'Kata', year: 1988},
  {name:'Dasha', year: 1986},
  {name:'Daniel', year: 1970},
  {name:'Alisa', year: 2015},
];

const comments = [
  {text:'Love this!', id: 456786},
  {text:'Super good', id: 456789},
  {text:'You are the best', id: 823423},
  {text:'Ramen in my fav food ever', id:756788},
  {text:'Nice Nice Nice!', id: 567899},
]


//Some and Every Checks
//Array.prototype.some()// is at least one person 19?
// const isAdult = people.some(function(person){
//   const currentYear = (new Data()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// })

const isAdult = people.some(person => ((new Data()).getFullYear()) -  person.year >= 19);

console.log({isAdult});

//Array.prototype.every()// is everyone 19?

const allAdults = people.every(person => ((new Data()).getFullYear()) -  person.year >= 19);
console.log(allAdults);

//Array.prototype.find()
//Find is like filter, but instead returns just the one you are looking for
//find the comment with the ID of 823423
// const comment = comments.find (function(comment) {
//   if(comment.id === 823423) {
//     return true;
//   }
// });

const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

//Array.prototype.findIndex()
//Find the comment with this ID
//delete the comment with the ID of 823423

const comment = comments.findIndex(comment => comment.id === 823423);
console.log(index);
// comments.splice(index, 1);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1),
];
