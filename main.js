function searchNumbers(array) {
    if (array.length === 0) {
        return ["Массив пустой:("];
    }

    const sortedArray = array.sort((a, b) => a - b);
    const missingNumbers = [];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        const current = sortedArray[i];
        const next = sortedArray[i + 1];

        if (next - current > 1) {
            for (let j = current + 1; j < next; j++) {
                missingNumbers.push(j);
            }
        }
    }

    if (missingNumbers.length === 0) {
        return ["Пропущенных чисел нет:)"];
    } else {
        return missingNumbers;
    }
}
function runTests() {
    const testCases = [
        {
            input: [],
            expected: ["Массив пустой:("]
        },
        {
            input: [5],
            expected: ["Введите в массив больше чисел пожалуйста:)"]
        },
        {
            input: [1, 2, 4, 6, 7, 9],
            expected: [3, 5, 8]
        },
        {
            input: [10, 12, 13, 14, 15],
            expected: [11]
        },
        {
            input: [1, 2, 3, 4, 5],
            expected: ["Пропущенных чисел нет:)"]
        },
    ];

    testCases.forEach((testCase, index) => {
        const result = searchNumbers(testCase.input);
        const pass = arraysEqual(result, testCase.expected);
        console.log(`Test ${index + 1}: ${pass ? 'Passed' : 'Failed'}`);
        console.log(`Expected: ${testCase.expected}`);
        console.log(`Actual: ${result}`);
        console.log('\n');
    });
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

runTests();
