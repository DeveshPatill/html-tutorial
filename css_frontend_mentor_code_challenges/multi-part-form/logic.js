const steps = document.querySelectorAll('.step');
const stepindicators = document.querySelectorAll('.step-indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');


let currentstep = 1;
let result_form = {
    billing : "Monthly",
    plan : { name: 'Arcade', price: 9, period: 'mo' },
    addon : [],
};

function userinterface_changes(){
    steps.forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`[data-step-content="${currentstep}"]`).classList.add('active');

    stepindicators.forEach(indicator => {
        indicator.classList.remove('active');
        if(parseInt(indicator.getAttribute('data-step')) === currentstep) 
            indicator.classList.add('active');
    });

    prevBtn.classList.toggle('hidden',currentstep === 1);
        
    if(currentstep === steps.length) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    }else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
};

// Event Listener for 'Next Step'
nextBtn.addEventListener('click', () => {
    if (currentstep === 1) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if (!name || !email) {
            alert("Please fill in all personal info fields.");
            return; 
        }
    }

    if (currentstep < steps.length) {
        currentstep++;
        userinterface_changes();
    }
});

// Event Listener for 'Go Back'
prevBtn.addEventListener('click', () => {
    if (currentstep > 1) {
        currentstep--;
        userinterface_changes();
    }
});

// Event Listener for 'Confirm'
document.getElementById('multiStepForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Form Submitted! Total amount: ${document.getElementById('total-price').textContent}. Check console for full data.`);
    console.log("Final Form Data:", result_form);
});

