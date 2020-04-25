import { stringToNumberInterface, sortNumbersInterface, removeCharactersInterface, addInterface, positiveToNegativeInterface, negativeToPositiveInterface, thousandSeparatorInterface, addCharacterInterface, percentageInterface, addDecimalInterface, removeDecimalInterface } from './interfaces';
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
export declare const stringToNumber: stringToNumberInterface;
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
export declare const sortNumbers: sortNumbersInterface;
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
export declare const removeCharacters: removeCharactersInterface;
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
export declare const positiveToNegative: positiveToNegativeInterface;
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
export declare const negativeToPositive: negativeToPositiveInterface;
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
export declare const thousandSeparator: thousandSeparatorInterface;
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
export declare const addCharacter: addCharacterInterface;
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
export declare const add: addInterface;
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
export declare const percentage: percentageInterface;
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
export declare const addDecimal: addDecimalInterface;
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
export declare const removeDecimal: removeDecimalInterface;
