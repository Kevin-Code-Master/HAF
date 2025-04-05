//Calculate the age of the patient

function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    let ageInput = document.getElementById("age");

    if (dobInput) {
        let today = new Date();
        let dob = new Date (dobInput);

        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        let dayDiff = today.getDate() - dob.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age --;
        }
        ageInput.value = `${age} years`;
    };
};

document.getElementById("dob").addEventListener("input", calculateAge);

//Calculate BMI

function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value)/100;//convert height to meters
  

    if (weight > 0 && height > 0) {
        //calculate BMI
        let bmi = (weight/(height**2)).toFixed(2);
        //display BMI value in the BMI input
        document.getElementById("bmi").value = bmi;
    }else{
        document.getElementById("bmi").value = "";
    }
};
document.getElementById("weight").addEventListener("input",calculateBMI);
document.getElementById("height").addEventListener("input",calculateBMI);
