/*eslint-disable*/
module.exports = function convert(startYear)
	{
	if(typeof startYear=='string')
	{
	 return "";
	}

	if(typeof startYear !== 'number' || isNaN(startYear))
	{
	throw new Error('Not a number');
	}

	const readline = require('readline');
	const fs = require('fs');

	const rl = readline.createInterface({
	  input: fs.createReadStream('/home/user/Desktop/expectancy/js_dev_boilerplate/inputdata/Indicators(1).csv')
	});
	
 	var arr=[];
	rl.on('line', (line) => 
	{
 	 var cleanedLine =line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
	//  console.log(cleanedLine);


	  if(cleanedLine[1]==="KHM" ||cleanedLine[1]==="AGO" ||cleanedLine[1]==="DEU" ||cleanedLine[1]==="MYS" ||cleanedLine[1]==="BTN" )
	  	{
			if(cleanedLine[3]==="SP.DYN.LE00.FE.IN")
			{
				obj={};
				obj["CountryName"]=cleanedLine[0];
				obj["Female"]=cleanedLine[5];
				obj["Year"]=cleanedLine[4];
			}
			if(cleanedLine[3]==="SP.DYN.LE00.MA.IN")	
			{			
				obj["Male"]=cleanedLine[5];
				arr.push(obj);
			}

	  	}
	  			
	  	
    });

rl.on('close', (line) => {
	// for(i=0;i<arr.length;i++)
	//   {
	//   	var sum=0;
	//   	sum=sum+arr[i].Female;
	//   	console.log("Sum is"+sum);
	//   }

	  console.log(JSON.stringify(arr,null,4));

		fs.writeFile('../outputdata/output.json',JSON.stringify(arr,null,1));
	  
});
return "JSON written successfully";
};

