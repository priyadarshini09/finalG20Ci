/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');
module.exports = function convert(startYear)
{
  if(typeof startYear=='string'){
   return "";
 }
  if(typeof startYear !== 'number' || isNaN(startYear))
  {
        throw new Error('Not a number');
  }
const rl = readline.createInterface({
  input: fs.createReadStream('../inputdata/crimedata.csv')
});

var more500 = 0;
var less500 = 0;
var arrestFalse = 0;
var arrestTrue = 0;

rl.on('line', (line) => {
	var cleanedLine =line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	var date = cleanedLine[2];
	var money = cleanedLine[6];
	var arrest = cleanedLine[8];
  	if(money=="OVER $500")
  	{
  		more500++;
  		console.log(more500+" "+money);
  	}

  	if(money=="$500 AND UNDER")
  	{
  		less500++;
  		console.log(less500+" "+money);
  	}

  	if(arrest=="false")
  	{
  		arrestFalse++;
  		console.log(arrestFalse+" "+arrest);
  	}

  	if(arrest=="true")
  	{
  		arrestTrue++;
  		console.log(arrestTrue+" "+arrest);
  	}
});

rl.on('close', (line) => {
  
});
return 'JSON written successfully';

};