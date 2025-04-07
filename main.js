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
    let bpInterpretation = document.getElementById("interpretation");

    bpInterpretation.classList.add("interpretation");

    let bp = document.getElementById("bp");

    if ((isNaN(systoleReading) || isNaN(diastoleReading)) || (systoleReading === "" || diastoleReading === "")) {
        bp.value = "Enter valid readings";
        return;
    };
    
    if (systoleReading < 120 && diastoleReading < 80) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bpInterpretation.value = "Normal BP✅";
        bpInterpretation.classList.toggle("normal_bp");
        
    }else if ((systoleReading >=120 && systoleReading <=129) && diastoleReading <= 80) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bpInterpretation.value = "Elevated BP ⚠️";
        bpInterpretation.classList.toggle("elevated_bp");
        
    }else if ((systoleReading >=130 && systoleReading <=139) || (diastoleReading >= 80 && diastoleReading <= 89)) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bpInterpretation.classList.toggle("high_bp1");
        bpInterpretation.value = "High BP (Stage 1) ⚠️";
    }else if (systoleReading >=140 || diastoleReading >= 90) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bpInterpretation.classList.toggle("high_bp2");
        bpInterpretation.value = "High BP (Stage 2)❗";
    }else if (systoleReading >=180 || diastoleReading > 120) {
        bp.value = `${systoleReading}/${diastoleReading} mmHg`;

        bpInterpretation.classList.toggle("hypertensive");
        bpInterpretation.value = "Hypertensive Crisis ‼️ Seek emergency care!";
    };
};
document.getElementById("systole").addEventListener("input",calculatePressure);
document.getElementById("diastole").addEventListener("input",calculatePressure);