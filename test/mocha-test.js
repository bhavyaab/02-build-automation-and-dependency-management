'use strict';

const greet =  require('../lib/greet.js');
const assert = require('assert');
describe('greet', function(){
   describe('#sayHi', function(){
    it('should return Hello Bhavya!', function(){
     var call = greet.sayHi('Bhavya');
     assert.ok(call === 'Hello Bhavya!', 'not equal Hello Bhavya!');
    })
   });
});
