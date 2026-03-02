function markPresent() {
    addAttendance("Present");
}
function markAbsent() {
    addAttendance("Absent");
}
function addAttendance(status) {
    let name =
        document.getElementById("name").value;
    if (name === "") {
        alert("Please enter student name");
        return;
    }
    let table = document.getElementById("attendenceList");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1. innerHTML = name;
    cell2. innerHTML = status;
    document.getElementById("name").value = "";
}




