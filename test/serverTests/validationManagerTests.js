var chai = require('chai');
var assert = chai.assert;

var productsManagerValidation = require('./../server/manager/productsManagerValidation.js');
var validateUrls = productsManagerValidation.validateUrls;

describe('addClass', function() {
  it('URl validation Success', function() {
    var validationResult = validateUrls('https://www.google.com');

    assert.equal(validationResult, true);
  }); 
});