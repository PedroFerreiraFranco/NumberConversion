function isValidDecimal(input) {
    return /^\d+$/.test(input);
}

function isValidBinary(input) {
    return /^[01]+$/.test(input);
}

function isValidHexadecimal(input) {
    return /^[0-9a-fA-F]+$/.test(input);
}

function isValidOctal(input) {
    return /^[0-7]+$/.test(input);
}

function decimalToBinary(decimal) {
    let binary = '';
    let num = parseInt(decimal);

    if (num === 0) return '0';

    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

function decimalToHexadecimal(decimal) {
    let hex = '';
    let num = parseInt(decimal);

    if (num === 0) return '0';

    while (num > 0) {
        let remainder = num % 16;
        hex = (remainder < 10 ? remainder : String.fromCharCode(remainder - 10 + 65)) + hex;
        num = Math.floor(num / 16);
    }

    return hex;
}

function decimalToOctal(decimal) {
    let octal = '';
    let num = parseInt(decimal);

    if (num === 0) return '0';

    while (num > 0) {
        octal = (num % 8) + octal;
        num = Math.floor(num / 8);
    }

    return octal;
}

function convertFromDecimal() {
    const decimal = document.getElementById('decimal').value;
    if (!isValidDecimal(decimal)) {
        alert("Por favor, insira um número decimal válido.");
        return;
    }

    document.getElementById('binarioFromDecimal').textContent = decimalToBinary(decimal);
    document.getElementById('hexFromDecimal').textContent = decimalToHexadecimal(decimal);
    document.getElementById('octalFromDecimal').textContent = decimalToOctal(decimal);
}

function binaryToDecimal(binary) {
    let decimal = 0;
    let base = 1;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === '1') {
            decimal += base;
        }
        base *= 2;
    }

    return decimal;
}

function binaryToHexadecimal(binary) {
    const decimal = binaryToDecimal(binary);
    return decimalToHexadecimal(decimal);
}

function binaryToOctal(binary) {
    const decimal = binaryToDecimal(binary);
    return decimalToOctal(decimal);
}

function convertFromBinary() {
    const binary = document.getElementById('binario').value;
    if (!isValidBinary(binary)) {
        alert("Por favor, insira um número binário válido (apenas 0 e 1).");
        return;
    }

    document.getElementById('decimalFromBinary').textContent = binaryToDecimal(binary);
    document.getElementById('hexFromBinary').textContent = binaryToHexadecimal(binary);
    document.getElementById('octalFromBinary').textContent = binaryToOctal(binary);
}

function hexadecimalToDecimal(hex) {
    let decimal = 0;
    const hexLength = hex.length;

    for (let i = 0; i < hexLength; i++) {
        const char = hex[hexLength - 1 - i];
        let value;

        if (char >= '0' && char <= '9') {
            value = parseInt(char);
        } else {
            value = char.toUpperCase().charCodeAt(0) - 55;
        }

        decimal += value * Math.pow(16, i);
    }

    return decimal;
}

function hexadecimalToBinary(hex) {
    const decimal = hexadecimalToDecimal(hex);
    return decimalToBinary(decimal);
}

function hexadecimalToOctal(hex) {
    const decimal = hexadecimalToDecimal(hex);
    return decimalToOctal(decimal);
}

function convertFromHexadecimal() {
    const hex = document.getElementById('hexadecimal').value;
    if (!isValidHexadecimal(hex)) {
        alert("Por favor, insira um número hexadecimal válido (0-9 e A-F).");
        return;
    }

    document.getElementById('binarioFromHex').textContent = hexadecimalToBinary(hex);
    document.getElementById('decimalFromHex').textContent = hexadecimalToDecimal(hex);
    document.getElementById('octalFromHex').textContent = hexadecimalToOctal(hex);
}

function octalToDecimal(octal) {
    let decimal = 0;
    const octalLength = octal.length;

    for (let i = 0; i < octalLength; i++) {
        const digit = parseInt(octal[octalLength - 1 - i]);
        decimal += digit * Math.pow(8, i);
    }

    return decimal;
}

function octalToBinary(octal) {
    const decimal = octalToDecimal(octal);
    return decimalToBinary(decimal);
}

function octalToHexadecimal(octal) {
    const decimal = octalToDecimal(octal);
    return decimalToHexadecimal(decimal);
}

function convertFromOctal() {
    const octal = document.getElementById('octal').value;
    if (!isValidOctal(octal)) {
        alert("Por favor, insira um número octal válido (0-7).");
        return;
    }

    document.getElementById('binarioFromOctal').textContent = octalToBinary(octal);
    document.getElementById('decimalFromOctal').textContent = octalToDecimal(octal);
    document.getElementById('hexFromOctal').textContent = octalToHexadecimal(octal);
}

function clearDecimal() {
    document.getElementById('decimal').value = '';
    document.getElementById('binarioFromDecimal').textContent = '';
    document.getElementById('hexFromDecimal').textContent = '';
    document.getElementById('octalFromDecimal').textContent = '';
}

function clearBinary() {
    document.getElementById('binario').value = '';
    document.getElementById('decimalFromBinary').textContent = '';
    document.getElementById('hexFromBinary').textContent = '';
    document.getElementById('octalFromBinary').textContent = '';
}

function clearHexadecimal() {
    document.getElementById('hexadecimal').value = '';
    document.getElementById('binarioFromHex').textContent = '';
    document.getElementById('decimalFromHex').textContent = '';
    document.getElementById('octalFromHex').textContent = '';
}

function clearOctal() {
    document.getElementById('octal').value = '';
    document.getElementById('binarioFromOctal').textContent = '';
    document.getElementById('decimalFromOctal').textContent = '';
    document.getElementById('hexFromOctal').textContent = '';
}
