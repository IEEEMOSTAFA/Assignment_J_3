function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Invalid Array";
    }  

    const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (typeof item === 'number' && !isNaN(item)) {
            result.push(item);
        }
    }
     return result;
}


const input1 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(input1)); // [ 1, 18, -19 ]

// দ্বিতীয় স্যাম্পল ইনপুট
const input2 = ["1", { num: 2 }, NaN];
console.log(deleteInvalids(input2)); // []

// তৃতীয় স্যাম্পল ইনপুট
const input3 = [1, 2, -3];
console.log(deleteInvalids(input3)); // [ 1, 2, -3 ]

// চ্যালেঞ্জের জন্য ইনভ্যালিড ইনপুট
const invalidInput = { num: [1, 2, 3] };
console.log(deleteInvalids(invalidInput)); // Invalid Array
