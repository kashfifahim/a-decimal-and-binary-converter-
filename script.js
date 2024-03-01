const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
    if (input === 0) {
        return "";
    } else {
        return decimalToBinary(Math.floor(input/2));
    }
};

const checkUserInput = () => {
    if(!numberInput.value || isNaN(parseInt(numberInput.value))){
        window.alert("Please provide a decimal number");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e)=> {
    if (e.key === "Enter") {
        checkUserInput();
    }
});


/*
const decimalToBinary = (input) => {
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input === 0) {
        result.innerText = "0";
        return;
    };

    while(input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
    result.innerText = remainders.reverse().join("");
};

const countDownAndUp = (number) => {
    console.log(number);
    if(number === 0) {
        console.log('Reached base case');
        return;
    } else {
        countDownAndUp(number - 1);
        console.log(number);
    }
};

countDownAndUp(3);

const decimalToBinary = (input) => {
    let binary = "";
    if(input === 0) binary = "0";
    result.innerText = binary;
    while(input > 0) {
        input = Math.floor(input / 2);
        binary = (input % 2) + binary;
    }
};
*/