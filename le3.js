// Student Percentage 

function calculatePercentage(math, english, science) {
    let total = math + english + science;
    let percentage = (total / 300) * 100;

    return percentage;
}

let math = 80;
let english = 75;
let science = 90;

let result = calculatePercentage(math, english, science);

console.log("Percentage =", result.toFixed(2) + "%");
