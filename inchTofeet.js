function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;


}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet ', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches in feet ', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('naniInches in feet ', feet);



//mile to km

function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;

}
var marathon = mileToKilometer(26.2);
console.log('Marathon in km: ', marathon);

//centimeter to meter

function centimeterToMeter(centimeter) {
    var meter = centimeter / 100;
    return meter;
}
var run = centimeterToMeter(500);
console.log('He rans daily: ', run);