//Create an array for the list of grades and a variable for the grades
let gradeList = [];
let grades;
//Ask the user for the grades and put them in to the array. If they enter -1, stop the program
while (grades != -1) {
    grades = parseInt(prompt("Enter the grades (Enter -1 to quit):"));
    if (grades != -1) {
        gradeList.push(grades);
    }
}

//Create a function that returns the average
function avgGrades(list){
    let sum = 0;
    for (let i = 0; i< list.length;i++){
        sum = sum + list[i];
    }
    let result = sum / list.length; 
    return result;
}

//Alert the user the average
alert(`The average grade is ${avgGrades(gradeList)}`);