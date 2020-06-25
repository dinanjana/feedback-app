const { getNextIndex, getCurrentPageNumber } = require('../index');

test('Should return 0 for initial', () => {
    const nextIndex = getNextIndex(21, 5, true, true);
    expect(nextIndex).toBe(0);
});

test('Should return 10 for next', () => {
    const nextIndex = getNextIndex(21, 5, false, true);
    expect(nextIndex).toBe(10);
});

test('Should return 5 for previous', () => {
    const nextIndex = getNextIndex(21, 10, false, false);
    expect(nextIndex).toBe(5);
});

test('Should return 0 for initial', () => {
    const nextIndex = getNextIndex(21, 20, false, true);
    expect(nextIndex).toBe(20);
});

test('Should return 0 for previous', () => {
    const nextIndex = getNextIndex(21, 0, false, false);
    expect(nextIndex).toBe(0);
});

test('Next page number should be 5', () => {
    const pageNumber = getCurrentPageNumber(31, 23);
    expect(pageNumber).toBe(5);
});

test('Next page number should be 7', () => {
    const pageNumber = getCurrentPageNumber(31, 31);
    expect(pageNumber).toBe(7);
});

test('Next page number should be 0', () => {
    const pageNumber = getCurrentPageNumber(31, 0);
    expect(pageNumber).toBe(1);
});