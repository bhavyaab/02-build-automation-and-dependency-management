'use strict';

module.exports = exports = {};

exports.sayHi = function(name){
  return 'Hello ' + name + '!';
};

exports.askName = function(){
   const readline = require('readline');
   const rl = readline.createInterface(process.stdin, process.stdout);

   rl.question('What is your name? ', (answer) => {
    console.log(`Hello ${answer} Nice to meet you!!`);
    rl.close();
   });
 };
