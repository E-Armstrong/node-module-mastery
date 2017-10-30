// Say hello, main.js

//console.log("Hello World!")

//=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Creates the sum of whatever numbers are passed to it

/*
var sum = function (array) {
    var total = 0;  
    for (var i=2; i < array.length; i++) {
    total += Number(array[i]);
    }
    return total
}
console.log(sum(process.argv))
*/

//=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Counts the number of lines in a text file

/*
var fs = require('fs');

// this function takes the input from node (process.argv[2]), makes it a string that's split into an array on each newline, and finds the length of that array
newline_length = fs.readFileSync(process.argv[2]).toString().split('\n').length

console.log(newline_length);
*/

//=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Counts the number of lines in a text file with an ASYNCHRONOUS CALLBACK FUNCTION BOOM

/*
var fs = require('fs');

fs.readFile(`./${process.argv[2]}`, function(err, data){
    if (err) throw err;
    console.log(data.toString().split('\n').length)
})
*/
