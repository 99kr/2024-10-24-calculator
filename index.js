function calculator() {
	alert(`Welcome to the calculator!
I will need your first number, then your second number
and finally the operator you wish to calculate with.`);

	const firstNumber = getNumberFromUser("Whats your first number?");
	if (firstNumber == null) return;

	const secondNumber = getNumberFromUser("Whats your second number?");
	if (secondNumber == null) return;

	const operator = getOperatorFromUser(`What operator do you wish to use?
Valid operators are +, -, *, and /`);
	if (operator == null) return;

	const result = calculate(firstNumber, secondNumber, operator);
	if (result == null) {
		alert("There was an error calculating your result, restarting calculator...");
		return calculator();
	}

	alert(`The result of ${firstNumber} ${operator} ${secondNumber} is ${result}.
Thank you for using the calculator, goodbye!`);
}

function getNumberFromUser(promptMessage) {
	let number = prompt(promptMessage);

	if (number === null) {
		return alert("Cancelled, goodbye!");
	}

	if (isNaN(number) || number.trim().length === 0) {
		alert("Invalid input, please input a valid number");
		return getNumberFromUser(promptMessage);
	}

	return Number(number);
}

function getOperatorFromUser(promptMessage) {
	const operator = prompt(promptMessage);

	if (operator === null) {
		return alert("Cancelled, goodbye!");
	}

	if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
		return operator;
	} else {
		alert("Invalid input, please input a valid operator (+, -, *, /)");
		return getOperatorFromUser(promptMessage);
	}
}

function calculate(firstNumber, secondNumber, operator) {
	switch (operator) {
		case "+":
			return firstNumber + secondNumber;
		case "-":
			return firstNumber - secondNumber;
		case "*":
			return firstNumber * secondNumber;
		case "/":
			return firstNumber / secondNumber;
		default:
			return null;
	}
}

calculator();
