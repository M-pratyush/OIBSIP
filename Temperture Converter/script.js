document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const output = document.getElementById('output');

    if (isNaN(tempInput) || tempInput === '') {
        output.textContent = 'Please enter a valid number!';
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp;
    let targetUnit;

    switch (unitInput) {
        case 'celsius':
            convertedTemp = {
                fahrenheit: (temp * 9/5) + 32,
                kelvin: temp + 273.15
            };
            targetUnit = 'Fahrenheit and Kelvin';
            output.textContent = `${temp}°C is ${convertedTemp.fahrenheit.toFixed(2)}°F and ${convertedTemp.kelvin.toFixed(2)}K`;
            break;
        case 'fahrenheit':
            convertedTemp = {
                celsius: (temp - 32) * 5/9,
                kelvin: ((temp - 32) * 5/9) + 273.15
            };
            targetUnit = 'Celsius and Kelvin';
            output.textContent = `${temp}°F is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.kelvin.toFixed(2)}K`;
            break;
        case 'kelvin':
            convertedTemp = {
                celsius: temp - 273.15,
                fahrenheit: ((temp - 273.15) * 9/5) + 32
            };
            targetUnit = 'Celsius and Fahrenheit';
            output.textContent = `${temp}K is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.fahrenheit.toFixed(2)}°F`;
            break;
        default:
            output.textContent = 'Please select a valid unit!';
    }
});
