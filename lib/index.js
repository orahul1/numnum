"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
/**
 * Convert string to number, string array of number to number.
 * @default convert all number as string into number
 *
 * @example
 * // returns [2,111,3]
 * stringToNumber(['2','111','3'])
 *
 * @example
 * // returns [3,4, 5]
 * stringToNumber(['3$a','$4b','5$$$c'])
 *
 * @example
 * // returns 333
 * stringToNumber('33r3')
 *
 * @param {object[string | number] | string} userInput
 * @returns {object[number] | number}
 */
exports.stringToNumber = function (userInput) {
    if (typeof userInput === 'object') {
        return userInput.map(function (number) { return Number(number.toString().replace(constants_1.ALL_CHARACTER_REGX, '')); });
    }
    else {
        return Number(userInput.toString().replace(constants_1.ALL_CHARACTER_REGX, ''));
    }
};
/**
 * Sort Array of numbers either ascending or dscending based on input.
 * @default ascending
 *
 * @example
 * //retunrns [1,2,3]
 * sortNumbers([2,1,3]) || sortNumbers([2,1,3],'ascending');
 *
 * @param {object[number|string]} userInput
 * @param {string} option
 * @returns {object[number]}
 */
exports.sortNumbers = function (userInput, option) {
    if (option === void 0) { option = 'ascending' || 'dscending'; }
    var convertedList = exports.stringToNumber(userInput);
    if (option === 'ascending') {
        return convertedList.sort(function (a, b) { return a - b; });
    }
    else {
        return convertedList.sort(function (a, b) { return b - a; });
    }
};
/**
 * Remove special characters from string of number or string. Can also pass specifc characters or regex to remove.
 * @default remove all characters
 *
 * @example without option(default)
 * // returns [2,1,3]
 * removeCharacters(['2$n','1ERe','asd3'])
 *
 * @example option with a specifc character
 * // returns ['3a','4b', '5c']
 * removeCharacters(['3fa','f4b','5fffc'], 'f')
 *
 * @example option with regex
 * // returns ['3','4', '5']
 * removeCharacters(['3a','aa4','5aaa'], /a/g)
 *
 * @param {object[string] | string} userInput
 * @param {string} option
 * @returns {object[] | string}
 */
exports.removeCharacters = function (userInput, option) {
    if (typeof userInput === 'object') {
        switch (typeof option) {
            case 'undefined':
                // remove all characters by default
                return userInput.map(function (number) {
                    return Number(number.toString().replace(constants_1.ALL_CHARACTER_REGX, ''));
                });
            case 'object':
                // regex
                return userInput.map(function (number) {
                    if (typeof number === 'string') {
                        return number.replace(option, '');
                    }
                    else {
                        return number;
                    }
                });
            case 'string':
                // remove one specific character - string input
                var regex_1 = new RegExp("" + option, 'g');
                return userInput.map(function (number) {
                    if (typeof number === 'string') {
                        return number.replace(regex_1, '');
                    }
                    else {
                        return number;
                    }
                });
        }
    }
    if (typeof userInput === 'string') {
        switch (typeof option) {
            case 'undefined':
                return Number(userInput.toString().replace(constants_1.ALL_CHARACTER_REGX, ''));
            case 'object':
                return userInput.toString().replace(option, '');
            case 'string':
                var regex = new RegExp("" + option, 'g');
                return userInput.toString().replace(regex, '');
        }
    }
    return null;
};
/**
* Convert positive  number to negative number
* @default convert all number to positive number
*
* @example
* // returns [-2,-1,-3]
* positiveToNegative([2,1,3])
*
* @example
* // returns -312
* positiveToNegative(312)
*
*
* @param {object[string] | string} userInput
* @returns {object[] | string}
*/
exports.positiveToNegative = function (userInput) {
    if (typeof userInput === 'object') {
        var convertedList = exports.stringToNumber(userInput);
        return convertedList.map(function (number) {
            if (number > 0) {
                return -Math.abs(number);
            }
            else {
                return number;
            }
        });
    }
    else {
        if (exports.stringToNumber(userInput) > 0) {
            return -Math.abs(Number(userInput));
        }
        else {
            return Number(userInput);
        }
    }
};
/**
* Convert negative number to positive number
* @default convert all number to positive number
*
* @example
* // returns [2,1,3]
* negativeToPositive([-2,-1,-3])
*
* @example
* // returns 312
* negativeToPositive(-312)
*
*
* @param {object[string] | string} userInput
* @returns {object[] | string}
*/
exports.negativeToPositive = function (userInput) {
    if (typeof userInput === 'object') {
        var convertedList = exports.stringToNumber(userInput);
        return convertedList.map(function (number) {
            if (number < 0) {
                return Math.abs(number);
            }
            else {
                return number;
            }
        });
    }
    else {
        if (exports.stringToNumber(userInput) < 0) {
            return Math.abs(Number(userInput));
        }
        else {
            return Number(userInput);
        }
    }
};
/**
* Add , to numbers for more readability
*
* @example
* // returns [20,000,100,000,1,000,000]
* thousandSeparator([20000,100000,1000000])
*
* @example
* // returns 2,0000
* thousandSeparator(20000)
*
*
* @param {object[string/Number] | string} userInput
* @returns {object[string] | string}
*/
exports.thousandSeparator = function (userInput) {
    if (typeof userInput === 'object') {
        return userInput.map(function (number) { return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); });
    }
    else {
        return userInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};
