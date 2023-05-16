const userInput = () => {
    const pattern = /#[0-9a-f]{6}/g;
    let input = prompt("Enter Hex or RGB value here")
    if(input.match(pattern)) {
        console.log("hex", input);
        convertingHexToRgb(input);
    } else {
        console.log("rgb", input); //only outputs rgb without calling function
        convertingRgbToHex([input]);
    };
}

const convertingHexToRgb = (userInput) => {
    //const userInput = prompt("Enter Hex value here.");
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
//convertingHexToRgb();


const convertingRgbToHex = (userInput) => {
    //const userInput = [prompt("Enter RGB value here.")];
        let converted = userInput[0].match(/\d+/gi).map(Number);
        return "#" +
             ((1<<24) +
             (converted[0]<<16) +
             (converted[1]<<8) +
             converted[2]).toString(16).slice(1);
};
//convertingRgbToHex();
userInput();

//Question 3: Write a function that converts HEX to RGB.
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB
//and if you enter RGB color format it returns HEX.