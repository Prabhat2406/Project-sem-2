document.getElementById("checkBtn").addEventListener("click", function () {

    let total = parseInt(document.getElementById("totalClasses").value);
    let attended = parseInt(document.getElementById("attendedClasses").value);

    if (isNaN(total) || isNaN(attended) || total <= 0) {
        alert("Please enter valid values.");
        return;
    }

    if (attended > total) {
        alert("Attended classes cannot be greater than total classes.");
        return;
    }

    let percentage = ((attended / total) * 100).toFixed(2);

    document.getElementById("percentage").textContent =
        percentage + "%";

    let message = "";

    if (percentage >= 85) {
        message = "Excellent! You can safely miss a class if needed.";
    }
    else if (percentage >= 75) {
        message = "Good attendance. Try to attend regularly.";
    }
    else {
        message = "Warning! Attendance is below requirement.";
    }

    document.getElementById("message").textContent = message;
});
