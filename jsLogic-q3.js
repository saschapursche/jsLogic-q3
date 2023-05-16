const convertingHexToRgb = () => {
const userInput = prompt("Enter Hex or RGB value here")
let splitInput = userInput.match(/.{1,2}/g);
    if(userInput.length != 6) {
        throw "Only six-digit hex colors are allowed.";
    } else {
    const convertedInput = [
        parseInt(splitInput[0], 16),
        parseInt(splitInput[1], 16),
        parseInt(splitInput[2], 16)
    ];
    return convertedInput;
    };
};
convertingHexToRgb();


//learn again, giving some value to another constant

//Question 3: Write a function that converts HEX to RGB.
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB
//and if you enter RGB color format it returns HEX.