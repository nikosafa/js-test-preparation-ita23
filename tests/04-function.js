function testFunction() {
    describe('04-function - greetUser', () => {
        it("should greet a user by their name", () => {
            const result = greetUser("Jack");
            expect(result).toBe("Hello, Jack");
        });
    });

    describe('04-function - toSpinalCase', () => {
        it("should convert a string to spinal case", () => {
            const result = toSpinalCase("This Is Spinal Tap");
            expect(result).toBe("this-is-spinal-tap");
        });

        it("should convert a string to spinal case", () => {
            const result = toSpinalCase("hello how are you");
            console.log(result)
            expect(result).toBe("hello-how-are-you");
        });

        it("should return an empty string for an empty input", () => {
            const result = toSpinalCase("");
            expect(result).toBe("");
        });
    });

    describe('04-function - lightTravelTime', () => {
        it("should calculate the time taken by light to travel a certain distance", () => {
            const result = lightTravelTime(300000);
            expect(result).toBe(1);
        });

        it("should return 0 for a distance of 0 km", () => {
            const result = lightTravelTime(0);
            expect(result).toBe(0);
        });

        it("should return 2 for a distance of 600000 km", () => {
            const result = lightTravelTime(600000);
            expect(result).toBe(2);
        });
    });

    describe("mirrorWordCheck", function() {
        it("should return true for words that are mirrors of each other", function() {
            expect(mirrorWordCheck("stressed", "desserts")).toBe(true);
            expect(mirrorWordCheck("live", "evil")).toBe(true);
            expect(mirrorWordCheck("god", "dog")).toBe(true);
            expect(mirrorWordCheck("madam", "madam")).toBe(true); // Palindrome words
        });

        it("should return false for words that are not mirrors of each other", function() {
            expect(mirrorWordCheck("hello", "world")).toBe(false);
            expect(mirrorWordCheck("test", "sett")).toBe(false);
            expect(mirrorWordCheck("mirror", "mirror")).toBe(false);
        });

        it("should handle case sensitivity correctly", function() {
            expect(mirrorWordCheck("Stressed", "dessertS")).toBe(true);
            expect(mirrorWordCheck("Live", "Evil")).toBe(true);
            expect(mirrorWordCheck("God", "Dog")).toBe(true);
            expect(mirrorWordCheck("Madam", "madam")).toBe(true);
        });

        it("should return true for empty strings", function() {
            expect(mirrorWordCheck("", "")).toBe(true);
        });

        it("should return false when one word is empty and the other is not", function() {
            expect(mirrorWordCheck("hello", "")).toBe(false);
            expect(mirrorWordCheck("", "world")).toBe(false);
        });

        it("should handle single-character strings", function() {
            expect(mirrorWordCheck("a", "a")).toBe(true);
            expect(mirrorWordCheck("a", "b")).toBe(false);
        });

        it("should handle strings with spaces and special characters", function() {
            expect(mirrorWordCheck("A man, a plan, a canal, Panama", "amanaP ,lanac a ,nalp a ,nam A")).toBe(true);
            expect(mirrorWordCheck("No 'x' in Nixon", "noxiN ni x'oN")).toBe(true);
        });

        it("should handle strings with numbers", function() {
            expect(mirrorWordCheck("12345", "54321")).toBe(true);
            expect(mirrorWordCheck("12345", "12345")).toBe(false);
        });

        it("should return false for words of different lengths", function() {
            expect(mirrorWordCheck("hello", "olle")).toBe(false);
            expect(mirrorWordCheck("abc", "cba ")).toBe(false); // Extra space
        });

        it("should handle Unicode characters", function() {
            expect(mirrorWordCheck("こんにちは", "はちにんこ")).toBe(true);
            expect(mirrorWordCheck("你好", "好你")).toBe(true);
            expect(mirrorWordCheck("🙂🙃", "🙃🙂")).toBe(true);
        });

        it("should ignore leading and trailing whitespace", function() {
            expect(mirrorWordCheck(" stressed", "desserts ")).toBe(true);
            expect(mirrorWordCheck("hello ", " olleh")).toBe(true);
        });

        it("should consider whitespace in the middle of the strings", function() {
            expect(mirrorWordCheck("hello world", "dlrow olleh")).toBe(true);
            expect(mirrorWordCheck("hello  world", "dlrow  olleh")).toBe(true);
            expect(mirrorWordCheck("hello world", "dlrowolleh")).toBe(false);
        });

        it("should be symmetric", function() {
            expect(mirrorWordCheck("stressed", "desserts")).toBe(true);
            expect(mirrorWordCheck("desserts", "stressed")).toBe(true);
        });
    });

}