/**
* Add character at starting or ending.
*@default add character at the end
*
* @example
* // returns [$20,$100,$10]
* addCharacter([20,100,10], '$')
*
* @example
* // returns 20000%
* addCharacter(20000, '%', 'end')
*
*
* @param {object[string/Number] | string} userInput
* @param {string} option
* @returns {object[string] | string}
*/
exports.addCharacter = function (userInput, character, option) {
    if (option === void 0) { option = 'start' || 'end'; }
    if (typeof userInput === 'object') {
        if (option === 'start') {
            return userInput.map(function (number) { return character + number.toString(); });
        }
        else {
            return userInput.map(function (number) { return number.toString() + character; });
        }
    }
    else {
        if (option === 'start') {
            return character + userInput.toString();
        }
        else {
            return userInput.toString() + character;
        }
    }
};
/**
* Addition of numbers
*
* @example
* // returns 6
* add([2,1,3])
*
*
* @param {object[string/number]} userInput
* @returns {object[] | string}
*/
exports.add = function (userInput) {
    var convertedList = exports.stringToNumber(userInput);
    return convertedList.reduce(function (num1, num2) { return num1 + num2; }, 0);
};
/**
* Convert to percentage
*
* @example
* // returns 1000
* percentage(10)
*
* @example
* // returns 100%
* percentage(1, true)
*
* @param {string/number} userInput
* @param {boolean} isSymbol
* @returns {number | string}
*/
exports.percentage = function (userInput, isSymbol) {
    if (isSymbol === void 0) { isSymbol = false; }
    var result = Number(userInput) * 100;
    if (isSymbol) {
        return result + '%';
    }
    else {
        return result;
    }
};
/**
* Add decimal points
*
* @example
* // returns [2.0,1.0,3.0]
* addDecimal([2,1,3])
*
* @example
* // returns [2.00,1.00,3.00]
* addDecimal([2,1,3], 2)
*
* @example
* // returns 312.0
* addDecimal(312)
*
*
* @param {object[string/number] | string} userInput
* @param {number} option
* @returns {object[] | string}
*/
exports.addDecimal = function (userInput, option) {
    if (option === void 0) { option = 1; }
    if (typeof userInput === 'object') {
        return userInput.map(function (number) { return parseFloat(String(number)).toFixed(option); });
    }
    else {
        return parseFloat(userInput).toFixed(option);
    }
};
/**
* Add decimal points
*
* @example
* // returns [2,1,3]
* addDecimal([2.0,1.2,3.4])
*
* @example
* // returns 312
* addDecimal(312.33)
*
*
* @param {object[string/number] | string} userInput
* @returns {object[number] | number}
*/
exports.removeDecimal = function (userInput) {
    if (typeof userInput === 'object') {
        var convertedList = exports.stringToNumber(userInput);
        return convertedList.map(function (number) { return number | 0; });
    }
    else {
        return Number(exports.stringToNumber(userInput)) | 0;
    }
};
