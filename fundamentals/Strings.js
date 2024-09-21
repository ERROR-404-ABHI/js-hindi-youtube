//String is a collection of characters. we can declare strings in double quotes (""),single quotes('') and within (` `)
var s="hello javascript";
// ? String interpolation
/*
it's a process of inserting the strings or values into an existing string for various purposes
*/
var Sname="abhay"
var Salary=60000
console.log(s);
console.log(`${Sname}, you got selected in the company...........with the slary package of ${Salary*12} per annum`);

// methods of string

// ? toUppercase()
var str="javaScript"
console.log(str.toUpperCase());

// toLowercase()
console.log(str.toLowerCase());

// toString()-returns the string representation of the object.
// it doesn't change the original string
// it is used  to convert a string object into a string
var num=15 
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof num);

// 4.trimStart()- it will trim the unwanted spaces at the starting of a string.
var s= "     javaScript" 
console.log(s); 
console.log(s.length); 
console.log(s.trimStart().length); 

// 5.trimEnd()-it will trim the unwanted spaces at the ending of a string.
var s1= "javaScript     " 
console.log(s1); 
console.log(s1.length); 
console.log(s1.trimEnd().length); 

// 6.trim()-it will remove blank spaces from the starting and from the ending
var s1= "          javaScript     " 
 console.log(s1.length); 
 console.log(s1.trim()); 

// 7.substr()
// it will extract the substring from the original string
// variablename.substr(startingindex , length)
var s="i love JavaScript"
console.log(s);
console.log(s.substr(2,4));

// 8.substring()
// variablename.substring(Starting index,end index) note-ending index is excluded
var s="I love JavaScript"
console.log(s);
console.log(s.substring(2,6))

//9. slice()
// syntax-variablename.slice(SI,EI)
var s="I love JavaScript"
console.log(s);
console.log(s.slice(2,6).length);

// 10.split();
var s="I love JavaScript"
console.log(s.split(""));
console.log(s.split(" "));
console.log(s.split("a"));

// 11.indexOf(); - it is used to extract the index value of the elements
// it will return the index of first encounter element.
var s="I love JavaScript"
console.log(s.indexOf(c));
console.log(s.indexOf(a));

// 12.lastIndexOf() 
// it will return the index of last encounter element.

var s="I love JavaScript"
console.log(s.lastIndexOfindexOf(c));
console.log(s.lastIndexOf(a));

//13. replace()- it is used to replace the element with the desired element
var s="something is happening because of somethdetingis happend in the past,so don't do that something this something will not happen"
console.log(s.replace("something","nothing"));

//14.replaceAll();
var s="something is happening because of somethingis happend in the past,so don't do that something this something will not happen"
console.log(s.replaceAll("something","nothing"));


// 15.includes- particular character is present in the string or not
var s="javaScript"
console.log(s.includes("s"));
console.log(s.includes("S"));

// ?16.charAt() - returns the character at a specified index (osition) in a string
console.log(s.charAt(4));
console.log(s.charAt(7));
console.log(s.charAt(9));

// 17.? charCodeAt():it will print the ascii value of the element present at the specific index 
console.log(s.charAt(3));
console.log(s.charCodeAt(3));

// ?18.String.fromCharCode();-it will print the character by just taking its ascii value as input parameter
console.log(String.fromCharCode(97));
console.log(String.fromCharCode(67));







