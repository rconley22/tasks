/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number) => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const new_nums = numbers.map((num: string): number =>
        // eslint-disable-next-line no-extra-parens
        parseInt(num) ? Number(num) : Number((num = "0"))
    );
    return new_nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_amounts = amounts.map((amount: string): number => {
        const value = parseInt(amount.replace("$", ""));
        return isNaN(value) ? 0 : value;
    });
    return new_amounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const new_messages = messages.map((word: string): string =>
        word.endsWith("!") ? word.toUpperCase() : word
    );
    const newnew = new_messages.filter(
        (word: string): boolean => !word.endsWith("?")
    );
    return newnew;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.map((word: string): number =>
        word.length < 4 ? (count = count + 1) : (count = count + 0)
    );
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) {
        return true;
    }
    let thing = true;
    colors.map((color: string): boolean =>
        color === "red" || color === "blue" || color === "green"
            ? (thing = true)
            : (thing = false)
    );

    return thing;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends || addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce((acc, num) => acc + num, 0);
    const addendStr =
        addends.length === 1 ? `${addends[0]}` : addends.join("+");
    return `${sum}=${addendStr}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const index = values.findIndex((value: number): boolean => value < 0);
    if (index === -1) {
        const sum2 = values.reduce((sum, curr) => sum + curr, 0);
        const arr = [...values, sum2];
        return arr;
    }

    const new_array = values.slice(0, index);
    const values2 = [...values];
    const sum = new_array.reduce((sum, curr) => sum + curr, 0);

    values2.splice(index + 1, 0, sum);
    return values2;
}
