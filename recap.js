var time = '10:15pm'; //string
var bookPrice = 150; //numeric or number type
var isWhiteColor = false; //boolean type


//array
var partners = ['noman', 'mahbub', 'shafin', 'ety', 'tisha'];

var elementCount = partners.length;
var nomanIndex = partners.indexOf('noman');
partners.push('rifa');
partners.pop();

//conditionals

if (bookPrice < 120) {
    console.log('I will buy this book');

}
else {
    console.log('Mama kichu discount then na!!');
}

//while loop

var i = 0;
while (i <= 20) {
    //do some work
    i++;
}

//for loop
for(var i=0; i<=17; i++)
{

}
//function
function isMoonUp(time){
    if(time>= 19 && time <=5)
    {
        return true;
    }
    return false;
}

var moonStatus =isMoonUp(21);


//let const

//value of variable could change
let price = 27; //eta mne variable er maan ta change korte pari
price=29;
price=31;

//value of the variable will not change
const myName="lal a lal mr. Helal"; //eta mne ei variable er value ta change hobena ,constent thakbe.
console.log(myName);



//variable 3 vabe declare kora jay
//1. var
//2. let
//3.const