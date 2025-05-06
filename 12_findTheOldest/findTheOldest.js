const findTheOldest = function() {
    //Add the death year to object
    for (const person of people) {
      if (person.yearOfDeath === undefined) {
        person.yearOfDeath = 2025;
      }
    }
  
    //reduce the object to include only the oldest
    const theOldest = people.reduce((theOldestPerson, currentPerson) => (currentPerson.yearOfDeath - currentPerson.yearOfBirth) > (theOldestPerson.yearOfDeath - theOldestPerson.yearOfBirth) ? currentPerson : theOldestPerson, people[0])

return theOldest.name;
  };

// Do not edit below this line
module.exports = findTheOldest;
