const utils = require('./utils');
const expect = require('expect');

it('shoudl add two numbers', () => {
  let value = utils.add(2,5);
  expect(value).toBe(7);
});

it('splits a full name', () => {
  let user = {
    age: 24
  };
  utils.setName(user, 'Miguel Bolivar');

  expect(user).toInclude({
    firstName: 'Miguel',
    lastName: 'Bolivar',
  })
});

it('test async', (done) => {
  setTimeout(() => {
    let value = utils.add(5,5);
    expect(value).toBe(10);
    done();
  }, 2000)
})

