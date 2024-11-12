const test_scores = [90, 55, 78, 50, 20, 85, 75, 88, 45, 50];

function numberGreaterOrEqualsSeventy(array) {
    let result = array.filter((score) => score >= 70);
    return result;
}

function addFive(array) {
    let result = array.map((score) => score + 5);
    return result;
}

function squareNumber(array) {
    let result = array.map((score) => score * score);
    return result;
}

function distributeBooks(books) {
    let result = [];
    let arrayOfStudents = ["Emily", "Jack", "Sophia", "Daniel"];
    for (let index = 0; index < arrayOfStudents.length; index++) {
        result.push({ student: arrayOfStudents[index], book: books[index % books.length] });
    }
    return result;
}

function scheduleClasses(times) {
    const afternoonClasses = ["1:00PM", "3:00PM", "5:00PM"];
    return times.filter(time => afternoonClasses.includes(time));
}

function finalGrades(scores) {
    const gradeMapping = (score) => {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        else return "F";
    };
    return scores.map(score => gradeMapping(score));
}

function davidExpenses() {
    let david = {
        "groceries": 150,
        "dining out": 100,
        "transportation": 50,
        "entertainment": 80
    };
    return Object.values(david).reduce((sum, expense) => sum + expense, 0);
}


let books = ["Math", "Science", "History", "Literature"];
let times = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
let scores = [95, 78, 85, 60, 45, 92];


console.log(distributeBooks(books));
console.log(scheduleClasses(times));
console.log(finalGrades(scores));
console.log(davidExpenses());


module.exports = { numberGreaterOrEqualsSeventy, addFive, squareNumber, distributeBooks, scheduleClasses, finalGrades, davidExpenses };
