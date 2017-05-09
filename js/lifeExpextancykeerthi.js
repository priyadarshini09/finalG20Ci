/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');
var data_1=[];

var result=[];


var i=0;

var total=0;
module.exports = function convert(startYear)
{

	if(typeof startYear=='string'){
	   return "";
	 }

	if(typeof startYear !== 'number' || isNaN(startYear)) {
        	throw new Error('Not a number');
	 }
	 
const rl = readline.createInterface({
  input: fs.createReadStream('../inputdata/Indicators(1).csv')
});

rl.on('line', (line) => {
 

 data_1=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

//console.log(count);

if (data_1[0]=="Indonesia" || data_1[0]=="Iraq" || data_1[0]=="Iran, Islamic Rep." || data_1[0]=="Colombia" || data_1[0]== "Bangladesh"){

if(data_1[3]=="SP.DYN.LE00.FE.IN"){
obj={};
 x="CountryName";
 y="Year";

 f="female";
obj[x]=data_1[0];
obj[y]=data_1[4];
obj[f]=data_1[5];
}
if(data_1[3]=="SP.DYN.LE00.MA.IN"){
 m="male";
obj[m]=data_1[5];
result.push(obj);
}
}

console.log(result);
for(i=0;i<=55;i++)
{
total=+result[2];

console.log(total);

}});
rl.on('close', (line) => {
 console.log(JSON.stringify(result,null,1));
});
 return "JSON written successfully";
} 
