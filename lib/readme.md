# numnum
Bunch of number operations and methods

[![NPM version](https://img.shields.io/npm/v/numnum.svg?style=flat-square)](https://www.npmjs.com/package/numnum)
[![Build](https://travis-ci.org/orahul1/numnum.svg?branch=master)](https://travis-ci.org/orahul1/numnum)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


## Installation

```
npm install numnum --save
```
## Usage
### Javascript
```javascript
var numnum = require('numnum');
```
### TypeScript
```typescript
import { <name-of-the-function> } from 'numnum';
```

### Functions

### stringToNumber

Convert string to number

##### Javascript
---
```
numnum.stringToNumber(['1', -4, 'rr5', 1, '7', -8, 5.6, -10, .6]);  => [1, -4, 5, 1, 7, -8, 5.6, -10, 0.6] ;

numnum.stringToNumber(['3$a', '$4b', '5$$$c']) => [3, 4, 5];

numnum.stringToNumber('2r1ee0') => 210

```
##### Typescript
---
```
import { stringToNumber } from 'numnum';

stringToNumber(['1', -4, 'rr5', 1, '7', -8, 5.6, -10, .6]);  => [1, -4, 5, 1, 7, -8, 5.6, -10, 0.6] ;

stringToNumber(['3$a', '$4b', '5$$$c']) => [3, 4, 5];

stringToNumber('2r1ee0') => 210

```

### sortNumbers

Sort numbers
##### Javascript
---
```
numnum.sortNumbers(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6]) => [-10,-8,-4,0.6,1,1,5,5.6,7]

numnum.sortNumbers(['1',-4,'rr5',1,'7',-8, 5.6,-10 ,.6], 'dscending') => [7,5.6,5,1,1,0.6,-4,-8,-10]
```

##### Typescript
---
```
import { sortNumbers } from 'numnum';

sortNumbers(['1',-4,'rr5',1,'7', -8, 5.6, -10 , .6]) => [-10,-8,-4,0.6,1,1,5,5.6,7]

sortNumbers(['1',-4,'rr5',1,'7',-8, 5.6,-10 ,.6], 'dscending') => [7,5.6,5,1,1,0.6,-4,-8,-10]
```

### removeCharacters

Remove characters from numbers

##### Javascript
---
```
numnum.removeCharacters(['2$n','1ERe','asd3']) => [2,1,3]

numnum.removeCharacters(['3fa','ff4b','5fffc'], 'f') => ['3a','4b', '5c']

numnum.removeCharacters(['3a','a4','5aaa'], /a/g) => ['3','4', '5']

numnum.removeCharacters('maytheforce420withyou') => 420

numnum.removeCharacters('ddddd2ddd2ddd0', 'd') => 220

numnum.removeCharacters('maytheforce420withyou', /y/g) => 'matheforce420withou'
```

##### Typescript
---
```
import { removeCharacters } from 'numnum';

removeCharacters(['2$n','1ERe','asd3']) => [2,1,3]

removeCharacters(['3fa','ff4b','5fffc'], 'f') => ['3a','4b', '5c']

removeCharacters(['3a','a4','5aaa'], /a/g) => ['3','4', '5']

removeCharacters('maytheforce420withyou') => 420

removeCharacters('ddddd2ddd2ddd0', 'd') => 220

removeCharacters('maytheforce420withyou', /y/g) => 'matheforce420withou'
```
### positiveToNegative

Convert number from positive to negative
##### Javascript
---
```
numnum.positiveToNegative([2,1,3]) => [-2,-1,-3]

numnum.positiveToNegative(312) => -312
```

##### Typescript
---
```
import { positiveToNegative } from 'numnum';

positiveToNegative([2,1,3]) => [-2,-1,-3]

positiveToNegative(312) => -312
```
### negativeToPositive

Convert number from negative to positive
##### Javascript
---
```
numnum.negativeToPositive([-2,-1,-3]) => [2,1,3]

numnum.negativeToPositive(-312) => 312
```

##### Typescript
---
```
import { negativeToPositive } from 'numnum';

negativeToPositive([-2,-1,-3]) => [2,1,3]

negativeToPositive(-312) => 312
```


### thousandSeparator

Convert number from negative to positive

##### Javascript
---
```
numnum.thousandSeparator([20000,100000,1000000]) => ['20,000','100,000','1,000,000']

numnum.thousandSeparator(2000) => '2,000'
```

##### Typescript
---
```
import { thousandSeparator } from 'numnum';

thousandSeparator([20000,100000,1000000]) => ['20,000','100,000','1,000,000']

thousandSeparator(2000) => '2,000'
```
### addCharacter

Add characters to numbers

##### Javascript
---
```
numnum.addCharacter([20,100,10], '$') => ['$20','$100','$10']

numnum.addCharacter(2000, '%', 'end') => ''2000%'
```

##### Typescript
---
```
import { addCharacter } from 'numnum';

addCharacter([20,100,10], '$') => ['$20','$100','$10']

addCharacter(2000, '%', 'end') => ''2000%'
```

### add

Add numbers

##### Javascript
---
```
numnum.add([20,100,10,'-30',10.5]) => 110.5

```

##### Typescript
---
```
import { add } from 'numnum';

add([20,100,10,'-30',10.5]) => 110.5

```

### percentage

##### Javascript
---
```
numnum.percentage(1) => 100

 numnum.percentage(2, true) => '200%'

```

##### Typescript
---
```
import { percentage } from 'numnum';

percentage(1) => 100

percentage(2, true) => '200%'

```

### addDecimal

##### Javascript
---
```
numnum.addDecimal([7000,10,1,3], 2) => ['7000.00', '10.00', '1.00', '3.00']

numnum.addDecimal(499, 3) => '499.000'

```

##### Typescript
---
```
import { addDecimal } from 'numnum';

addDecimal([7000,10,1,3], 2) => ['7000.00', '10.00', '1.00', '3.00']

addDecimal(499, 3) => '499.000'

```

### removeDecimal
##### Javascript
---
```
numnum.removeDecimal([20.33,100.4,10.2,'-30',10.5]) => [20,100,10,-30,10]

numnum.removeDecimal(100.201) => 100

```

##### Typescript
---
```
import { removeDecimal } from 'numnum';

removeDecimal([20.33,100.4,10.2,'-30',10.5]) => [20,100,10,-30,10]

removeDecimal(100.201) => 100

```

```
Tip : addDecimal(thousandSeparator([20000,100000,1000000]),1) => ['20,000.0','100,000.0','1,000,000.0']
```
