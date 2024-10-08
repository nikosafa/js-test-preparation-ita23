function testAllLearningGoals() {
    describe("trackStudentGrades", function() {
        it("should correctly identify passing and failing students based on grades and attendance", function() {
            const students = [
                { name: "Alice", grades: [85, 78, 92], attendance: 80 },
                { name: "Bob", grades: [60, 50, 70], attendance: 65 },
                { name: "Charlie", grades: [90, 95, 85], attendance: 95 },
                { name: "David", grades: [40, 30, 50], attendance: 70 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Alice", "Charlie"]);
            expect(result.failing).toEqual(["Bob", "David"]);
        });

        it("should handle students with perfect grades and attendance", function() {
            const students = [
                { name: "Eve", grades: [100, 100, 100], attendance: 100 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Eve"]);
            expect(result.failing).toEqual([]);
        });

        it("should handle students with borderline passing criteria", function() {
            const students = [
                { name: "Frank", grades: [70, 70, 70], attendance: 75 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Frank"]);
            expect(result.failing).toEqual([]);
        });

        it("should handle students with borderline failing criteria", function() {
            const students = [
                { name: "Grace", grades: [69, 69, 69], attendance: 74 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual([]);
            expect(result.failing).toEqual(["Grace"]);
        });

        it("should return empty arrays when no students are provided", function() {
            const students = [];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual([]);
            expect(result.failing).toEqual([]);
        });

        it("should correctly process students with attendance on the edge of passing", function() {
            const students = [
                { name: "Mia", grades: [80, 85, 90], attendance: 75 },
                { name: "Nora", grades: [80, 85, 90], attendance: 74.9 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Mia"]);
            expect(result.failing).toEqual(["Nora"]);
        });

        it("should handle students with grades on the edge of passing", function() {
            const students = [
                { name: "Oscar", grades: [70, 70, 70], attendance: 80 },
                { name: "Paul", grades: [69.9, 70, 70], attendance: 80 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Oscar"]);
            expect(result.failing).toEqual(["Paul"]);
        });

        it("should handle decimal grades and attendance", function() {
            const students = [
                { name: "Quinn", grades: [85.5, 90.2, 88.3], attendance: 85.7 },
                { name: "Rachel", grades: [65.5, 70.1, 69.9], attendance: 74.5 }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Quinn"]);
            expect(result.failing).toEqual(["Rachel"]);
        });

        it("should handle students with extra properties", function() {
            const students = [
                { name: "Wendy", grades: [80, 85, 90], attendance: 80, extra: "data" }
            ];
            const result = trackStudentGrades(students);
            expect(result.passing).toEqual(["Wendy"]);
            expect(result.failing).toEqual([]);
        });

        it("should correctly handle large datasets", function() {
            const students = [];
            for (let i = 0; i < 1000; i++) {
                students.push({
                    name: `Student${i}`,
                    grades: [Math.random() * 40 + 60, Math.random() * 40 + 60, Math.random() * 40 + 60],
                    attendance: Math.random() * 25 + 75
                });
            }
            const result = trackStudentGrades(students);
            expect(result.passing.length + result.failing.length).toBe(1000);
        });


    });

}