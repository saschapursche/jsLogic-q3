const userInput = () => {
    const pattern = /[0-9a-f]{6}/g;
    let input = prompt("Enter Hex or RGB value here")
    if(input.match(pattern)) {
        return convertingHexToRgb(input);
    } else {
        return convertingRgbToHex([input]);
    };
}

const convertingHexToRgb = (userInput) => {
        let splitInput = userInput.match(/.{1,2}/g);
            if(userInput.length != 6) {
                alert("Only six-digit hex colors are allowed.");
            } else {
            const convertedInput = [
                parseInt(splitInput[0], 16),
                parseInt(splitInput[1], 16),
                parseInt(splitInput[2], 16)
            ];
            return convertedInput;
            };
};

const convertingRgbToHex = (userInput) => {
        let converted = userInput[0].match(/\d+/gi).map(Number);
        return "#" +
             ((1<<24) +
             (converted[0]<<16) +
             (converted[1]<<8) +
             converted[2]).toString(16).slice(1);
};
userInput();