/*eslint-disable*/
const fs=require('fs');
var n1=function convert(startYear)
{
var lineReader = require('readline').createInterface({
input: fs.createReadStream('../inputdata/Indicators.csv')
});

if( isNaN(startYear))
 {
       throw new Error('Not a number');
 } 




var array=[];
lineReader.on('line', function (line) {
   //var l=line;
   var linearray=line.split(',');
   if(linearray[1]=="IND")
   {
       var obj={};
       if(linearray[3]=="SP.URB.TOTL.IN.ZS")
       {
       obj["country"]=linearray[0];
       obj["urban_pop"]=linearray[5];
       obj["year"]=linearray[4];
       array.push(obj);
       }
       if(linearray[3]=="SP.RUR.TOTL.ZS")
       {
       obj["country"]=linearray[0];
       obj["rural_pop"]=linearray[5];
       obj["year"]=linearray[4];
       array.push(obj);
       }
   }
});
var secarray=[];
var jsonobj;
lineReader.on('close',function()
{

  for(var i=0;i<array.length;i=i+2)
  {
     if(array[i].year==array[i+1].year)
        {
          array[i]['urban_pop']=array[i+1].urban_pop;  
          secarray.push(array[i]);
        }
  }
  
  jsonobj=JSON.stringify(secarray);
  console.log(jsonobj);
  fs.writeFile("../outputdata/worldDevolopmentVijay.json",jsonobj);
});

return "JSON written successfully"

};
//n1(2001);
module.exports=n1;
