function getmarks() {
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
    var totalmarks = 400;
    var marksob = maths + physics + chemistry + english;
    var percentage = (marksob / totalmarks) * 100;
    var grade = "";
    document.getElementById("percentage").innerHTML = percentage + "%";


    if (percentage > 90) {
        grade = "A+";
    } else if (percentage < 90 && percentage > 80) {
        grade = "A";
    } else if (percentage < 80 && percentage > 60) {
        grade = "B";
    } else if (percentage < 60 && percentage > 40) {
        grade = "C";
    } else if (percentage < 40 && percentage > 35) {
        grade = "D";
    } else if (percentage < 30) {
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    if (percentage < 30) {
        document.getElementById("pass").innerHTML = "sorry!You failed.";
    } else {
        document.getElementById("pass").innerHTML = "Keep it up!You passed.";
    }
}
