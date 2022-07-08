const removeFromArray = function(originArray, ...theTargets) {
    for (const target of theTargets) {
        if (!originArray.includes(target)) {
            continue;
        } else {
            originArray.splice(originArray.indexOf(target), 1);
        }
    }
    return originArray;
};


// Do not edit below this line
module.exports = removeFromArray;
