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

    describe("sumOddIndices", function() {
        it("should return the correct sum for the example [10, 20, 30, 40, 50]", function() {
            expect(sumOddIndices([10, 20, 30, 40, 50])).toBe(60); // 20 + 40 = 60
        });

        it("should return the correct sum for the example [1, 3, 5, 7]", function() {
            expect(sumOddIndices([1, 3, 5, 7])).toBe(10); // 3 + 7 = 10
        });

        it("should return 0 for an empty array", function() {
            expect(sumOddIndices([])).toBe(0);
        });

        it("should return 0 for an array with one element", function() {
            expect(sumOddIndices([42])).toBe(0);
        });

        it("should return the element at index 1 for an array with two elements", function() {
            expect(sumOddIndices([5, 10])).toBe(10);
        });

        it("should handle negative numbers correctly", function() {
            expect(sumOddIndices([-1, -2, -3, -4])).toBe(-6); // -2 + -4 = -6
        });

        it("should handle decimal numbers correctly", function() {
            expect(sumOddIndices([1.5, 2.5, 3.5, 4.5])).toBe(7); // 2.5 + 4.5 = 7
        });

        it("should handle arrays with zeros", function() {
            expect(sumOddIndices([0, 0, 0, 0])).toBe(0); // 0 + 0 = 0
        });

        it("should handle mixed positive and negative numbers", function() {
            expect(sumOddIndices([10, -20, 30, -40, 50])).toBe(-60); // -20 + -40 = -60
        });

        it("should handle large numbers correctly", function() {
            expect(sumOddIndices([1000000, 2000000, 3000000, 4000000])).toBe(6000000); // 2000000 + 4000000 = 6000000
        });

        it("should handle arrays with negative zero correctly", function() {
            expect(sumOddIndices([-0, -0, -0, -0])).toBe(-0);
        });

        it("should correctly sum elements when array length is odd", function() {
            expect(sumOddIndices([1, 2, 3])).toBe(2); // Only index 1
        });

        it("should correctly sum elements when array length is even", function() {
            expect(sumOddIndices([1, 2, 3, 4])).toBe(6); // 2 + 4 = 6
        });
    });

}