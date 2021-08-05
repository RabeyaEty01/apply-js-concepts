//3! = 3 * 2 * 1
//4 != 4 * 3 * 2 * 1
//5 != 5 * 4 * 3 * 2 * 1
//9 != 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

var factorial = 1;
for (var i = 1; i <= 7; i++) {
    //console.log(i);
    factorial = factorial * i;
   
}
console.log('Factorial result is:' ,factorial);