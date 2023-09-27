// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
  const matchingDrivers = drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase()});
  return matchingDrivers;
}

function fuzzyMatch(drivers,name){
  const matchingLetters=drivers.filter(function(driver){return driver.startsWith(name)});
  return matchingLetters;
}

function matchName(drivers,name){

  const matchingName=drivers.filter(function(driver){return driver.name === name});
  return matchingName;
}
  
