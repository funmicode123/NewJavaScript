const {numberGreaterOrEqualsSeventy, addFive, squareNumber, distributeBooks, scheduleClasses, finalGrades, davidExpenses} = require("./studentsscore");

test("numbers greater than or equals to seventy", () => {
    const arrayOfNumbers = [80, 72, 55, 44, 95];
    let result = numberGreaterOrEqualsSeventy(arrayOfNumbers);
    let answer = [80, 72, 95];
    expect(result).toEqual(answer);
});

test("add five points to each score", () => {
    const arrayOfNumbers = [80, 72, 55, 44, 95];
    let result = addFive(arrayOfNumbers);
    let answer = [85, 77, 60, 49, 100];
    expect(result).toEqual(answer);
});

test("square each score in the list", () => {
    const arrayOfNumbers = [2, 4, 6, 8, 10];
    let result = squareNumber(arrayOfNumbers);
    let answer = [4, 16, 36, 64, 100];
    expect(result).toEqual(answer);
});

test("distribute a different book to each student", () => {
    const arrayOfStudents = ["Emily", "Jack", "Sophia", "Daniel"];
    let result = distributeBooks(arrayOfStudents);
    let answer = [
        {"name": "Emily", "book": "Gold & Silver"},
        {"name": "Jack", "book": "Money & pride"},
        {"name": "Sophia", "book": "Confidence is a virtue"},
        {"name": "Daniel", "book": "Career growth"}
    ];
    expect(result).toEqual(answer);
});

test("filter the afternoon classes out of the schedule", () => {
    let times = ["12:00PM", "8:00AM", "02:00PM"];
    let afternoonClasses = ["12:00PM", "02:00PM"];
    let result = scheduleClasses(times);
    expect(result).toEqual(afternoonClasses);
});

test("the list returns the corresponding letter grade", () => {
    const scores = [95, 82, 76, 64, 58];
    let result = finalGrades(scores);
    let answer = ["A", "B", "C", "D", "F"];
    expect(result).toEqual(answer);
});

test("the object returns the accurate addition", () => {
    let object = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    };
    let expectedSum = sumExpenses(object);
    let result = 380;
    expect(expectedSum).toEqual(result);
});

test("")