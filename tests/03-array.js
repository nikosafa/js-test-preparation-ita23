function testArray() {
    describe('03-array - getLastElement', () => {
        it('Should return the last number in the array', function() {
            const lastElement = getLastElement([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
            expect(lastElement).toEqual(20);

            const lastElement2 = getLastElement([2, 4, 6, 8, 10]);
            expect(lastElement2).toEqual(10);
        });
    });

    describe('03-array - returnEvenNumbers', () => {
        it('should return even numbers from 2 to 20', function() {
            const result = returnEvenNumbers(2, 20);
            expect(result).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
        });

        it('should return even numbers from 3 to 19', function() {
            const result = returnEvenNumbers(3, 19);
            expect(result).toEqual([4, 6, 8, 10, 12, 14, 16, 18]);
        });

        it('should return an empty array if start is greater than finish', function() {
            const result = returnEvenNumbers(22, 20);
            expect(result).toEqual([]);
        });
    });

    describe('03-array - squareArray', () => {
        it('should return an array with the square of each number', () => {
            expect(squareArray([1, 2, 3])).toEqual([1, 4, 9]);
            expect(squareArray([-1, -2, 3])).toEqual([1, 4, 9]);
        });

        it('should return an empty array when given an empty array', () => {
            expect(squareArray([])).toEqual([]);
        });
    });

    describe('03-array - findMax', () => {
        it('should return the maximum number in an array', () => {
            expect(findMax([1, 2, 3])).toBe(3);
            expect(findMax([-1, -2, 3])).toBe(3);
        });

        it('should handle arrays with a single element', () => {
            expect(findMax([42])).toBe(42);
        });
    });
}