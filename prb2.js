var tom = 82;
var jane = 77;
var fred = 39;
var greg = 54;
var chair;

chair = fred;

if (chair >= 80) {
    console.log("A")
}
else if (chair >= 60 && chair < 80) {
    console.log("B");
}
else if (chair >= 50 && chair < 60) {
    console.log("C");
}
else if (chair >= 40 && chair < 50) {
    console.log("D");
}
else {
    console.log("Failed")
}