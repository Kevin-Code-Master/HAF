

const dob = document.getElementById("dob").value;

function calculateAge() {
    
    let patientDob = new Date(dob);
    let today = new Date();
    let patientAge = today.getFullYear() - patientDob.getFullYear();

    let monthDiff = today.getMonth() - patientDob.getMonth();
    let dayDiff = today.getDate() - patientDob.getDate();

    // adjust age if birthday has not occured yet this year

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        patientAge--;
    }
    return patientAge;
};

document.addEventListener("DOMContentLoaded", () => {
    let dobField = document.getElementById("dob");
    let ageSpan = document.getElementById("age");

    if (dobField) {
        dobField.addEventListener("change", () => {
            ageSpan.textContent = calculateAge();
        });
    };
});