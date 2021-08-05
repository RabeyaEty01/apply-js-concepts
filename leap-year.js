function isLeapYear(year){
    if(year%4 ==0 && year%100 !=0 || year%400 ==0){
        return true;
    }
    else{
        return false;
    }
}

const myYear =2100;
const isMyYearLeapYear =isLeapYear(myYear);
console.log('Is my year leap Year', isMyYearLeapYear);

const yourYear =2000;
const isyourYearLeapYear =isLeapYear(yourYear);
console.log('Is your year Leap year:', isyourYearLeapYear);