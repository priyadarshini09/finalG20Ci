/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');
var data_1=[];
var country=0;
var year=0;
var value=0;
var indicator=0;

var lineCount = 0;

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
  input: fs.createReadStream('../inputdata/Indicators.csv')
});

var result = [];
for(let i=0;i<55;i++)
{
	result.push({year:(1960+i),Ruralvalue:0,Urbanvalue:0});
}

rl.on('line', (data) => {
 // var cleanedLine =data.split(",");
//  console.log(cleanedLine);
	data_1=data.split(",");
	if(data_1[country]=='India')
	{
		 if(data_1[indicator]=='Rural population (% of total population)')
		        result[data_1[year]-1960].Ruralvalue =  data_1[value];
         if(data_1[indicator]=='Urban population (% of total)')
                result[data_1[year]-1960].Urbanvalue =  data_1[value];

	}
		
});
rl.on('close', (data) => {
 let jsonobj=JSON.stringify(result,null,1);
 console.log(jsonobj);
fs.writeFile('../outputdata/output.json',JSON.stringify(result,null,1));
});

return 'JSON written successfully';
}
