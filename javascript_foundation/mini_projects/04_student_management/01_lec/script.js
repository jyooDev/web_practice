//Initialize student array
const students = [];

function addStudent(){
    console.log(document.getElementById('studentTable'));
    const name = prompt("Enter the student's name.");
    const grade = prompt("Enter the student's grade.");
    students.push({
        name, grade
    });
    let table = document.getElementById("studentTable");
    let row = table.getElementsByTagName('tbody')[0].insertRow(-1);
    console.log(row);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = grade;
}

function removeStudent(name){
    const index = students.findIndex(student => student.name === name);
    if (index !== -1){
        students.splice(index,1);
        console.log(name, " has been removed");
    } else{
        console.log(name, "was not found.");
    }
}

function formatStudentList(students){
    return students.map((student) => `${student.name} - Grade - ${student.grade}`);
}

function filterTopStudents(minGrade){
    return students.filter((student) => student.grade >= minGrade);
}

// addStudent("Alice", 85);
// addStudent("Bob", 90);
// addStudent("David", 60);
// addStudent("Emma", 92);
// addStudent("Emmauel", 99);
// addStudent("Chad", 98);
// console.log('students now: ', students);

// const formattedList = formatStudentList(students);
// console.log(formattedList);

// removeStudent('Emma');

// const filteredStudents = filterTopStudents(90);
// const formattedFilteredList = formatStudentList(filteredStudents);

// console.log(formattedFilteredList);