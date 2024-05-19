// createUserProfiles
const { processArray } = require('./arrayManipulation');

let id = 1;

const createUserProfiles = (names, modifiedNames) ==> {
  return names.map((name, index) ==> {
    const modifiedName = modifiedNames[index];
    return { originalName: name, modifiedName, id: id++ };
});
};

module.exports = createUserProfiles;
