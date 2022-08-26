const findTheOldest = function(people) {

    // const died = people.filter(function(person) {
    //     if (person.yearOfDeath != undefined) {
    //         return true;
    //     }
    // });

    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath == undefined) {
            people[i].yearOfDeath = ((new Date()).getFullYear());
        }
    }

    const oldest = people.sort(function(a, b) {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return 1;
        } else {
            return -1;
        }
    });

    return oldest[oldest.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
