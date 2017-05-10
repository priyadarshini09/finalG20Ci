/* Importing modules*/
const readline = require('readline');
const fs = require('fs');
/* Variable declaration*/
let dataOne = [];
let i = 0;
let countryIndex;
let gdpIndex;
let populationIndex;
let a = [];
let b = [];
let aJson = [];
let bJson = [];
/* function to validate startYear*/
module.exports = function convert(startYear) {
 if(typeof startYear === 'string') {
  return '';
 }
 if(typeof startYear !== 'number' || isNaN(startYear)) {
  throw new Error('Not a number');
 }
 /* creating readstream*/
	const rl = readline.createInterface({
    input: fs.createReadStream('table.csv')
  });
/* function to read input data line by line and split according to comma;
to find the index of headers
*/
rl.on('line', (line) => {
 if(i === 0) {
  dataOne = line.split(',');
  countryIndex = dataOne.indexOf('Country Name');
  populationIndex = dataOne.indexOf('Population (Millions) - 2013');
  gdpIndex = dataOne.indexOf('GDP Billions (US$) - 2013');
  i = 1;
 }
 /* splitting received data by comma;
pushing the split data into an array;
 */
 dataOne = line.split(',');
 a.push({country: dataOne[countryIndex], gdp: dataOne[gdpIndex]});
 b.push({country: dataOne[countryIndex], population: dataOne[populationIndex]});
});
setTimeout(function() {
	a.pop();
	a.pop();
	b.pop();
	b.pop();
	a.shift();
	b.shift();
  /* sorting in decending order*/
	a.sort(function(x, y) {return parseFloat(y.gdp) - parseFloat(x.gdp);});
	b.sort(function(x, y) {return parseFloat(y.population) - parseFloat(x.population);});
  /* JSON creation*/
	aJson = JSON.stringify(a);
	bJson = JSON.stringify(b);
	fs.writeFile('outputOneG20Priyadarshini.json', aJson);
	fs.writeFile('outputTwoG20Priyadarshini.json', bJson);
}, 500);
return 'JSON written successfully';
};
