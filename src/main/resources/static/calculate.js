var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
    49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var letterGradesBound = [];

var grade_max;
var grade_aplus;
var grade_a;
var grade_amin;
var grade_bplus;
var grade_b;
var grade_bmin;
var grade_cplus;
var grade_c;
var grade_cmin;
var grade_d;
var grade_f;
var inputGrade;

function checkBoundLetterGrades() {
    for (var i = 0; i < 11; i++) {

        if (letterGradesBound[i] >= letterGradesBound[i+1] || letterGradesBound[i] < 0) {
            alert("Error: please fix bounds of the letter-grades")
            return false;
        }
    }
    return true;
}

setGradeMarks();
function setGradeMarks() {
    grade_max = parseFloat(document.getElementById("max").value);
    grade_aplus = parseFloat(document.getElementById("A-plus").value);
    grade_a = parseFloat(document.getElementById("A").value);
    grade_amin = parseFloat(document.getElementById("A-minus").value);
    grade_bplus = parseFloat(document.getElementById("B-plus").value);
    grade_b = parseFloat(document.getElementById("B").value);
    grade_bmin = parseFloat(document.getElementById("B-minus").value);
    grade_cplus = parseFloat(document.getElementById("C-plus").value);
    grade_c = parseFloat(document.getElementById("C").value);
    grade_cmin = parseFloat(document.getElementById("C-minus").value);
    grade_d = parseFloat(document.getElementById("D").value);
    grade_f = parseFloat(document.getElementById("F").value);

    letterGradesBound[0] = grade_f;
    letterGradesBound[1] = grade_d;
    letterGradesBound[2] = grade_cmin;
    letterGradesBound[3] = grade_c;
    letterGradesBound[4] = grade_cplus;
    letterGradesBound[5] = grade_bmin;
    letterGradesBound[6] = grade_b;
    letterGradesBound[7] = grade_bplus;
    letterGradesBound[8] = grade_amin;
    letterGradesBound[9] = grade_a;
    letterGradesBound[10] = grade_aplus;
    letterGradesBound[11] = grade_max;
}


//Update the histogram after a new grade has been submitted
function updateHistogram() {

    if (inputGrade == grade_max || inputGrade >= grade_aplus) {
        document.getElementById("histogram-A-plus").innerHTML = document.getElementById("histogram-A-plus").innerHTML + "O";
    } else if (inputGrade >= grade_a) {
        document.getElementById("histogram-A").innerHTML = document.getElementById("histogram-A").innerHTML + "O";
    } else if (inputGrade >= grade_amin) {
        document.getElementById("histogram-A-minus").innerHTML = document.getElementById("histogram-A-minus").innerHTML + "O";
    }
    else if (inputGrade >= grade_bplus) {
        document.getElementById("histogram-B-plus").innerHTML = document.getElementById("histogram-B-plus").innerHTML + "O";
    } else if (inputGrade >= grade_b) {
        document.getElementById("histogram-B").innerHTML = document.getElementById("histogram-B").innerHTML + "O";
    }
    else if (inputGrade >= grade_bmin) {
        document.getElementById("histogram-B-minus").innerHTML = document.getElementById("histogram-B-minus").innerHTML + "O";
    }
    else if (inputGrade >= grade_cplus) {
        document.getElementById("histogram-C-plus").innerHTML = document.getElementById("histogram-C-plus").innerHTML + "O";
    } else if (inputGrade >= grade_c) {
        document.getElementById("histogram-C").innerHTML = document.getElementById("histogram-C").innerHTML + "O";
    }
    else if (inputGrade >= grade_cmin) {
        document.getElementById("histogram-C-minus").innerHTML = document.getElementById("histogram-C-minus").innerHTML + "O";
    }
    else if (inputGrade >= grade_d) {
        document.getElementById("histogram-D").innerHTML = document.getElementById("histogram-D").innerHTML + "O";

    }
    else if (inputGrade >= grade_f) {
        document.getElementById("histogram-F").innerHTML = document.getElementById("histogram-F").innerHTML + "O";
    }
}

//empty the data
function resetHistogram() {
    document.getElementById("histogram-A-plus").innerHTML = "";
    document.getElementById("histogram-A").innerHTML = "";
    document.getElementById("histogram-A-minus").innerHTML = "";
    document.getElementById("histogram-B-plus").innerHTML = "";
    document.getElementById("histogram-B").innerHTML = "";
    document.getElementById("histogram-B-minus").innerHTML = "";
    document.getElementById("histogram-C-plus").innerHTML = "";
    document.getElementById("histogram-C").innerHTML = "";
    document.getElementById("histogram-C-minus").innerHTML = "";
    document.getElementById("histogram-D").innerHTML = "";
    document.getElementById("histogram-F").innerHTML = "";
}

//displaying the initialized array of grades
displayHistogram();
function displayHistogram() {
    grades.forEach((grade) => {
        if (grade == grade_max || grade >= grade_aplus) {
            document.getElementById("histogram-A-plus").innerHTML = document.getElementById("histogram-A-plus").innerHTML + "O";
        } else if (grade >= grade_a) {
            document.getElementById("histogram-A").innerHTML = document.getElementById("histogram-A").innerHTML + "O";
        } else if (grade >= grade_amin) {
            document.getElementById("histogram-A-minus").innerHTML = document.getElementById("histogram-A-minus").innerHTML + "O";
        }
        else if (grade >= grade_bplus) {
            document.getElementById("histogram-B-plus").innerHTML = document.getElementById("histogram-B-plus").innerHTML + "O";
        } else if (grade >= grade_b) {
            document.getElementById("histogram-B").innerHTML = document.getElementById("histogram-B").innerHTML + "O";
        }
        else if (grade >= grade_bmin) {
            document.getElementById("histogram-B-minus").innerHTML = document.getElementById("histogram-B-minus").innerHTML + "O";
        }
        else if (grade >= grade_cplus) {
            document.getElementById("histogram-C-plus").innerHTML = document.getElementById("histogram-C-plus").innerHTML + "O";
        } else if (grade >= grade_c) {
            document.getElementById("histogram-C").innerHTML = document.getElementById("histogram-C").innerHTML + "O";
        }
        else if (grade >= grade_cmin) {
            document.getElementById("histogram-C-minus").innerHTML = document.getElementById("histogram-C-minus").innerHTML + "O";
        }
        else if (grade >= grade_d) {
            document.getElementById("histogram-D").innerHTML = document.getElementById("histogram-D").innerHTML + "O";

        }
        else if (grade >= grade_f) {
            document.getElementById("histogram-F").innerHTML = document.getElementById("histogram-F").innerHTML + "O";

        }
    })
}

var btn = document.getElementById("submit");
btn.addEventListener("click", updateNewGrade);

function updateNewGrade() {
    setGradeMarks();
    if (checkBoundLetterGrades() == true) {
        if (newGrade.value != "") {
            inputGrade = parseFloat(newGrade.value);
            if (inputGrade < 0) {
                alert("Error: please input a positive number");
            }
            else if (inputGrade > grade_max) {
                alert("Error: the input cannot exceed the maximum number specified");
            }
            else if (inputGrade < grade_f) {
                alert("Error: cannot input a number lower than the F-grade");
            }
            else {
                grades.push(inputGrade);
                updateHistogram();
                newGrade.value = "";
            }
        }
        resetHistogram();
        displayHistogram();
    }
}


