var chai = require('chai');
var assert = chai.assert;

var productsManagerValidation = require('../managers/productsManagerValidation.js');
var validateUrls = productsManagerValidation.validateUrls;
var isDeletable = productsManagerValidation.isDeletable;

describe('Validation Array Result Count', function() {
  it('Url Validation Result 1 Array', function() {
    var validationResult = validateUrls('https://www.google.com');
    assert.equal(validationResult.length, 1);
  }); 

  it('Url Validation Result 2 Array', function() {
    var validationResult = validateUrls('https://www.google.com,https://www.google.com.tw');
    assert.equal(validationResult.length, 2);
  }); 

  it('Url Validation Result 3 Array', function() {
    var validationResult = validateUrls('https://www.google.com, https://www.google.com.tw, https://www.google.com.cn');
    assert.equal(validationResult.length, 3);
  }); 
});


describe('Validation Array Result return Url', function() {
  it('Url Validation Result valid Url ', function() {
    var validationResult = validateUrls('https://www.google.com');
    assert.equal(validationResult[0].isUrl, true);
  }); 

   it('Url Validation Result invalid Url ', function() {
    var validationResult = validateUrls('com');

    assert.equal(validationResult[0].isUrl, false);
  }); 
});

describe('Validation isDeletable ', function() {
  it('No input return false ', function() {
    var validationResult = isDeletable(null);
    assert.equal(validationResult, false);
  }); 
});