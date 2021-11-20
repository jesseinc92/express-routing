const { mean, median, mode } = require('./helpers');

describe('Tests that mean returns an average number', () => {
    test('Empty array', () => {
        expect(mean([])).toEqual(0);
    });
    test('Normal array', () => {
        expect(mean([1,2,3,4])).toEqual(2.5);
    });
});

describe('Tests that median returns an middle number', () => {
    test('Even set', () => {
        expect(median([1,2,3,4,5,6])).toEqual(3.5);
    });
    test('Odd set', () => {
        expect(median([1,2,3,4,5])).toEqual(3);
    });
});

describe('Tests that mode returns a frequent number', () => {
    test('Set', () => {
        expect(mode([1,2,2,3,4,5])).toEqual(2);
    });
});
