const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  const oldest = people.reduce((obj, person) => {
    const oldest = (obj.yearOfDeath ?? currentYear)  - obj.yearOfBirth;
    const currentAge = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;

    if (currentAge > oldest) {
      return person;
    } else {
      return obj;
    }
  }, people[0]);

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
