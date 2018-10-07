const add = (a,b) => a + b;

const setName = (user, fullName) => {
  let names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
}

module.exports = {
  add,
  setName
};
