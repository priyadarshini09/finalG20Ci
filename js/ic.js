/*eslint-disable*/

module.exports = function convert(startYear)
{

const readline = require('readline');
const fs = require('fs');

var data=[];
var data_1=[];
var i=0,j=0;
var a=[];


const rl = readline.createInterface({
  input: fs.createReadStream('../inputdata/final.csv')
});

rl.on('line', (line) => {

   var cleanedLine=line.split(",");
			if(i==0)
				{
					var  cleanedLine =line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    				data=cleanedLine;
    				age_group=data.indexOf('Age-group');
    				//console.log(age_group);
    				literate_person=data.indexOf('Literate - Persons');
    				//console.log(literate_person);
    				i++;
				}

  		  data=line.split(',');

  		  a.push({"agegroup":data[age_group],"literateperson":data[literate_person]});
 
          //console.log(a);
  			
			});


rl.on('close', (line) => {
  console.log(JSON.stringify(a));
  fs.writeFile('../outputdata/ic.json',JSON.stringify(a));

});

};