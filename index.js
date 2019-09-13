// Code your solution in this file.
function lowerCaseDrivers(arr) {
  let newArray = arr.map(function(driver){
    return driver.toLowerCase();
  })
  return newArray;
}

function nameToAttributes(arr) {
  let newArray = arr.map(function(driver) {
    let splitArray = driver.split(" ");
    let first = splitArray[0];
    let last = splitArray[1];
    return Object.assign({}, {firstName: first, lastName: last});
  })
  return newArray;
}

function attributesToPhrase(obj) {
  let newObject = obj.map(function(driver) {
    return console.log(`${driver[name]} is from ${driver[hometown]}`);
  })
}