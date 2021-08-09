function formValidation() {
    
    const currentDiv = document.getElementById("errormsgs");
    while (currentDiv.firstChild) {
        currentDiv.removeChild(currentDiv.firstChild);
    }
    const newH1 = document.createElement("H1");
    const h1Content = document.createTextNode("Error Messages: \n\n");
    newH1.appendChild(h1Content);
    currentDiv.appendChild(newH1);

    var formValid = validateName("fname");
    formValid = validateName("lname");
    formValid = validateUsername();
    formValid = validatePassword();

    if (!formValid) {
        return false;
    }
    currentDiv.removeChild(newH1);
    return true;
}

function validateName(name) {
    const currentDiv = document.getElementById("errormsgs");
    var validName = true;
    var elem = document.querySelector('#' + name);
    var inputValue = elem.value.trim();
    var whatName;
    if (name == "fname") {whatName = "First"}
    if (name == "lname") {whatName = "Last"}
    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z") { 
        validName = false; 
        var firstLetterCapital = document.createElement("p");
        var capitalContent = document.createTextNode(whatName + " Name: first letter of the name must be capitalized.\n\n");
        firstLetterCapital.appendChild(capitalContent);
        currentDiv.appendChild(firstLetterCapital);
    }
    inputValue = inputValue.toUpperCase();
    
    for (var i = 0; i < inputValue.length; i++) {
         // check all characters are letters
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { 
            validName = false;
            var allLettersChars = document.createElement("p");
            var allLettersContent = document.createTextNode(whatName + " Name: only alphabet characters are allowed.\n\n");
            allLettersChars.appendChild(allLettersContent);
            currentDiv.appendChild(allLettersChars); 
            i = inputValue.length;
        }
    }  
    if (!validName){
         elem.focus();
         return false;
    } 
    return true;
} 

function validatePassword() {
    const currentDiv = document.getElementById("errormsgs");
    var validPass = true;
    var elem1 = document.querySelector("#pword1");
    var elem2 = document.querySelector("#pword2");
    var inputPass1 = elem1.value.trim();
    var inputPass2 = elem2.value.trim();
    var numPresent = false;
    var capitalPresent = false;

    if (inputPass1 != inputPass2) {
        validPass = false;
        var sameP = document.createElement("p");
        var sameContent = document.createTextNode("Password: Re-typed password must match password.\n\n");
        sameP.appendChild(sameContent);
        currentDiv.appendChild(sameP);
    }else {
        if (inputPass1.length < 6){
            validPass = false;
            var lengthP = document.createElement("p");
            var lengthContent = document.createTextNode("Password: must be at least 6 characters long.\n\n");
            lengthP.appendChild(lengthContent);
            currentDiv.appendChild(lengthP);
        }else{
            for (var i = 0; i < inputPass1.length; i++) {
                // check if there is a number in the password
                if (inputPass1.charAt(i) >= 0 && inputPass1.charAt(i) <= 9 )  { numPresent = true; }
                // check if there is a capital letter in the password
                if (inputPass1.charAt(i) >= "A" && inputPass1.charAt(i) <= "Z" )  { capitalPresent = true; }
            } 
            
            if (!numPresent){
                validPass = false;
                var numinP = document.createElement("p");
                var numContent = document.createTextNode("Password: Must have at least 1 digit.\n\n");
                numinP.appendChild(numContent);
                currentDiv.appendChild(numinP);
            }
            if (!capitalPresent){
                validPass = false;
                var capitalinP = document.createElement("p");
                var capitalContent = document.createTextNode("Password: Must have at least 1 capital.\n\n");
                capitalinP.appendChild(capitalContent);
                currentDiv.appendChild(capitalinP);
            }
        }  
    }

    if (!validPass){
        elem1.focus();
        return false;
    }
    return true;
}

function validateUsername() {
    var Div = document.getElementById("errormsgs");
    var validUsername = true;
    var elem = document.querySelector("#uname");
    var inputValue = elem.value.trim();

    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z") { 
        validUsername = false; 
        var firstLetterAlphabet = document.createElement("p");
        var alphabetContent = document.createTextNode("Username: first letter of the username must be an alphabet.\n\n");
        firstLetterAlphabet.appendChild(alphabetContent);
        Div.appendChild(firstLetterAlphabet);
    }
    
    if (inputValue.length < 6){
        validUsername = false;
        var sixChars = document.createElement("p");
        var sixCharsContent = document.createTextNode("Username: must be at least 6 characters.\n\n");
        sixChars.appendChild(sixCharsContent);
        Div.appendChild(sixChars); 
    }

    if (!validUsername){
         elem.focus();
         return false;
    } 
    return true;
}