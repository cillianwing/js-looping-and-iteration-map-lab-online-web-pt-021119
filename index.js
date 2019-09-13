// Code your solution in this file.
function lowerCaseDrivers(arr) {
  let newArray = arr.map(function(driver){
    return driver.toLowerCase();
  })
  return newArray;
}

function nameToAttributes(arr) {
  let newArray = arr.map(function(driver) {
    splitArray = driver.split(" ");
    first = splitArray[0];
    last = splitArray[1];
    return Object.assign({}, {[firstName]: first[0], [lastName]: last[0]})
  })
  return newArray;
}