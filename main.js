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

//CALCULATE PRESSURE

function calculatePressure() {
    let systoleReading = parseFloat(document.getElementById("systole").value);
    let diastoleReading = parseFloat(document.getElementById("diastole").value);
    let bp_interpretation = document.getElementById("bp_interpretation");
    let bp = document.getElementById("bp");

    if ((isNaN(systoleReading) || isNaN(diastoleReading)) || (systoleReading === "" || diastoleReading === "")) {
        bp.value = "Enter valid readings";
        return;
    };
    
    if ((systoleReading >= 90 && systoleReading < 120) && (diastoleReading >= 60 && diastoleReading < 80)) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bp_interpretation.value = "Normal BP✅";
        bp_interpretation.classList.toggle("normal_bp");
        
    }else if ((systoleReading >=120 && systoleReading <=129) && (diastoleReading >= 60 && diastoleReading < 80)) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bp_interpretation.value = "Elevated BP ⚠️";
        bp_interpretation.classList.toggle("elevated_bp");
        
    }else if ((systoleReading >=130 && systoleReading <=139) || (diastoleReading >= 80 && diastoleReading <= 89)) {
         bp.value = `${systoleReading}/${diastoleReading} mmHg`;

         bp_interpretation.value = "High BP (Stage 1) ⚠️";
         bp_interpretation.classList.toggle("high_bp1");
    }else if ((systoleReading >=140 && systoleReading <= 180) || (diastoleReading >= 90 && diastoleReading <= 120)) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bp_interpretation.value = "High BP (Stage 2)❗";
        bp_interpretation.classList.toggle("high_bp2");
    }else if (systoleReading > 180 || diastoleReading > 120) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bp_interpretation.value = "Hypertensive Crisis ‼️ Seek emergency care!";
        bp_interpretation.classList.toggle("hypertensive_bp");
    };
};
document.getElementById("systole").addEventListener("input",calculatePressure);
document.getElementById("diastole").addEventListener("input",calculatePressure);

