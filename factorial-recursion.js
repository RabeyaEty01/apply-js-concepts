/*
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
9! = 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
n! = n * (n-1)!
*/

function factorial(n) {
    if (n == 1) {    //stoping condition
        return 1;
    }
    return n * factorial(n - 1); //recursion mne nijr function thekei nijeke abr call kora

}

const myFactorial = factorial(7);
console.log(myFactorial);