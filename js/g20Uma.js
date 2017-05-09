/*eslint-disable*/
const readline = require('readline');
const fs = require('fs');


var data=[];
var data_1=[];
var i=0,j=0;


var a=[];
var b=[];
var a_json=[];
var b_json=[];

// let country_index=0;
// let population_index=0;
// let gdp_index=0;

module.exports = function convert(startYear)
{

if(typeof startYear=='string'){
  return "";
}
if (typeof startYear !== 'number' || isNaN (startYear)) {
  throw new Error('Not a number');
}
const rl = readline.createInterface({
  input: fs.createReadStream('table.csv')
});

rl.on('line', (line) => {
	console.log("lllllllllllllll"+line);


if(i==0)
 {
    data_1=line.split(',');
    console.log("ssssssssssssssss"+data_1);
    country_index=data_1.indexOf('Country Name');
    console.log("uuuuuuuuuuuuuuuuuu"+country_index);
    population_index=data_1.indexOf('Population (Millions) - 2013');
    console.log("uuuuuuuuuuuuuuuuuu"+population_index);
    gdp_index=data_1.indexOf('GDP Billions (US$) - 2013');
    console.log("uuuuuuuuuuuuuuuuuu"+gdp_index);
    i++;
}

data_1=line.split(',');

a.push({"country":data_1[country_index],"gdp":data_1[gdp_index]});
//console.log("ccccccccccountry ggggggggggdp"+a);
   b.push({"country":data_1[country_index],"population":data_1[population_index]});



});
setTimeout(function(){
    a.pop();
    a.pop();
    b.pop();
    b.pop();
    //console.log(a);
    //console.log(b);
a_json=JSON.stringify(a);
b_json=JSON.stringify(b);
console.log(a[1].country);
console.log(a_json);
console.log(b_json);
},500);
return 'JSON written successfully';
}

 