const dealInput = document.getElementById("dealAmount");
const rateInput = document.getElementById("commissionRate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

//---------- Business Logic Function-------------


function calculateCommission (dealAmount, commissionRate) {
    return dealAmount * (commissionRate / 100);
}


// -------------Example Tiered Commission Logic------------------

const calculateTieredCommission = (dealAmount) => {
    if (dealAmount <= 10000) return dealAmount * 0.05;
    if (dealAmount <= 50000) return dealAmount * 0.07;
    return dealAmount * 0.10;
};

// -----------------------UI Logic----------------------------

const displayMessage = (message, type = "success") => {
    result.textContent = message;
    
    result.classList.remove("success", "error");

    result.classList.add(type);
};

const validateInputs = (dealAmount, commissionRate) => {
    if (isNaN(dealAmount) || isNaN(commissionRate)) {
        displayMessage("Please enter valid numbers.", "error");
        return false;
    }

    if (dealAmount <= 0) {
        displayMessage("Deal amount must be greater than 0","error");
        return false; 
    }



    if (commissionRate <= 0 || commissionRate > 100) {
        displayMessage("Commission rate must be between 0 and 100%.", "error");
        return false;
    }

    return true;
};


// ------------------------Main Controller-----------------------

const handleCalculation = () => {
    try {
        const dealAmount = Number(dealInput.value.trim());
        const commissionRate = Number(rateInput.value.trim());

        if (!validateInputs(dealAmount, commissionRate)) return;
 
        const commission = calculateCommission(dealAmount, commissionRate);

         // ---------------Local Storage------------------

        localStorage.setItem("dealAmount", dealAmount);
        localStorage.setItem("commissionRate", commissionRate);

        
        
        displayMessage(`Commission: $${commission.toFixed(2)}` , "success");

       
       
        } catch (error) {
          displayMessage("Something went wrong.", "error");
         console.error(error);
        }
 
}; 



calculateBtn.addEventListener("click", handleCalculation);

// -------------Load Saved Value when page opens--------------


window.addEventListener("DOMContentLoaded", () => {
    const savedDeal = localStorage.getItem("dealAmount");
    const savedRate = localStorage.getItem("commissionRate");

    if (savedDeal !== null) dealInput.value = savedDeal;
    if (savedRate !== null) rateInput.value = savedRate;

    if (savedDeal !== null && savedRate !== null) {
        handleCalculation();
    }


});

// --------------------Key Support----------------------------

[dealInput, rateInput].forEach(input => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            handleCalculation();

        }
    });
});


console.log("Running Commission test...");

console.log("Test 1 (10000 @ 10%):", calculateCommission(10000, 10) === 1000);
console.log("Test 2 (5000 @ 5%):", calculateCommission(5000, 5) === 250);
console.log("Test 3 (0 @ 10%):", calculateCommission(0, 10) === 0);

console.log("Running Tier Commission Tests...");

console.log("Tier Test 1 (8000):", calculateTieredCommission(8000) === 400);
console.log("Tier Test 2 (20000):", calculateTieredCommission(20000) === 1400);
console.log("Tier Test 3 (60000):", calculateTieredCommission(60000) === 6000);





