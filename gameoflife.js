// Ayite D'almeida
//Scatter Plot Part 3
// CISC 131 05-05-2015
window.onload = function()
{
	var x;
	var firstDimension;
	var gameBoardArray;
	var tempArray;
	var secondDimension;

	firstDimension = window.prompt("Enter a Number");
	secondDimension = window.prompt("Enter a Number");

	firstDimension = Number(firstDimension);
	secondDimension = Number(secondDimension);


	gameBoardArray = create2dArray(3,3,getDeadValue());
	tempArray      = copy2dArray(gameBoardArray);
	createGameBoard(document.getElementById("gameBoard"), gameBoardArray);
	gameBoardArray = createFirstGenerationArray(gameBoardArray);
	window.alert(isInArray(gameBoardArray[0][0]));
	for(i = 0; i < gameBoardArray.length; i++)
	{
		for(j = 0; j < gameBoardArray[i].length; j++)
		{
			document.getElementById("row" + i + "col" + j).innerHTML = "" + gameBoardArray[i][j];
		}
	}

	for(i = 0; i < gameBoardArray.length; i++)
		{
			for(j = 0;j < gameBoardArray[i].length; j++)
			{
				if(document.getElementById("row" + i + "col" + j).innerHTML === "0")
				{
					document.getElementById("row" + i + "col" + j).style.backgroundColor = getDeadColor();
				}
				else
				{
					document.getElementById("row" + i + "col" + j).style.backgroundColor = getLiveColor();
				}
			}
		}

};
function countLivingNeighBors(array2d, row, col)
{
	var count;
	count = 0;
	if(isInArray(array2d[row][col]) == true)
{
	if( row === 0 && col === 0)
	{
		//checks corner piece of (0,0) neighbors for values
		if(document.getElementById("row"+ row + "col" + (col + 1)).style.backgroundColor == getLiveColor())
		{

			count++
		}
		if(document.getElementById("row"+ (row + 1)+ "col" + (col)).style.backgroundColor == getLiveColor())
		{
			count++
		}
		if(document.getElementById("row"+ (row + 1)+ "col" + (col + 1)).style.backgroundColor == getLiveColor())
		{
			count++
		}
	}
	else if(row === 0 && col === array2d.length - 1)
	{
		//checks corner piece of (0,length -1 ) neighbors for values
		if(document.getElementById("row"+ row + "col" + (col - 1)).style.backgroundColor == getLiveColor())
		{

			count++
		}
		if(document.getElementById("row"+ (row + 1)+ "col" + (col)).style.backgroundColor == getLiveColor())
		{
			count++
		}
		if(document.getElementById("row"+ (row + 1)+ "col" + (col - 1)).style.backgroundColor == getLiveColor())
		{
			count++
		}
	}
	else if(row === array2d.length - 1 && col === 0)
	{
		//checks corner piece of (length -1 , 0) neighbors for values
		if(document.getElementById("row"+ (row - 1) + "col" + (col)).style.backgroundColor == getLiveColor())
		{

			count++
		}
		if(document.getElementById("row"+ (row - 1)+ "col" + (col + 1)).style.backgroundColor == getLiveColor())
		{
			count++
		}
		if(document.getElementById("row"+ (row)+ "col" + (col + 1)).style.backgroundColor == getLiveColor())
		{
			count++
		}
	}
	else if(row === array2d.length - 1 && col === array2d.length - 1)
	{

	}

 }
	return count;
}
function createFirstGenerationArray(array2d)
{
	var i;
	var j;
	var k;
	var row;
	var col;

	for(i = 0; i < array2d.length; i++)
	{
		for(j=0; j < array2d[i].length; j++)
		{
			if(i === j || i == j || (i + j) % 2 === 0)
			{
				array2d[i][j] = getAliveValue();
			}
		}
	}
	return array2d;
}
function isInArray(array2d, row, cols)
{
	var bool;
	bool = false;

	if((row >= 0 && cols >= 0) && (row < array2d.length && cols < array2d[cols].length))
	{
		bool = true;
	}
	return bool;
}
function createGameBoard(containerElement, array2d)
{
	var html;
	html = "";


	for(i = 0; i < array2d.length; i++)
	{
		for(j = 0; j < array2d[i].length; j++)
		{
			if(i===0 && j<(array2d[i].length - 1))
			{
			html = html + createHTMLElement("div", "row" + i + "col" + j, "cell firstRow", "");
			}

			if(i===0 && j===(array2d[i].length - 1))
			{
			html = html + createHTMLElement("div", "row" + i + "col" + j, "cell firstRow lastColumn", "");
			}

			if(i>0 && j===0)
			{
			html = html + createHTMLElement("div", "row" + i + "col" + j, "cell newRow", "");
			}

			if(i>0 && j<(array2d[i].length - 1) && j>0)
			{
			html = html + createHTMLElement("div", "row" + i + "col" + j, "cell", "");
			}

			if(i>0 && j===(array2d[i].length - 1))
			{
			html = html + createHTMLElement("div", "row" + i + "col" + j, "cell lastColumn", "");
			}


		}
	}
	containerElement.innerHTML = html;
}
function copy2dArray(array)
{
	var result;
	result = new Array(array.length);

	for(i = 0; i < array.length; i++)
	{
		result[i] = new Array(array[i].length);
		for(j = 0; j < array[i].length; j++)
		{
			result[i][j] = array[i][j];
		}
	}
	return result;
}
function create2dArray(row, cols, initialValue)
{

	var count;
	var i;
	var j;
	var result;

	count = 0;
	result = new Array(row);
	for(i = 0; i < result.length ; i++)
	{
		result[i] = new Array(cols);
		for(j = 0; j < result[i].length; j++)
		{
			result[i][j] = initialValue;
		}
	}
	return result;
}
function getDeadValue()
 {
	 return 0;
 }
function getAliveValue()
 {
	 return 1;
 }
function isAlive(cell)
{
	var bool;
	bool = false;

	if(cell == 1)
	{
		bool = true;
	}
	return bool;
}
function getLiveColor()
{
	return "blue";
}
function getDeadColor()
{
	return "red";
}
function trim(data) //trim function that removes all the whitespace from a string.
 {
 var result;
 var whitespace;
 var start;

 if (typeof data === "string")
 {
 whitespace = " \n\r\t\f";
 start = 0;

 while (start < data.length && whitespace.indexOf(data.charAt(start)) > -1) {
 start = start + 1;
 }

 var end;
 end = data.length - 1;

 while (end >= 0 && whitespace.indexOf(data.charAt(end)) > -1) {
 end = end - 1;
 }

 if (end < start) {
 result = "";
 }
 else {
 result = data.substring(start, end + 1);
 }
 }
 else {
 result = data;
 }
 return result;
 }//end of trim

 function createHTMLElement(elementType, id, classInfo, content)
 {
 if (elementType == null)
 {
 elementType = "";
 }
 if (id == null)
 {
 id = "";
 }
 if (classInfo == null)
 {
 classInfo = "";
 }
 if (content == null)
 {
 content = "";
 }
 else
 {
 elementType = "" + trim(elementType);
 id = ' id=' + '"' + trim(id) + '"';
 classInfo = ' class=' + '"' + trim(classInfo) + '"';
 content = "" + trim(content);
 }
 return "<" + elementType + id + classInfo + ">" + content + "</" + elementType + ">"; // returns a properly formatted html statement.
 }
 function getInfo(array)
 {
     var i;
     var result;
     result = "Array contains" + array.length + "elements";
     i = 0;
     while (i < array.length) {
         result = result + "\n" + " [" + i + "] " + array[i]; i = i + 1;
     }
     return result;
}
