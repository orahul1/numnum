export interface sortNumbersInterface {
    (numberList: Array<number | string>, option?: string): Array<number>;
}

export interface removeCharactersInterface {
    (userInput: Array<string> | string, option?: string | RegExp): Array<string | number> | string | number | null;
}

export interface stringToNumberInterface {
    (userInput: Array<number | string> | string): Array<number> | number;
}

export interface negativeToPositiveInterface {
    (userInput: Array<number | string> | string): Array<number> | number;
}

export interface positiveToNegativeInterface {
    (userInput: Array<number | string> | string): Array<number> | number;
}

export interface thousandSeparatorInterface {
    (userInput: Array<number | string> | string): Array<string> | string;
}

export interface addCharacterInterface {
    (userInput: Array<number | string> | string, character: string, option?: string): Array<string> | string;
}

export interface addInterface {
    (userInput: Array<number | string>): number;
}
export interface percentageInterface {
    (userInput: string | number, isSymbol?: boolean): number | string;
}

export interface addDecimalInterface {
    (userInput: Array<number | string> | string, option: number): Array<string> | string;
}

export interface removeDecimalInterface {
    (userInput: Array<number | string> | string): Array<number> | number;
}
