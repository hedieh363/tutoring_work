// print the full date in the formate mm-dd-yyyy us getmonth, getdate,getfullyear

// getmonth gives number 0-11
//getdate gives 1-31
// getFullyear gies 4 digits

//QUESTION: I had the right stuff but I needed to call it on the class Date? Can we go over lines 9-12 please on Monday. 

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();


// var month =(getMonth() + 1);

if (month < 10)
{
		month = ("0" + month);
}


// var day = getDate();

if (day < 10)
{
		day = ("0" + day);
}



console.log(month + "-" + day + "-" + year);


console.log("----------------")

// print current day and time in the formate:
// Today is: Firday. Current time is : 4 PM: 50:22

day_array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


day = day_array[getDay()]
var time = 0;
if (getHour > 12)
	{time = (getHours()-12)/2)) + "PM";}
elsif (getHour === 12)
	{time = console.log ("The time is 12 PM")}
else 
	{time = console.log("The time is" + gethours() + "AM")}

console.log("Today is" + day + "."+ "Current time is: " + time + getMinutes : getSeconds)




