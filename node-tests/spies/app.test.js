const expect = require('expect');
const rewire = require('rewire');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy(),
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Andrew');
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    let email = 'mbolivar@gmail.com';
    let password = '12345678';

    app.handleSignup(email, password);

    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });

})
