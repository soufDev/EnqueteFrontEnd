'use strict';

describe('Service: typeNote', function () {

  // load the service's module
  beforeEach(module('enqueteSatisfactionApp'));

  // instantiate service
  var typeNote;
  beforeEach(inject(function (_typeNote_) {
    typeNote = _typeNote_;
  }));

  it('should do something', function () {
    expect(!!typeNote).toBe(true);
  });

});
