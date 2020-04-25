"use strict";

const numnum = require('./lib/index');

// console.log(numnum.sortNumbers(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6], 'dscending'));

// console.log(numnum.stringToNumber(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6]));

// console.log(numnum.negativeToPositive(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6]));

// console.log(numnum.positiveToNegative(312));

// console.log(numnum.removeCharacters(['11fs44f',-4,'rr5',1,'7', -8, 5.6, -10 , .6]));

// console.log(numnum.removeCharacters(['3fa','ff4b','5fffc'], 'f'));

// console.log(numnum.removeCharacters(['11fs44f',-4,'rr5',1,'7', -8, 5.6, -10 , .6], /[^0-9a-z-A-Z ]/g));

// console.log(numnum.thousandSeparator([20000,100000,1000000]));

// console.log(numnum.addCharacter([20000,100000,1000000],'%', 'end'));

// console.log(numnum.add([20,10,30,30,'-40']));

// console.log(numnum.percentage(0.6666, true));

// console.log(numnum.addDecimal(7000, 5));

// console.log(numnum.addDecimal([7000,10,1,3], 5));

// console.log(typeof(numnum.addDecimal(7000, 2)));



console.log(numnum.removeDecimal(7030.99999999));
console.log(numnum.removeDecimal([7030.99999999,4.4444]));