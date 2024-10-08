function testLoopsConditionals() {
    describe("02-loops-conditional - getNextEven", function() {
        it("should return the next even number", () => {
            expect(getNextEven(3)).toBe(4);
        });

        it("should return the next even number if given an even number", () => {
            expect(getNextEven(8)).toBe(10);
        });

        it("should handle negative numbers", () => {
            expect(getNextEven(-3)).toBe(-2);
        });
    });

    describe("02-loops-conditional - isMultipleOf", function() {
        it("should return true when n is a multiple of m", () => {
            expect(isMultipleOf(10, 2)).toBe(true);
        });

        it("should return false when n is not a multiple of m", () => {
            expect(isMultipleOf(10, 3)).toBe(false);
        });

        it("should handle zero appropriately", () => {
            expect(isMultipleOf(0, 5)).toBe(true); // 0 is a multiple of any number except 0
        });

        it("should return false when divisor is zero", () => {
            expect(isMultipleOf(10, 0)).toBe(false); // Division by zero is undefined
        });

        it("should handle negative numbers", () => {
            expect(isMultipleOf(-10, 2)).toBe(true);
            expect(isMultipleOf(10, -2)).toBe(true);
            expect(isMultipleOf(-10, -2)).toBe(true);
        });

        it("should return true when n and m are equal", () => {
            expect(isMultipleOf(5, 5)).toBe(true);
        });

        it("should handle 1 correctly", () => {
            expect(isMultipleOf(5, 1)).toBe(true);
            expect(isMultipleOf(1, 5)).toBe(false);
        });
    });

    describe("02-loops-conditional - countCapitals", function() {
        it("should return the correct count of uppercase letters", () => {
            expect(countCapitals("Hello World")).toBe(2);
            expect(countCapitals("JavaScript")).toBe(2);
            expect(countCapitals("ABC")).toBe(3);
            expect(countCapitals("abc")).toBe(0);
        });

        it("should handle empty strings", () => {
            expect(countCapitals("")).toBe(0);
        });

        it("should handle strings with no uppercase letters", () => {
            expect(countCapitals("hello world")).toBe(0);
        });

        it("should handle strings with all uppercase letters", () => {
            expect(countCapitals("HELLO WORLD")).toBe(10);
        });

        it("should handle non-alphabetic characters", () => {
            expect(countCapitals("1234")).toBe(0);
            expect(countCapitals("!@#$%^&*()")).toBe(0);
        });

        it("should handle mixed strings", () => {
            expect(countCapitals("Hello123")).toBe(1);
        });
    });

    describe("02-loops-conditional - countVowelsInWords", function() {
        it("should return the correct count of vowels in combined words", () => {
            expect(countVowelsInWords("hello", "world")).toBe(3);
            expect(countVowelsInWords("apple", "banana")).toBe(5);
            expect(countVowelsInWords("AEIOU", "aeiou")).toBe(10);
        });

        it("should handle empty strings", () => {
            expect(countVowelsInWords("", "")).toBe(0);
            expect(countVowelsInWords("hello", "")).toBe(2);
            expect(countVowelsInWords("", "world")).toBe(1);
        });

        it("should handle strings with no vowels", () => {
            expect(countVowelsInWords("bcdfg", "hjklm")).toBe(0);
        });

        it("should handle uppercase and lowercase vowels", () => {
            expect(countVowelsInWords("HELLO", "WORLD")).toBe(3);
        });

        it("should handle mixed strings", () => {
            expect(countVowelsInWords("Hello123", "World456")).toBe(3);
        });
    });

}