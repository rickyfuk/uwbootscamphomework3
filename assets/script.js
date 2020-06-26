// part 1 - Define the global variable
    // number 
    var num = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9];

    // Capital letter
    var capLetter = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"];

    // Lower Case Letter
    var letter = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"];

    // Special Character
    var specialChar = [
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        '\\',
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~"];
    
    // set an array to store the temp result for final output
    var passwordArray = [];

    // full char array - default is an empty array
    var fullChatArray = [];   

    // set the default password as empty (for the final output)
    var password = "";

    // function 1.1 - clear the previous record
    function clearPreviousResult(){
        passwordArray = [];
        password = "";
        fullChatArray = []; 
       }

// end of Part 1

// Part 2 - function for getting the response from the user
    
    // function 2.1 : add a function for confirm the chat type is needed 
    function questionForChar(charTypeName){
        return confirm("Does your password need any " + charTypeName + "?");
    };
    // end of function 2.1 

    // function 2.2: body function for getting the response from the user
    function getUserResponse() {
        
        //Part 2a - Get the password length 
        var passwordLength = parseInt( prompt("How many characters do you need? (must between 8 to 128 characters)"));
            // reject the result if the response is not a number between 8 to 128 and return nothing
            if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
                alert("Please enter a number between 8 to 128 only"); 
                return;
            }

        // Part 2b - confirm if the password need to contain any number by function 2.1
        var needNum = questionForChar("number");

        // Part 2c - confirm if the password need to contain any Captial Letter by function 2.1
        var needCapLetter = questionForChar("capatial letter");

        // Part 2d - confirm if the password need to contain any lower case letter by function 2.1
        var needLetter = questionForChar("lower case letter");

        // Part 2e - confirm if the password need to contain any special character by function 2.1
        var needSpecChar = questionForChar("special character");
        
            // reject if the all annswer are negative and return nothing
            if (!needNum && 
                !needCapLetter && 
                !needLetter &&
                !needSpecChar){
                    alert ("Please select at least one type of character")
                    return;
                }
        // return an object with the user response
        return userResponse = {
            passwordLength : passwordLength,
            needNum : needNum,
            needCapLetter : needCapLetter,
            needLetter : needLetter,
            needSpecChar : needSpecChar
        };
    };
    // end of function 2.2
// end of part 2
        
// part 3 - combine the full char array
    // function 3.1 - return the full char array after the char array added
    function addToCharBase(charType){
        return fullChatArray = fullChatArray.concat(charType);
    };
    // end of function 3.1

    // function 3.2 - body function for pick or drop the char array based on the user selection
    function combineFullChatArray(){
        // part 3.2.a - add num array to full char array if neednum is true
        if (userResponse.needNum){
            addToCharBase(num);
        };
        // part 3.2.b - add cap letter to full char array if needCapLetter is true
        if (userResponse.needCapLetter){
            addToCharBase(capLetter);
        };
        // part 3.2.c - add lower case letter to full char array if needLetter is true
        if (userResponse.needLetter){
            addToCharBase(letter);
        };
        // part 3.2.d - add special char to full char array if needSpecChar is true
        if (userResponse.needSpecChar){
            addToCharBase(specialChar);
        };
    };
    // end of function 3.2
// end of part 3

// part 4 - generate the password
    // function 4.1 - generate a random number
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    // end of function 4.1

    // function 4.2 - generate a single char
    function gernerateAChar() {
        return fullChatArray[getRandomInt(fullChatArray.length)];
    };
    // end of function 4.2

    // function 4.3 - body function full up the password array with random char and retrun the password
    function fillUpPasswordArray(length){
        for (var i = 0; i < length; i++) {
            passwordArray[i] = gernerateAChar();
            password = password + passwordArray[i];
        };
        return password; 
    };
    // end of function 4.3
// end of part 4

// part 5 - display the password when the "Generate Password" Button is click
    // body function for reverting the result to html
    function displayTheResult(){ 
        // reset the password / password Array / full char array
        clearPreviousResult();
        // clear the previous result from the password box
        document.getElementById("passwordResult").innerHTML = " ";
        // excute the get user response
        getUserResponse();
        // generate the full char base 
        combineFullChatArray();
        // generate a randow password
        fillUpPasswordArray(userResponse.passwordLength);
        // console the password for reference
        console.log(password);
        // return the result to html password box
        document.getElementById("passwordResult").innerHTML = password;
    } ;
// end of part 5

// part 6 - copy to clipboard
    // body function
    function copyToClipboard() {
        // Get the text from password box 
        var copyText = document.getElementById("passwordResult");
        // Select the text
        copyText.select();
        // select the text (for mobile device)
        copyText.setSelectionRange(0, 99999)
        // copy the text inside the password box
        document.execCommand("copy");
    };
// end of part 6

// Part 7 - execution for the "Generate Password" and "Copy to Clipboard" button
    // Part 7.1 - the execute command for "Generate Password" button
    document.getElementById("btnforpassword").addEventListener("click",displayTheResult);
    // Part 7.2 - the execute command for "Copy to Clipboard" button 
    document.getElementById("btnforclipboard").addEventListener("click",copyToClipboard);
// end of part 7
    
    
    
