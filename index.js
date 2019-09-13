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
    Object.assign({}, {[firstName]: })
  })
}