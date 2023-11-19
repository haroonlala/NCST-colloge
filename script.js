var results = {
    "123": "A",
    "456": "B",
    "789": "C",
    "101": "A+",
    "202": "B+",
    "303": "C+",
    "404": "A-",
    "505": "B-",
    "606": "C-",
    "707": "D"
};

function openResultBox() {
    document.getElementById("resultBox").style.display = "block";
}

function closeResultBox() {
    document.getElementById("resultBox").style.display = "none";
}

function checkResult() {
    var rollNumber = document.getElementById("rollNumber").value;
    var resultDisplay = document.getElementById("resultDisplay");

    if (results.hasOwnProperty(rollNumber)) {
        var result = results[rollNumber];
        resultDisplay.innerHTML = "Roll Number " + rollNumber + " ka result: " + result;
    } else {
        resultDisplay.innerHTML = "Roll Number " + rollNumber + " ka result nahi mila";
    }
}
