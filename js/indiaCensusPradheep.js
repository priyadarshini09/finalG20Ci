/*eslint-disable*/
module.exports = function convert(startYear)
{
  if(isNaN(startYear))
 {
       throw new Error('Not a number');
 }
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

//  var cleanedLine=line.split(",");
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
           if(data[age_group]!="Age-group"&& data[literate_person]!="Literate - Persons")
           {
           a.push({"agegroup":data[age_group],"literateperson":data[literate_person]});
          }
            // var wr=fs.createWriteStream('copy.csv');
            // wr.write(data);
          //  fs.writeFile('copy.csv',a);
            //xc.write(a);
          var js=JSON.stringify(a)
            //console.log(js);
            fs.writeFile('../outputdata/indiaCensusPradheep.json',js);
            });
            return "JSON written successfully";
};
