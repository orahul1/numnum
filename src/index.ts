import {
  stringToNumberInterface, sortNumbersInterface, removeCharactersInterface, addInterface,
  positiveToNegativeInterface, negativeToPositiveInterface, thousandSeparatorInterface,
  addCharacterInterface, percentageInterface, addDecimalInterface, removeDecimalInterface
} from './interfaces'
import { ALL_CHARACTER_REGX } from './constants'

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

export const stringToNumber: stringToNumberInterface = function (userInput) {
  if (typeof userInput === 'object') {
    return userInput.map((number) => Number(number.toString().replace(ALL_CHARACTER_REGX, '')))
  } else {
    return Number(userInput.toString().replace(ALL_CHARACTER_REGX, ''))
  }
}

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

export const sortNumbers: sortNumbersInterface = function (userInput, option = 'ascending' || 'dscending') {
  const convertedList = stringToNumber(userInput) as number[]
  if (option === 'ascending') {
    return convertedList.sort((a, b) => a - b)
  } else {
    return convertedList.sort((a, b) => b - a)
  }
}

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

export const removeCharacters: removeCharactersInterface = function (
  userInput,
  option
) {
  if (typeof userInput === 'object') {
    switch (typeof option) {
      case 'undefined':
        // remove all characters by default
        return userInput.map((number) =>
          Number(number.toString().replace(ALL_CHARACTER_REGX, ''))
        )

      case 'object':
        // regex
        return userInput.map((number) => {
          if (typeof number === 'string') {
            return number.replace(option, '')
          } else {
            return number
          }
        })

      case 'string':
        // remove one specific character - string input
        const regex = new RegExp(`${option}`, 'g')
        return userInput.map((number) => {
          if (typeof number === 'string') {
            return number.replace(regex, '')
          } else {
            return number
          }
        })
    }
  }

  if (typeof userInput === 'string') {
    switch (typeof option) {
      case 'undefined':
        return Number(userInput.toString().replace(ALL_CHARACTER_REGX, ''))

      case 'object':
        return userInput.toString().replace(option, '')

      case 'string':
        const regex = new RegExp(`${option}`, 'g')
        return userInput.toString().replace(regex, '')
    }
  }
  return null
}

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

export const positiveToNegative: positiveToNegativeInterface = function (userInput) {
  if (typeof userInput === 'object') {
    const convertedList = stringToNumber(userInput) as number[]
    return convertedList.map(number => {
      if (number > 0) {
        return -Math.abs(number)
      } else {
        return number
      }
    })
  } else {
    if (stringToNumber(userInput) > 0) {
      return -Math.abs(Number(userInput))
    } else {
      return Number(userInput)
    }
  }
}

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

export const negativeToPositive: negativeToPositiveInterface = function (userInput) {
  if (typeof userInput === 'object') {
    const convertedList = stringToNumber(userInput) as number[]
    return convertedList.map(number => {
      if (number < 0) {
        return Math.abs(number)
      } else {
        return number
      }
    })
  } else {
    if (stringToNumber(userInput) < 0) {
      return Math.abs(Number(userInput))
    } else {
      return Number(userInput)
    }
  }
}

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

export const thousandSeparator: thousandSeparatorInterface = function (userInput) {
  if (typeof userInput === 'object') {
    return userInput.map(number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))
  } else {
    return userInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

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

export const addCharacter: addCharacterInterface = function (userInput, character, option = 'start' || 'end') {
  if (typeof userInput === 'object') {
    if (option === 'start') {
      return userInput.map(number => character + number.toString())
    } else {
      return userInput.map(number => number.toString() + character)
    }
  } else {
    if (option === 'start') {
      return character + userInput.toString()
    } else {
      return userInput.toString() + character
    }
  }
}

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

export const add: addInterface = function (userInput) {
  const convertedList = stringToNumber(userInput) as number[]
  return convertedList.reduce((num1, num2) => num1 + num2, 0)
}

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

export const percentage: percentageInterface = function (userInput, isSymbol = false) {
  const result = Number(userInput) * 100
  if (isSymbol) {
    return result + '%'
  } else {
    return result
  }
}

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

export const addDecimal: addDecimalInterface = function (userInput, option = 1) {
  if (typeof userInput === 'object') {
    return userInput.map(number => parseFloat(String(number)).toFixed(option))
  } else {
    return parseFloat(userInput).toFixed(option)
  }
}

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

export const removeDecimal: removeDecimalInterface = function (userInput) {
  if (typeof userInput === 'object') {
    const convertedList = stringToNumber(userInput) as number[]
    return convertedList.map(number => number | 0)
  } else {
    return Number(stringToNumber(userInput)) | 0
  }
}
