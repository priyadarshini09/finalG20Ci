/* eslint-disable*/
module.exports = function convert(startYear)
{
const readline = require('readline');
const fs = require('fs');


  if(typeof startYear=='string'){
   return "";
 }

  if(typeof startYear !== 'number' || isNaN(startYear))
 {
       throw new Error('Not a number');
 }
const rl = readline.createInterface({
 input: fs.createReadStream('Indicators.csv')
});
    var arr=[];
    rl.on('line', (line) =>
    {
     var cleanedLine =line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);    

     //  console.log(cleanedLine);


      if(cleanedLine[1]=="KHM" ||cleanedLine[1]=="AGO" ||cleanedLine[1]=="DEU" ||cleanedLine[1]=="MYS" ||cleanedLine[1]=="BTN" )
      {
        if(cleanedLine[3]=="SP.DYN.LE00.FE.IN")
        {
            obj={};
            obj["CountryName"]=cleanedLine[0];
            obj["Female"]=cleanedLine[5];
            obj["Year"]=cleanedLine[4];
        }
        if(cleanedLine[3]=="SP.DYN.LE00.MA.IN")    
        {            
            obj["Male"]=cleanedLine[5];
            arr.push(obj);
        }    
      }    
   });

rl.on('close', (line) => {
 console.log(JSON.stringify(arr,null,4));

});
return 'JSON written successfully';
};