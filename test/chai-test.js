'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('greet', function(){
 describe('#sayHi', function(){
  expect(greet).to.property('sayHi');
  var result = greet.sayHi('Bhavya');
  expect(result).to.equal('Hello Bhavya!');
 });
});
