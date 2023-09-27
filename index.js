// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers,name){
  const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return matchingDrivers;
}

function fuzzyMatch(drivers,name){
  const matchingLetters=drivers.filter(driver=>driver.startsWith(name))
  return matchingLetters;
}

function matchName(drivers,name){

  const matchingName=drivers.filter(driver => driver.name === name);
  return matchingName;
}
  // const matchingNames=drivers.filter(driver=>drivers.name===name)
  // return matchingNames;

  // const drivers = [
  //   {
  //     name: 'Bobby',
  //     hometown: 'Pittsburgh' },
  //   {
  //     name: 'Sammy',
  //     hometown: 'New York' } ,
  //   {
  //     name: 'Sally',
  //     hometown: 'Cleveland' },
  //   {
  //     name: 'Annette',
  //     hometown: 'Los Angeles' },
  //   {
  //     name: 'Bobby',
  //     hometown: 'Tampa Bay' }
  // ];

