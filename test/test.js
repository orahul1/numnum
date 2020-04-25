'use strict';

var expect = require('chai').expect;
var numnum = require('../lib/index');

/********************************StringToNumber***********************************/

describe('stringToNumber function test', () => {
  it('should return [1,-4,5,1,7,-8,5.6,-10,0.6]', () => {
    var result = numnum.stringToNumber(['1', -4, 'rr5', 1, '7', -8, 5.6, -10, .6]);
    expect(result).to.eql([1, -4, 5, 1, 7, -8, 5.6, -10, 0.6]);
  });

  it('should return [3,4, 5]', () => {
    var result = numnum.stringToNumber(['3$a', '$4b', '5$$$c']);
    expect(result).to.eql([3, 4, 5]);
  });

  it('should return 210', () => {
    var result = numnum.stringToNumber('2r1ee0');
    expect(result).equal(210);
  });
});


/********************************SortNumbers***********************************/

describe('sortNumbers function test', () => {
  it('should return [-10,-8,-4,0.6,1,1,5,5.6,7]', () => {
    var result = numnum.sortNumbers(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6]);
    expect(result).to.eql([-10,-8,-4,0.6,1,1,5,5.6,7]);
  });


  it('should return [7,5.6,5,1,1,0.6,-4,-8,-10]', () => {
    var result = numnum.sortNumbers(['1',-4,'rr5',1,'7',-8, 5.6,-10 ,.6], 'dscending');
    expect(result).to.eql([7,5.6,5,1,1,0.6,-4,-8,-10]);
  });
});


/********************************RemoveCharacters***********************************/

describe('removeCharacters function test', () => {
  it('should return [2,1,3]', () => {
    var result = numnum.removeCharacters(['2$n','1ERe','asd3']);
    expect(result).to.eql([2,1,3]);
  });


  it(`should return ['3a','4b', '5c']`, () => {
    var result = numnum.removeCharacters(['3fa','ff4b','5fffc'], 'f');
    expect(result).to.eql(['3a','4b', '5c']);
  });


  it(`should return ['3','4', '5']`, () => {
    var result = numnum.removeCharacters(['3a','a4','5aaa'], /a/g);
    expect(result).to.eql(['3','4', '5']);
  });


  it(`should return 420`, () => {
    var result = numnum.removeCharacters('maytheforce420withyou');
    expect(result).equal(420);
  });


  it(`should return '220'`, () => {
    var result = numnum.removeCharacters('ddddd2ddd2ddd0', 'd');
    expect(result).equal('220');
  });


  it(`should return matheforce420withou`, () => {
    var result = numnum.removeCharacters('maytheforce420withyou', /y/g);
    expect(result).equal('matheforce420withou');
  });
});



/********************************PositiveToNegative***********************************/

describe('positiveToNegative function test', () => {
  it('should return [-2,-1,-3]', () => {
    var result = numnum.positiveToNegative([2,1,3]);
    expect(result).to.eql([-2,-1,-3]);
  });


  it('should return -312', () => {
    var result = numnum.positiveToNegative(312);
    expect(result).equal(-312);
  });
});


/********************************NegativeToPositive***********************************/

describe('negativeToPositive function test', () => {
  it('should return [2,1,3]', () => {
    var result = numnum.negativeToPositive([-2,-1,-3]);
    expect(result).to.eql([2,1,3]);
  });


  it('should return 312', () => {
    var result = numnum.negativeToPositive(-312);
    expect(result).equal(312);
  });
});



/********************************ThousandSeparator***********************************/

describe('thousandSeparator function test', () => {
  it(`should return ['20,000','100,000','1,000,000']`, () => {
    var result = numnum.thousandSeparator([20000,100000,1000000]);
    expect(result).to.eql(['20,000','100,000','1,000,000']);
  });


  it('should return 2,000', () => {
    var result = numnum.thousandSeparator(2000);
    expect(result).equals('2,000');
  });
});



/********************************AddCharacter***********************************/

describe('addCharacter function test', () => {
  it(`should return ['$20','$100','$10']`, () => {
    var result = numnum.addCharacter([20,100,10], '$');
    expect(result).to.eql(['$20','$100','$10']);
  });


  it(`should return '2000%'`, () => {
    var result = numnum.addCharacter(2000, '%', 'end');
    expect(result).equals('2000%');
  });
});



/****************************************Add************************************/


describe('add function test', () => {
  it(`should return 110.5`, () => {
    var result = numnum.add([20,100,10,'-30',10.5]);
    expect(result).equals(110.5);
  });
});


/************************************percentage***********************************/


describe('percentage function test', () => {
  it(`should return 100`, () => {
    var result = numnum.percentage(1);
    expect(result).equals(100);
  });

  it(`should return '200%'`, () => {
    var result = numnum.percentage(2, true);
    expect(result).equals('200%');
  });
});


// /********************************AddDecimal***********************************/


describe('addDecimal function test', () => {
  it(`should return ['7000.00', '10.00', '1.00', '3.00']`, () => {
    var result = numnum.addDecimal([7000,10,1,3], 2);
    expect(result).to.eql(['7000.00', '10.00', '1.00', '3.00']);
  });

  it(`should return '499.000'`, () => {
    var result = numnum.addDecimal(499, 3);
    expect(result).equals('499.000');
  });
});


// /********************************removeDecimal***********************************/


describe('removeDecimal function test', () => {
  it(`should return [20,100,10,'-30',10]`, () => {
    var result = numnum.removeDecimal([20.33,100.4,10.2,'-30',10.5]);
    expect(result).to.eql([20,100,10,-30,10]);
  });

  it(`should return 100`, () => {
    var result = numnum.removeDecimal(100.201);
    expect(result).equals(100);
  });
});
