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